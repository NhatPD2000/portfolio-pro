# 🎯 Next Steps: Cập nhật Data với Thông tin Thật

## ✅ Đã hoàn thành

- ✅ Enhanced Experience Cards đã được integrate vào portfolio chính
- ✅ Component `Experience.tsx` đã được update
- ✅ Backup gốc lưu tại `Experience.backup.tsx`
- ✅ UI đang chạy tại http://localhost:3000

---

## 📝 Cần làm tiếp: Cập nhật Data

Hiện tại data trong `Experience.tsx` đang dùng **placeholder links** (`link: "#"`). Bạn cần thay thế bằng links thật.

### 1. Chuẩn bị Deliverables

Cho mỗi project (Spartronics, PNJ, VT Technical), bạn cần:

#### **BRD/FSD Documents**
- Upload lên Google Drive (set permission: Anyone with link can view)
- Hoặc upload lên Dropbox/OneDrive
- Hoặc host trên GitHub (nếu không sensitive)

#### **Figma Prototypes**
- Mở Figma project
- Click "Share" → "Copy link"
- Set permission: "Anyone with the link can view"

#### **Flowcharts/Diagrams**
- Export từ Lucidchart/Draw.io/Miro
- Upload lên Google Drive hoặc Imgur
- Hoặc save vào `public/` folder trong project

---

### 2. Update Links trong Experience.tsx

Mở file `components/Experience.tsx` và tìm phần `deliverables`:

```typescript
deliverables: [
  {
    name: "Business Requirement Document (BRD)",
    description: "Complete requirements specification with stakeholder sign-off",
    pages: 45,
    link: "#", // ← THAY ĐỔI LINK NÀY
  },
  {
    name: "Functional Specification Design (FSD)",
    description: "Detailed system design with mockups and data flow diagrams",
    pages: 120,
    link: "#", // ← THAY ĐỔI LINK NÀY
  },
  {
    name: "Figma Prototype",
    description: "Interactive UI/UX prototype for operator workflows",
    screens: 45,
    link: "#", // ← THAY ĐỔI LINK NÀY
  },
  // ... các deliverables khác
]
```

**Thay thế `"#"` bằng links thật:**

```typescript
link: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
// hoặc
link: "https://www.figma.com/proto/YOUR_FIGMA_ID",
// hoặc
link: "/spartronics-brd.pdf", // nếu file trong public/
```

---

### 3. Nếu chưa có tài liệu sẵn

**Option 1: Tạm thời ẩn links**
```typescript
// Bỏ field `link` nếu chưa có
{
  name: "Business Requirement Document (BRD)",
  description: "Complete requirements specification with stakeholder sign-off",
  pages: 45,
  // link: "#", // ← Comment out hoặc xóa dòng này
}
```

Icon ExternalLink sẽ tự động ẩn nếu không có `link`.

**Option 2: Link đến "Coming Soon" page**
```typescript
link: "#coming-soon",
```

**Option 3: Tạo sample documents**
- Tạo 1-2 page sample BRD (không cần full document)
- Export PDF và upload
- Đủ để show format và style

---

### 4. Adjust Content nếu cần

Nếu data hiện tại không chính xác, bạn có thể điều chỉnh:

#### **Problem statement**
```typescript
problem: "Mô tả vấn đề thực tế mà client gặp phải (1-2 câu)",
```

#### **Analysis process**
```typescript
analysis: [
  "Số lượng stakeholder interviews thực tế",
  "Loại diagrams đã vẽ (BPMN, Use Case, ERD, etc.)",
  "Số lượng pain points identified",
  "Gap analysis method sử dụng",
],
```

#### **Deliverables**
Chỉ list những gì bạn thực sự đã tạo. Nếu không có Use Case Diagram, xóa item đó đi.

---

### 5. Test trên Mobile

Sau khi update data, test responsive:

```bash
# Mở DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
# Test trên iPhone, iPad, Android
```

Kiểm tra:
- [ ] Client cards expand/collapse smooth
- [ ] Deliverables list không bị overflow
- [ ] Links clickable và mở đúng
- [ ] Text không bị cut off

---

### 6. Optional Enhancements

Nếu muốn polish thêm:

#### **Add PDF files vào public/**
```
public/
  ├─ spartronics-brd.pdf
  ├─ spartronics-fsd.pdf
  ├─ pnj-brd.pdf
  └─ vt-technical-brs.pdf
```

Sau đó update links:
```typescript
link: "/spartronics-brd.pdf",
```

#### **Add screenshots**
Nếu muốn thêm thumbnail cho deliverables:
```typescript
{
  name: "Figma Prototype",
  description: "...",
  screens: 45,
  link: "...",
  thumbnail: "/spartronics-figma-thumb.png", // NEW
}
```

Sau đó update UI để hiển thị thumbnail.

---

## 🚀 Deploy lên Vercel

Khi đã update xong data:

```bash
git add .
git commit -m "feat: add enhanced experience cards with BA deliverables"
git push
```

Vercel sẽ tự động deploy trong ~2 phút.

---

## 📞 Cần hỗ trợ?

Nếu bạn cần:
- ✅ Tạo sample BRD/FSD template
- ✅ Hướng dẫn upload lên Google Drive
- ✅ Customize UI thêm (colors, layout, animations)
- ✅ Add PDF preview modal
- ✅ Add Figma embed iframe

Hãy cho tôi biết! 🚀

---

## 📋 Checklist

- [x] Enhanced Experience Cards integrated
- [x] Backup original file created
- [x] Dev server running
- [ ] Update deliverable links với URLs thật
- [ ] Adjust problem/analysis content nếu cần
- [ ] Test responsive trên mobile
- [ ] Test all links hoạt động
- [ ] Git commit và push lên Vercel
- [ ] Verify production deployment

**Current status: Ready for data update** ✅
