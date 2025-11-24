# 🌐 Hệ Thống Dịch Tự Động - TML Seafood

## ✅ Tổng Quát

Dự án này có **hệ thống i18n hoàn chỉnh** với:
- ✅ File tiếng Việt (`src/i18n/vi/index.ts`)
- ✅ File tiếng Anh (`src/i18n/en/index.ts`) - **Được dịch tự động**
- ✅ Language switcher (Header)
- ✅ Lưu vị trí scroll khi chuyển ngôn ngữ

---

## 🚀 Sử Dụng Nhanh

### **Chạy lần đầu / Cập nhật translations**
```bash
npm run translate
```

**Khoảng 2 phút, tất cả xong!** ✨

### **Test project**
```bash
npm start
```

### **Build production**
```bash
npm run build
```

---

## 📁 Cấu Trúc

```
src/i18n/
├── vi/
│   └── index.ts          # ✏️ Edit file này (tiếng Việt)
├── en/
│   └── index.ts          # 🔄 Tự động từ script
└── config.ts
```

---

## 🎯 Workflow

### **Khi cần thêm/sửa text:**

1. **Sửa file tiếng Việt:**
```typescript
// src/i18n/vi/index.ts
export const viTranslations = {
  navigation: {
    home: "Trang chủ",
    about: "Giới thiệu",  // ← Thêm/sửa tại đây
  }
}
```

2. **Chạy script dịch:**
```bash
npm run translate
```

3. **Review (tùy chọn):**
Mở `src/i18n/en/index.ts` kiểm tra, sửa nếu cần

4. **Build & test:**
```bash
npm run build
npm start
```

---

## 🛠️ 3 Cách Dịch

### **1. MyMemory (Mặc định - Khuyên dùng) ⭐**
```bash
npm run translate
```
- ✅ Miễn phí 100%
- ✅ Không cần setup
- ✅ Nhanh (2 phút)
- ⚠️ Chất lượng 80-85%

---

### **2. LibreTranslate (Tốt hơn)**
```bash
# Setup lần đầu
npm install axios

# Chạy
npm run translate:free
```
- ✅ Chất lượng 85-90%
- ✅ Miễn phí
- ⚠️ Cần cài package

---

### **3. OpenAI (Xuất sắc) 🏆**
```bash
# Setup lần đầu
npm install openai dotenv

# Tạo file .env.local
echo "OPENAI_API_KEY=sk-..." > .env.local

# Chạy
npm run translate:openai
```
- ✅ Chất lượng 95%+
- ✅ Hiểu context
- ❌ Tính phí (~$0.50/lần)

---

## 📊 Ví Dụ Kết Quả

| Tiếng Việt | MyMemory | LibreTranslate | OpenAI |
|-----------|----------|---|---|
| Về Thai Minh Long | About Thai Minh Long | About Thai Minh Long | About Thai Minh Long Company Limited |
| Tôm | Prawn | Shrimp | Shrimp |
| Nhà máy | Plant | Factory | Factory |

---

## 🔍 Review Translations

Sau khi script chạy, kiểm tra một vài cái:

```typescript
// ❌ Không ổn
"factory": "Plant"

// ✅ Đúng
"factory": "Factory"
```

**Sửa nhanh:**
- Mở `src/i18n/en/index.ts`
- Tìm & replace (Ctrl+H)
- Save file

---

## 💡 Tips & Tricks

### Backup trước dịch
```bash
cp src/i18n/en/index.ts src/i18n/en/index.ts.backup
npm run translate
```

### Dịch lại từ backup
```bash
cp src/i18n/en/index.ts.backup src/i18n/en/index.ts
```

### Dịch chỉ một section
Sửa file `translate-simple.mjs`, chỉnh sửa:
```javascript
// const enObject = await translateObject(viObject);
const enObject = await translateObject(viObject.hero); // Chỉ dịch hero
```

---

## ⚡ Performance

**Số lượng translations hiện tại:** ~170 items

**Thời gian chạy:**
- MyMemory: 2-3 phút
- LibreTranslate: 2-3 phút  
- OpenAI: 1-2 phút

---

## 🐛 Troubleshooting

### Script lỗi?
```bash
# Kiểm tra Node.js
node --version   # Cần >= v14

# Kiểm tra kết nối
ping google.com

# Chạy lại
npm run translate
```

### Chất lượng dịch kém?
```bash
# Thử LibreTranslate
npm install axios
npm run translate:free

# Hoặc OpenAI (tốt nhất)
npm run translate:openai
```

### File bị lỗi?
```bash
# Restore từ backup
cp src/i18n/en/index.ts.backup src/i18n/en/index.ts

# Hoặc đơn giản xóa & dịch lại
rm src/i18n/en/index.ts
npm run translate
```

---

## 📚 Tài Liệu Thêm

- `TRANSLATION_GUIDE.md` - Hướng dẫn chi tiết
- `SCRIPT_USAGE.md` - Cách sử dụng script
- `translate-simple.mjs` - Mã nguồn (MyMemory)
- `translate-free.js` - Mã nguồn (LibreTranslate)
- `translate.js` - Mã nguồn (OpenAI)

---

## 🎉 Kết Luận

| Tính năng | ✅ |
|-----------|---|
| i18n setup | ✅ |
| Script dịch | ✅ |
| Multiple languages | ✅ EN + VI |
| Auto translations | ✅ 3 phương pháp |
| Language switcher | ✅ Giữ scroll position |
| Production ready | ✅ |

**Bạn chỉ cần:**
1. Edit file VI khi cần
2. Chạy `npm run translate`
3. Deploy! 🚀

---

## 📞 Hỗ Trợ

**Nếu có vấn đề:**
1. Xem lại hướng dẫn trong file này
2. Kiểm tra `TRANSLATION_GUIDE.md`
3. Review lại script output
4. Sửa thủ công nếu cần

Happy Translating! 🌍🎉

