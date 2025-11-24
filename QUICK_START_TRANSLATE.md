# ⚡ Quick Start - Dịch Tự Động Tiếng Anh (5 phút)

## 🎯 Mục Đích

Dịch file `src/i18n/vi/index.ts` (tiếng Việt) → `src/i18n/en/index.ts` (tiếng Anh) tự động bằng Google Translate API.

---

## 🔑 Bước 1: Lấy Google API Key (3 phút)

### 1. Vào Google Cloud Console
```
https://console.cloud.google.com/
```

### 2. Tạo Project mới
- Click vào project dropdown ở phía trên
- Chọn "New Project"
- Nhập tên: "TML Seafood"
- Click "Create"

### 3. Enable Google Translate API
```
https://console.cloud.google.com/apis/library
```
- Tìm "Cloud Translation API"
- Click vào
- Click "ENABLE"

### 4. Tạo API Key
```
https://console.cloud.google.com/apis/credentials
```
- Click "Create Credentials" → "API Key"
- Copy API Key (ví dụ: `AIzaSyD...`)

---

## 📝 Bước 2: Tạo File `.env.local` (1 phút)

Tạo file `.env.local` ở **thư mục root project** (cùng cấp với `package.json`):

```env
GOOGLE_TRANSLATE_API_KEY=AIzaSyD...
```

**Lưu ý:** Thay `AIzaSyD...` bằng API Key bạn vừa copy.

### Kiểm tra file tồn tại:
```bash
ls -la .env.local
```

---

## 🚀 Bước 3: Chạy Script Dịch (1 phút)

```bash
npm run translate:google
```

**Chờ khoảng 1 phút, kết quả:**

```
🌐 Bắt đầu dịch với Google Translate API...
⏳ Quá trình dịch có thể mất vài phút...

📝 navigation.home... ✅
📝 navigation.about... ✅
📝 navigation.products... ✅
...
✅ Dịch thành công! (45.23s)
📄 File lưu tại: src/i18n/en/index.ts
```

---

## ✅ Xong!

File `src/i18n/en/index.ts` được tạo tự động với bản dịch tiếng Anh.

### Bước tiếp theo (tuỳ chọn):
1. **Review translations** - Mở file `src/i18n/en/index.ts` kiểm tra chất lượng
2. **Build & test**:
   ```bash
   npm run build
   npm start
   ```
3. **Chuyển sang tiếng Anh** - Click nút EN ở header để test

---

## 💰 Chi Phí

- **$300 FREE CREDITS** từ Google (90 ngày)
- Project bạn chỉ dùng ~$0.0002 per lần dịch
- **Hoàn toàn miễn phí!** 🎉

---

## ❓ Nếu Có Lỗi

### ❌ "API Key invalid"
- Kiểm tra API Key đúng chưa
- Kiểm tra API được enable chưa
- Copy lại API Key

### ❌ ".env.local not found"
- Tạo file `.env.local` ở thư mục root
- Thêm `GOOGLE_TRANSLATE_API_KEY=...`

### ❌ "Module not found"
- Chạy: `npm install --save-dev --legacy-peer-deps @google-cloud/translate dotenv`

---

## 📊 So Sánh 4 Cách Dịch

| Method | Command | Chi Phí | Chất Lượng | Tốc Độ |
|--------|---------|---------|-----------|--------|
| MyMemory | `npm run translate` | Miễn phí | 80% | ⭐⭐ |
| LibreTranslate | `npm run translate:free` | Miễn phí | 85% | ⭐⭐ |
| **Google** | **`npm run translate:google`** | **🎉 Miễn phí** | **90%+** | **⭐⭐⭐** |
| OpenAI | `npm run translate:openai` | $0.50 | 95%+ | ⭐⭐⭐ |

---

## 🎉 Done!

**Lệnh dùng mỗi khi cập nhật tiếng Việt:**
```bash
npm run translate:google
```

Happy translating! 🌍✨

