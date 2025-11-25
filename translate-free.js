#!/usr/bin/env node

/**
 * Translation Script - Dịch file vi/index.ts sang en/index.ts
 *
 * Sử dụng LibreTranslate API (miễn phí, không cần API key)
 *
 * Setup:
 * 1. npm install axios
 * 2. Chạy: node translate-free.js
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");

// API endpoint
const API_ENDPOINT = "https://libretranslate.de/translate";

// Đọc file tiếng Việt
const viFilePath = path.join(__dirname, "src", "i18n", "vi", "index.ts");
const viContent = fs.readFileSync(viFilePath, "utf-8");

// Extract object từ file
const viObject = eval(
  viContent
    .replace("const viTranslations = ", "")
    .replace("export default viTranslations;", "")
);

console.log("🌐 Bắt đầu dịch với LibreTranslate API...\n");

/**
 * Dịch một string
 */
async function translateString(text) {
  if (!text || text.trim() === "") return text;

  try {
    const response = await axios.post(API_ENDPOINT, {
      q: text,
      source: "vi",
      target: "en",
    });

    return response.data.translatedText || text;
  } catch (error) {
    console.warn(`⚠️  Không thể dịch: "${text}"`);
    console.warn(`   Lỗi: ${error.message}\n`);
    return text; // Return original text nếu lỗi
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

    // Delay để tránh rate limiting
    await new Promise((resolve) => setTimeout(resolve, 500));
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
