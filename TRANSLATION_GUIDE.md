# 🌐 Hướng Dẫn Sử Dụng Script Dịch Tự Động

Có 3 script dịch có sẵn. Chọn một trong những cách dưới đây:

---

## ✅ **Cách 1: MyMemory API (Khuyên Dùng - Nhanh & Miễn Phí)**

### Ưu điểm:

- ✅ Không cần cài package
- ✅ Không cần API key
- ✅ Miễn phí 100%
- ✅ Nhanh nhất

### Cách sử dụng:

```bash
npm run translate
```

### Tốc độ dự kiến:

- 150-300 items: 5-10 phút
- Tùy vào internet speed

---

## 🔧 **Cách 2: LibreTranslate API (Chất Lượng Cao)**

### Ưu điểm:

- ✅ Chất lượng dịch tốt hơn MyMemory
- ✅ Miễn phí
- ✅ Open source

### Yêu cầu:

Cài package `axios`:

```bash
npm install axios
```

### Cách sử dụng:

```bash
npm run translate:free
```

---

## 🚀 **Cách 3: OpenAI API (Chất Lượng Xuất Sắc)**

### Ưu điểm:

- ✅ Dịch rất chính xác, hiểu context
- ✅ Tốt nhất cho domain-specific content

### Nhược điểm:

- ❌ Tính phí (khoảng $0.50-$1 cho toàn bộ project)
- ❌ Cần API key

### Yêu cầu:

1. Cài packages:

```bash
npm install openai dotenv
```

2. Tạo file `.env.local`:

```env
OPENAI_API_KEY=sk-...your-key-here...
```

3. Lấy API key từ: https://platform.openai.com/api-keys

### Cách sử dụng:

```bash
npm run translate:openai
```

---

## 📋 **Quy Trình Dịch Đầy Đủ**

### 1️⃣ Chọn phương pháp (khuyên: `npm run translate`)

```bash
npm run translate
```

### 2️⃣ Chờ quá trình hoàn tất

```
🌐 Bắt đầu dịch với MyMemory Translation API...

⏳ Quá trình dịch có thể mất vài phút...

📝 navigation.home... ✅
📝 navigation.about... ✅
📝 navigation.products... ✅
...
```

### 3️⃣ Review translations

Mở file `src/i18n/en/index.ts` và kiểm tra:

- ✅ Có ý nghĩa đúng?
- ✅ Lỗi chính tả?
- ✅ Terminology phù hợp?

### 4️⃣ Chỉnh sửa nếu cần

Sửa những phần không ổn trực tiếp trong file

### 5️⃣ Build & Test

```bash
npm run build
npm start
```

---

## 🎯 **Một Số Tips**

### Nếu muốn dịch riêng một section:

Chỉnh sửa script và thay đổi:

```javascript
// Chỉ dịch object 'hero'
const enObject = await translateObject(viObject.hero);
```

### Nếu muốn giữ lại một số translations cũ:

Hãy backup file `src/i18n/en/index.ts` trước:

```bash
cp src/i18n/en/index.ts src/i18n/en/index.ts.backup
```

### Nếu script lỗi:

- Kiểm tra internet connection
- Thử lại lần nữa
- Hoặc sử dụng phương pháp khác

---

## 🔄 **Khi Nào Chạy Lại Script**

Chạy lại script khi:

- ✅ Cập nhật file `src/i18n/vi/index.ts`
- ✅ Thêm translation keys mới
- ✅ Cần update English translations

---

## ❓ **Câu Hỏi Thường Gặp**

**Q: Script dịch từng dòng bao lâu?**  
A: Khoảng 200-500ms tùy API. Có delay để tránh rate limit.

**Q: Có thể dịch lại mà không xóa translations cũ?**  
A: Có, script sẽ ghi đè file `src/i18n/en/index.ts`. Backup trước nếu cần.

**Q: Chất lượng dịch như thế nào?**  
A:

- MyMemory: 80-85% (Acceptable)
- LibreTranslate: 85-90% (Tốt)
- OpenAI: 95%+ (Xuất sắc)

**Q: Có thể dịch từng file riêng?**  
A: Có, sửa script thay đổi source file path.

---

## 📞 **Hỗ Trợ**

Nếu có lỗi, kiểm tra:

1. Node.js version >= 14
2. Internet connection
3. File `src/i18n/vi/index.ts` tồn tại

Happy translating! 🎉
