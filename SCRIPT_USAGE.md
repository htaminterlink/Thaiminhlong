# 🚀 Script Dịch Tự Động - Hướng Dẫn Sử Dụng

## 📋 Tổng Quan

Script này tự động dịch file `src/i18n/vi/index.ts` sang `src/i18n/en/index.ts` sử dụng API.

✅ **Đã sẵn sàng sử dụng!** - Không cần cấu hình thêm gì

---

## 🎯 Cách Sử Dụng

### **Lệnh Nhanh (Khuyên dùng)**

```bash
npm run translate
```

**Điều gì xảy ra:**

1. Đọc file `src/i18n/vi/index.ts`
2. Dịch tất cả text từ Tiếng Việt → Tiếng Anh
3. Lưu vào `src/i18n/en/index.ts`

**Thời gian:** ~2 phút (120+ items)

---

## 📊 Chi Tiết 3 Script

| Script                     | Command                    | Lợi Ích                    | Nhược Điểm              |
| -------------------------- | -------------------------- | -------------------------- | ----------------------- |
| **MyMemory** (Recommended) | `npm run translate`        | Miễn phí, không cần setup  | Chất lượng 80%          |
| **LibreTranslate**         | `npm run translate:free`   | Chất lượng tốt hơn (90%)   | Cần `npm install axios` |
| **OpenAI**                 | `npm run translate:openai` | Chất lượng xuất sắc (95%+) | Tính phí, cần API key   |

---

## ✨ Kết Quả Thực Tế

```
🌐 Bắt đầu dịch với MyMemory Translation API...
⏳ Quá trình dịch có thể mất vài phút...

📝 navigation.home... ✅
📝 navigation.about... ✅
📝 navigation.products... ✅
...
✅ Dịch thành công! (119.82s)
📄 File lưu tại: src/i18n/en/index.ts
```

---

## 📝 Các Bước Sau Khi Chạy Script

### 1️⃣ Review Translations

Mở `src/i18n/en/index.ts` và kiểm tra chất lượng:

- ✅ Ý nghĩa đúng?
- ✅ Spelling đúng?
- ✅ Terminology phù hợp?

### 2️⃣ Sửa Nếu Cần

Ví dụ:

```typescript
// Từ MyMemory
"factory": "Plant"  ❌

// Chỉnh sửa thành
"factory": "Factory"  ✅
```

### 3️⃣ Build & Test

```bash
npm run build
npm start
```

### 4️⃣ Kiểm Tra EN Page

- Chuyển sang EN bằng nút ngôn ngữ
- Kiểm tra xem translations có lỗi không

---

## 🔧 Tùy Chỉnh Nâng Cao

### Chỉ Dịch Một Phần

Sửa file `translate-simple.mjs`:

```javascript
// Chỉ dịch section 'hero'
const enObject = await translateObject(viObject.hero);
```

### Backup Trước Khi Dịch

```bash
cp src/i18n/en/index.ts src/i18n/en/index.ts.backup
npm run translate
```

### Merge Với Translations Cũ

```bash
# Khôi phục file cũ
cp src/i18n/en/index.ts.backup src/i18n/en/index.ts

# Sao chép chỉ những keys mới từ dịch tự động
# Sửa thủ công các keys được đính kèm
```

---

## 🎨 Chất Lượng Dịch

### MyMemory (Default)

```
Tiếng Việt: "Về Thai Minh Long Company Limited"
MyMemory:   "About Thai Minh Long Company Limited"  ✅ Đúng
```

### Một Số Sai Lệch Thường Gặp

```
"factory" → "Plant" (nên là Factory)
"prawn" → "Prawn" (OK nhưng thường dùng Shrimp)
```

**Fix**: Sửa thủ công hoặc chạy lại với OpenAI

---

## ⚙️ Troubleshooting

### ❌ Script Lỗi

**Kiểm tra:**

```bash
# Node.js version
node --version  # Cần >= v14

# File tồn tại?
ls src/i18n/vi/index.ts

# Internet connection?
ping google.com
```

### ❌ Kết Quả Dịch Kém

**Giải pháp:**

1. Backup file cũ
2. Chạy lại script
3. Hoặc dùng `npm run translate:openai`

### ❌ Package Lỗi

```bash
# Clear cache
rm -rf node_modules package-lock.json

# Cài lại
npm install
```

---

## 🎯 Best Practices

1. **Luôn backup** trước khi dịch lại
2. **Review translations** sau khi script chạy
3. **Test trên browser** trước deploy
4. **Để tay động cho** những từ chuyên ngành
5. **Cập nhật thường xuyên** khi VI file thay đổi

---

## 📚 Tệp Liên Quan

- `src/i18n/vi/index.ts` - Source file (Tiếng Việt)
- `src/i18n/en/index.ts` - Output file (Tiếng Anh)
- `translate-simple.mjs` - Script chính
- `translate-free.js` - LibreTranslate version
- `translate.js` - OpenAI version
- `TRANSLATION_GUIDE.md` - Hướng dẫn chi tiết

---

## 💡 Mẹo

**Script chạy lâu?**

- Đó là do delay 200ms giữa mỗi item (tránh rate limit)
- Bình thường, không báo động

**Muốn dịch nhanh hơn?**

- Giảm delay từ 200ms xuống 100ms trong script
- Hoặc chạy `npm run translate:openai`

**Có lỗi chỉ một vài items?**

- Dịch lại item đó bằng tay
- Script có thể timeout trên một số string phức tạp

---

## ❓ FAQ

**Q: Liệu script có làm hỏng file VI không?**  
A: Không, script chỉ ĐỌC file VI, không chỉnh sửa gì cả.

**Q: Có thể chạy lại không?**  
A: Có, chạy lại sẽ ghi đè file EN cũ. Backup nếu cần giữ.

**Q: Có hỗ trợ ngôn ngữ khác không?**  
A: Có thể sửa script để dịch sang FR, DE, etc.

**Q: Chi phí là bao nhiêu?**  
A: Miễn phí với MyMemory và LibreTranslate.

---

## 📞 Cần Giúp?

1. Kiểm tra `TRANSLATION_GUIDE.md` để hướng dẫn chi tiết
2. Review lại các translations sau khi script chạy
3. Sửa thủ công những phần không ổn

Happy Translating! 🎉
