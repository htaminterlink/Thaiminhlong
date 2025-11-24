#!/usr/bin/env node

/**
 * Translation Script - Dịch file vi/index.ts sang en/index.ts
 *
 * Sử dụng Google Translate API
 *
 * Setup:
 * 1. npm install --save-dev @google-cloud/translate dotenv
 * 2. Tạo file .env.local với nội dung:
 *    GOOGLE_APPLICATION_CREDENTIALS=/path/to/google-credentials.json
 *    hoặc
 *    GOOGLE_TRANSLATE_API_KEY=your-api-key
 * 3. Chạy: node translate-google.js
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

// Import Google Translate
let GoogleTranslate;
try {
  GoogleTranslate = require('@google-cloud/translate').v2.Translate;
} catch (e) {
  console.error('❌ @google-cloud/translate package không được cài đặt.');
  console.error('Chạy: npm install --save-dev @google-cloud/translate dotenv');
  process.exit(1);
}

// Cấu hình Google Translate
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!apiKey && !credentialsPath) {
  console.error('❌ Thiếu cấu hình Google Translate.');
  console.error('\nOption 1: Dùng API Key');
  console.error('Tạo file .env.local với nội dung:');
  console.error('GOOGLE_TRANSLATE_API_KEY=your-api-key\n');
  console.error('Option 2: Dùng Service Account');
  console.error('Tạo file .env.local với nội dung:');
  console.error('GOOGLE_APPLICATION_CREDENTIALS=/path/to/google-credentials.json\n');
  process.exit(1);
}

// Tạo instance Google Translate
let translate;
try {
  if (apiKey) {
    translate = new GoogleTranslate({ key: apiKey });
  } else {
    translate = new GoogleTranslate();
  }
} catch (error) {
  console.error('❌ Lỗi khởi tạo Google Translate:', error.message);
  process.exit(1);
}

// Đọc file tiếng Việt
const viFilePath = path.join(__dirname, 'src', 'i18n', 'vi', 'index.ts');
const viContent = fs.readFileSync(viFilePath, 'utf-8');

// Extract object từ file
let viObject;
try {
  const objectStr = viContent
    .replace('const viTranslations = ', '')
    .replace('export default viTranslations;', '')
    .trim();

  viObject = new Function('return ' + objectStr)();
} catch (error) {
  console.error('❌ Lỗi đọc file vi/index.ts:', error.message);
  process.exit(1);
}

console.log('🌐 Bắt đầu dịch với Google Translate API...\n');

/**
 * Dịch một string
 */
async function translateString(text) {
  if (!text || text.trim() === '') return text;

  try {
    const results = await translate.translate(text, {
      from: 'vi',
      to: 'en',
    });

    // translate() trả về array, lấy phần tử đầu tiên
    return Array.isArray(results) ? results[0] : results;
  } catch (error) {
    console.warn(`⚠️  Không thể dịch: "${text}"`);
    console.warn(`   Lỗi: ${error.message}\n`);
    return text;
  }
}

/**
 * Dịch toàn bộ object
 */
async function translateObject(obj, prefix = '', depth = 0) {
  const result = {};
  const indent = '  '.repeat(depth);

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      process.stdout.write(`${indent}📝 ${currentPath}... `);
      result[key] = await translateString(value);
      console.log(`✅`);
    } else if (Array.isArray(value)) {
      result[key] = await Promise.all(
        value.map(async (item) => {
          if (typeof item === 'string') {
            return await translateString(item);
          } else if (typeof item === 'object') {
            return await translateObject(item, currentPath, depth + 1);
          }
          return item;
        })
      );
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, currentPath, depth + 1);
    } else {
      result[key] = value;
    }

    // Delay để tránh rate limiting
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  return result;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('⏳ Quá trình dịch có thể mất vài phút...\n');
    const startTime = Date.now();

    const enObject = await translateObject(viObject);

    // Generate file content
    const fileContent = `const enTranslations = ${JSON.stringify(enObject, null, 2)};

export default enTranslations;
`;

    // Write to file
    const enFilePath = path.join(__dirname, 'src', 'i18n', 'en', 'index.ts');
    fs.writeFileSync(enFilePath, fileContent, 'utf-8');

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✅ Dịch thành công! (${duration}s)`);
    console.log(`📄 File lưu tại: ${enFilePath}`);
    console.log(
      '\n💡 Gợi ý: Hãy review lại các translations để đảm bảo chất lượng.'
    );
  } catch (error) {
    console.error('\n❌ Lỗi trong quá trình dịch:', error.message);
    process.exit(1);
  }
}

main();

