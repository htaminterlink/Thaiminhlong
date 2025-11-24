#!/usr/bin/env node

/**
 * Translation Script - Dịch file vi/index.ts sang en/index.ts
 *
 * Sử dụng MyMemory Translation API (100% miễn phí, no limit)
 * Không cần cài package thêm - chỉ dùng built-in fetch
 *
 * Chạy: node translate-simple.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// MyMemory API endpoint
const API_ENDPOINT = "https://api.mymemory.translated.net/get";

// Đọc file tiếng Việt
const viFilePath = path.join(__dirname, "src", "i18n", "vi", "index.ts");
const viContent = fs.readFileSync(viFilePath, "utf-8");

// Extract object từ file
let viObject;
try {
  // Extract the object content between the assignment and export
  const objectStr = viContent
    .replace("const viTranslations = ", "")
    .replace("export default viTranslations;", "")
    .trim();

  // Use Function constructor instead of eval for better compatibility
  viObject = new Function("return " + objectStr)();
} catch (error) {
  console.error("❌ Lỗi đọc file vi/index.ts:", error.message);
  process.exit(1);
}

console.log("🌐 Bắt đầu dịch với MyMemory Translation API...\n");

/**
 * Dịch một string
 */
async function translateString(text) {
  if (!text || text.trim() === "") return text;

  try {
    const params = new URLSearchParams({
      q: text,
      langpair: "vi|en",
    });

    const response = await fetch(`${API_ENDPOINT}?${params}`);
    const data = await response.json();

    if (data.responseStatus === 200) {
      return data.responseData.translatedText || text;
    } else {
      console.warn(`⚠️  Không thể dịch: "${text}"`);
      return text;
    }
  } catch (error) {
    console.warn(`⚠️  Lỗi API: ${error.message}`);
    return text;
  }
}

/**
 * Dịch toàn bộ object
 */
async function translateObject(obj, prefix = "", depth = 0) {
  const result = {};
  const indent = "  ".repeat(depth);

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      process.stdout.write(`${indent}📝 ${currentPath}... `);
      result[key] = await translateString(value);
      console.log(`✅`);
    } else if (Array.isArray(value)) {
      result[key] = await Promise.all(
        value.map(async (item) => {
          if (typeof item === "string") {
            return await translateString(item);
          } else if (typeof item === "object") {
            return await translateObject(item, currentPath, depth + 1);
          }
          return item;
        })
      );
    } else if (typeof value === "object" && value !== null) {
      result[key] = await translateObject(value, currentPath, depth + 1);
    } else {
      result[key] = value;
    }

    // Delay để tránh rate limiting (200ms)
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  return result;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log("⏳ Quá trình dịch có thể mất vài phút...\n");
    const startTime = Date.now();

    const enObject = await translateObject(viObject);

    // Generate file content
    const fileContent = `const enTranslations = ${JSON.stringify(
      enObject,
      null,
      2
    )};

export default enTranslations;
`;

    // Write to file
    const enFilePath = path.join(__dirname, "src", "i18n", "en", "index.ts");
    fs.writeFileSync(enFilePath, fileContent, "utf-8");

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✅ Dịch thành công! (${duration}s)`);
    console.log(`📄 File lưu tại: ${enFilePath}`);
    console.log(
      "\n💡 Gợi ý: Hãy review lại các translations để đảm bảo chất lượng."
    );
  } catch (error) {
    console.error("\n❌ Lỗi trong quá trình dịch:", error.message);
    process.exit(1);
  }
}

main();
