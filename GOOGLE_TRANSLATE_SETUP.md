# 🌐 Google Translate API - Hướng Dẫn Setup

## 📋 Bước 1: Tạo Google Cloud Project

### 1.1 Truy cập Google Cloud Console

```
https://console.cloud.google.com/
```

### 1.2 Tạo Project mới

- Click vào project dropdown ở phía trên
- Chọn "New Project"
- Nhập tên: "TML Seafood Translation"
- Click "Create"

---

## 🔑 Bước 2: Tạo API Key hoặc Service Account

### **Option A: Dùng API Key (Đơn giản - Khuyên dùng)**

#### 2A.1 Enable Google Translate API

1. Vào: `https://console.cloud.google.com/apis/library`
2. Tìm "Cloud Translation API"
3. Click vào, rồi click "ENABLE"

#### 2A.2 Tạo API Key

1. Vào: `https://console.cloud.google.com/apis/credentials`
2. Click "Create Credentials" → "API Key"
3. Copy API Key
4. Tạo file `.env.local` trong project root:

```env
GOOGLE_TRANSLATE_API_KEY=your-api-key-here
```

**Chi phí:** ~$15-20 per 1 triệu ký tự

---

### **Option B: Dùng Service Account (Bảo mật hơn)**

#### 2B.1 Tạo Service Account

1. Vào: `https://console.cloud.google.com/iam-admin/serviceaccounts`
2. Click "Create Service Account"
3. Nhập tên: "tml-translation-service"
4. Click "Create and Continue"
5. Grant role: "Editor" hoặc "Cloud Translation Admin"
6. Click "Continue" rồi "Done"

#### 2B.2 Tạo Key

1. Click vào service account vừa tạo
2. Tab "Keys"
3. Click "Add Key" → "Create new key"
4. Chọn "JSON"
5. Click "Create"
6. File JSON sẽ download tự động

#### 2B.3 Cấu hình

1. Lưu file JSON vào thư mục project (ví dụ: `google-credentials.json`)
2. Tạo file `.env.local`:

```env
GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json
```

---

## 🚀 Bước 3: Chạy Script Dịch

### Cách 1: Dùng API Key (Đơn giản)

```bash
npm run translate:google
```

### Cách 2: Dùng Service Account

```bash
npm run translate:google
```

**Lưu ý:** File `.env.local` tự động được đọc

---

## 📊 Chi Phí & Chất Lượng

| Method         | Chi Phí                      | Chất Lượng | Setup          | Khuyên            |
| -------------- | ---------------------------- | ---------- | -------------- | ----------------- |
| MyMemory       | Miễn phí                     | 80%        | Dễ             | ✅                |
| LibreTranslate | Miễn phí                     | 85%        | Trung bình     | ✅                |
| OpenAI         | $0.50-1                      | 95%+       | Khó            | Tốt               |
| **Google**     | **🎉 MIỄN PHÍ (Free Trial)** | **90%+**   | **Trung bình** | **✅✅ TỐT NHẤT** |

---

## ⚡ Lợi Ích Google Translate API

✅ **Chất lượng dịch rất tốt (90%+)** - Tốt hơn MyMemory & LibreTranslate  
✅ **Nhanh nhất** - Không delay giữa các item  
✅ Hỗ trợ 100+ ngôn ngữ  
✅ **Hoàn toàn MIỄN PHÍ với $300 free credits (90 ngày)**  
✅ Không cần trả tiền trước - tự động dùng credits  
✅ Có thể optimize chi phí bằng batch requests

---

## 🎉 Free Trial - HOÀN TOÀN MIỄN PHÍ

### Free Credits

- Google Cloud tặng **$300 FREE CREDITS** trong 90 ngày đầu
- **Bạn không cần trả thẻ tín dụng để nhận credits này!**
- Đủ cho **20 triệu ký tự dịch**

### Tính Toán Chi Phí

- Project bạn: ~270 items × 50 ký tự = ~13,500 ký tự
- **Một lần dịch: ~$0.0002 (gần như miễn phí)**
- Bạn có thể dịch lại hàng trăm lần trong free trial

### Sau Trial (Nếu cần tiếp tục)

- **$15 per 1 triệu ký tự**
- Nhưng bạn có thể dùng MyMemory hoặc LibreTranslate miễn phí thay thế

---

## 🔒 Bảo Mật

### Không để API Key ở public

```bash
# ❌ KHÔNG làm cái này
git add .env.local
git push

# ✅ Làm cái này
echo ".env.local" >> .gitignore
```

### File `.gitignore` đã có `.env.local`?

```bash
grep ".env" .gitignore
```

---

## ✨ Kết Quả Thực Tế

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

## 🐛 Troubleshooting

### ❌ "API Key invalid"

**Fix:**

1. Kiểm tra API Key đúng chưa
2. Kiểm tra API được enable chưa:
   ```
   https://console.cloud.google.com/apis/api/translate.googleapis.com/overview
   ```
3. Chọn đúng Project

### ❌ "Permission denied"

**Fix:**

1. Nếu dùng Service Account, check file JSON đúng chưa
2. Check path trong `.env.local` đúng chưa
3. Chạy lại: `npm run translate:google`

### ❌ "Rate limit exceeded"

**Fix:**

- Script có delay 300ms, nhưng nếu vẫn gặp:
- Tăng delay trong script lên 500ms
- Hoặc chờ vài phút rồi chạy lại

---

## 📚 Tài Liệu Thêm

- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Translate API Docs](https://cloud.google.com/translate/docs)
- [Pricing](https://cloud.google.com/translate/pricing)
- [Free Trial Info](https://cloud.google.com/free)

---

## 🎯 So Sánh Script Dịch

```bash
npm run translate           # MyMemory - Miễn phí, chất lượng 80%
npm run translate:free      # LibreTranslate - Miễn phí, chất lượng 85%
npm run translate:google    # Google - 🎉 MIỄN PHÍ ($300 free), chất lượng 90%+ ⭐⭐⭐ KHUYÊN
npm run translate:openai    # OpenAI - Tính phí, chất lượng 95%+
```

---

## ✅ Quy Trình Dịch Hoàn Chỉnh

```bash
# 1. Setup Google Translate API Key
# (Tạo .env.local)

# 2. Chạy script dịch
npm run translate:google

# 3. Review translations
# Mở src/i18n/en/index.ts

# 4. Build & test
npm run build
npm start

# 5. Kiểm tra EN page
# Chuyển sang EN, test các trang
```

Happy translating! 🎉
