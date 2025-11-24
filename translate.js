#!/usr/bin/env node

/**
 * Translation Script - Dịch file vi/index.ts sang en/index.ts
 *
 * Sử dụng OpenAI API để dịch tự động
 *
 * Setup:
 * 1. npm install openai dotenv
 * 2. Tạo file .env.local với nội dung:
 *    OPENAI_API_KEY=sk-...your-key-here...
 * 3. Chạy: node translate.js
 */

const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env.local") });

// Import OpenAI (sử dụng require vì không có TypeScript)
let OpenAI;
try {
  OpenAI = require("openai").default;
} catch (e) {
  console.error("❌ OpenAI package không được cài đặt.");
  console.error("Chạy: npm install openai dotenv");
  process.exit(1);
}

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ Thiếu OPENAI_API_KEY trong .env.local");
  console.error("\nVui lòng tạo file .env.local với nội dung:");
  console.error("OPENAI_API_KEY=sk-...your-key-here...\n");
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

// Đọc file tiếng Việt
const viFilePath = path.join(__dirname, "src", "i18n", "vi", "index.ts");
const viContent = fs.readFileSync(viFilePath, "utf-8");

// Extract object từ file
const viObject = eval(
  viContent
    .replace("const viTranslations = ", "")
    .replace("export default viTranslations;", "")
);

console.log("🌐 Bắt đầu dịch...\n");

/**
 * Dịch một string
 */
async function translateString(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: `You are a professional translator specializing in e-commerce and seafood industry. 
Translate Vietnamese to English, maintaining the exact same meaning and tone. 
Keep brand names like "Thai Minh Long Company Limited" and "Trinity Vietnam" unchanged.
Keep special characters like ® and © intact.
Return ONLY the translated text, nothing else.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(`❌ Lỗi dịch: ${error.message}`);
    throw error;
  }
}

/**
 * Dịch toàn bộ object
 */
async function translateObject(obj, prefix = "") {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      console.log(`📝 Dịch: ${currentPath}`);
      result[key] = await translateString(value);
      console.log(`   ✅ → ${result[key]}\n`);
    } else if (Array.isArray(value)) {
      result[key] = await Promise.all(
        value.map(async (item) => {
          if (typeof item === "string") {
            return await translateString(item);
          } else if (typeof item === "object") {
            return await translateObject(item, currentPath);
          }
          return item;
        })
      );
    } else if (typeof value === "object" && value !== null) {
      result[key] = await translateObject(value, currentPath);
    } else {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Main function
 */
async function main() {
  try {
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

    console.log("\n✅ Dịch thành công!");
    console.log(`📄 File lưu tại: ${enFilePath}`);
    console.log(
      "\n💡 Gợi ý: Hãy review lại các translations để đảm bảo chất lượng."
    );
  } catch (error) {
    console.error("\n❌ Lỗi trong quá trình dịch:", error);
    process.exit(1);
  }
}

main();
