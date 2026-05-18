# Project Artifacts Panel — Design Spec
**Date:** 2026-04-30  
**Status:** Approved  
**Scope:** `components/Projects.tsx` only

---

## Goal

Cho phép mỗi project card hiển thị thêm mockup images, process diagrams, và Figma link ngay trên card — không dùng modal — thông qua một expandable panel ở cuối card.

---

## 1. Data Structure

Thêm field `artifacts` vào mỗi object trong `PROJECT_CONFIG` (trong `Projects.tsx`):

```typescript
type ArtifactImage = {
  src: string;      // path trong /public, e.g. "/smes-mockup-workcenter.png"
  caption: string;  // label ngắn hiển thị dưới ảnh
};

type Artifacts = {
  figma?: string;         // URL Figma prototype, mở _blank
  mockups: ArtifactImage[];
  diagrams: ArtifactImage[];
};
```

- Nếu `artifacts` là `undefined` → toggle button không render.
- Nếu `artifacts.figma` là `undefined` → Figma button không render.
- Nếu `mockups` hoặc `diagrams` là array rỗng `[]` → section đó không render.

---

## 2. State

Mỗi card quản lý state riêng bằng `useState<boolean>(false)` (`isOpen`).  
Không dùng global state — các card độc lập với nhau.

---

## 3. Toggle Button

**Vị trí:** Ngay dưới 3-col section (Challenge / Approach / Results), full width của card.

**Markup structure:**
```
[border-top]
[px-8 py-3.5] flex justify-between items-center
  LEFT:  "View Artifacts"  (text-sm semibold)  +  "mockups · diagrams · figma"  (text-xs muted)
  RIGHT: <ChevronDown /> (rotate-180 khi isOpen)
```

**Styling:**
- Background: `var(--bg-tertiary)`
- Border-top: `var(--border)`
- Default text: `var(--text-secondary)`
- Hover: background `var(--surface-elevated)`, text `var(--accent)`
- Transition: `transition-all duration-200`
- Icon: `ChevronDown` (lucide-react), `transition-transform duration-300`, `rotate-180` khi open

---

## 4. Panel Animation

Dùng Framer Motion `AnimatePresence` + `motion.div`:

```typescript
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {/* panel content */}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 5. Panel Content Layout

**Container:** `px-8 py-6`, background `var(--surface-elevated)`, border-top `var(--border)`

### 5a. Header row
```
LEFT:  label-amber "MOCKUPS & WIREFRAMES"
RIGHT: [Figma icon] "Open in Figma →"  (chỉ render nếu artifacts.figma có giá trị)
```

**Figma button styling:**
- `border border-[var(--accent)] text-[var(--accent)]` pill, `text-xs px-3 py-1.5 rounded-full`
- Hover: `bg-[var(--accent)] text-white`
- Transition: `transition-all duration-200`
- `target="_blank" rel="noopener noreferrer"`

### 5b. Mockups grid
- Layout: `grid grid-cols-2 md:grid-cols-3 gap-3 mt-3`
- Chỉ render nếu `mockups.length > 0`

### 5c. Diagrams section
- Label: `label-amber "PROCESS DIAGRAMS"` với `mt-6 mb-3`
- Layout: `grid grid-cols-1 md:grid-cols-2 gap-3`
- Chỉ render nếu `diagrams.length > 0`

---

## 6. Image Tile Component

```typescript
function ArtifactTile({ src, caption }: ArtifactImage) { ... }
```

**Structure:**
```
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.25, delay: staggerIndex * 0.05 }}
  className="group cursor-pointer"
>
  <div className="rounded-lg overflow-hidden border border-[var(--border)]
                  hover:border-[var(--accent)]/40 transition-all duration-200
                  hover:shadow-md hover:shadow-[var(--accent)]/10">
    <Image src={src} alt={caption} width={400} height={280}
           className="w-full object-cover object-top
                      transition-transform duration-300 group-hover:scale-[1.02]" />
  </div>
  <p className="text-center text-[11px] text-[var(--text-muted)] mt-1.5">{caption}</p>
</motion.div>
```

---

## 7. Files Affected

| File | Thay đổi |
|------|----------|
| `components/Projects.tsx` | Thêm `Artifacts` type, `artifacts` field vào `PROJECT_CONFIG`, `ArtifactTile` component, toggle button, panel với AnimatePresence |
| `public/` | Thêm ảnh mockup và diagram (do user cung cấp) |
| `lib/i18n.ts` | Không thay đổi — artifacts là static config, không dịch |

---

## 8. Out of Scope

- Lightbox / zoom khi click ảnh (có thể làm sau)
- Figma iframe embed (quá nặng)
- Video demo
- Thêm project mới

---

## 9. Definition of Done

- [ ] Toggle button chỉ xuất hiện khi project có `artifacts`
- [ ] Panel mở/đóng smooth với Framer Motion
- [ ] Figma button mở tab mới, chỉ hiện khi có URL
- [ ] Image tiles stagger vào khi panel mở
- [ ] Responsive: grid collapse về 1-2 cột trên mobile
- [ ] Không có layout shift khi toggle
- [ ] Dark mode và light mode đều đúng
