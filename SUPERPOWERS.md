# Superpowers — Hướng Dẫn Sử Dụng

Các lệnh dưới đây gõ trực tiếp trong Claude Code (gõ `/` để gợi ý lệnh).

---

## Workflow Chuẩn

```
/brainstorm  →  /plan  →  /execute-plan  →  /verify  →  /finish-branch
```

Hoặc dùng **1 lệnh duy nhất** để chạy toàn bộ pipeline có human-approval ở mỗi bước:

```
/feature
```

---

## Các Lệnh Chi Tiết

### `/brainstorm` — Lên ý tưởng trước khi code

**Dùng khi:** Bắt đầu một feature mới, không biết nên làm thế nào, hoặc muốn tránh làm sai rồi làm lại.

**Claude sẽ làm:**
1. Hỏi từng câu một để hiểu yêu cầu
2. Đề xuất 2–3 hướng giải quyết với trade-off
3. Viết spec document vào `docs/superpowers/specs/`
4. Chờ bạn approve trước khi tiếp tục

**Không bao giờ** viết code trong bước này.

**Ví dụ:**
```
/brainstorm
Tôi muốn thêm dark mode vào portfolio
```

---

### `/plan` — Viết kế hoạch thực thi chi tiết

**Dùng khi:** Đã có spec (sau `/brainstorm`), cần chia nhỏ công việc trước khi code.

**Claude sẽ làm:**
1. **Tự động đọc spec mới nhất** trong `docs/superpowers/specs/` — không cần re-explore codebase
2. Liệt kê file nào sẽ tạo/sửa
3. Chia thành các task nhỏ 2–5 phút mỗi task
4. Mỗi task có: file path cụ thể, code đầy đủ, lệnh verify
5. Lưu plan vào `docs/superpowers/plans/`

**Không có placeholder** như "TBD" hay "add appropriate handling".

**Ví dụ:**
```
/plan
```
*(không cần mô tả thêm — Claude tự đọc spec file)*

---

### `/tdd` — Viết test trước, code sau

**Dùng khi:** Bắt đầu viết một component hoặc function mới.

**Quy trình bắt buộc:**
```
1. Viết test → chạy → xác nhận test FAIL (RED)
2. Viết code tối thiểu để test pass (GREEN)
3. Refactor sạch sẽ hơn → test vẫn pass (REFACTOR)
4. Commit → lặp lại cho feature tiếp theo
```

**Không được** viết code trước rồi viết test sau.

**Ví dụ:**
```
/tdd
Viết component ContactForm với validation email
```

---

### `/debug` — Debug có hệ thống

**Dùng khi:** Có bug, không biết nguyên nhân gốc rễ.

**Quy trình:**
1. Điều tra root cause trước (đọc lỗi, reproduce, trace data flow)
2. So sánh với code đang chạy đúng
3. Đặt hypothesis → test 1 biến tại một thời điểm
4. Tạo failing test → fix → verify

**Nếu fix 3 lần mà vẫn sai:** Dừng, xem lại architecture.

**Ví dụ:**
```
/debug
Animation hero section bị giật trên mobile Safari
```

---

### `/verify` — Xác nhận hoàn thành trước khi báo xong

**Dùng khi:** Trước khi nói "done" với bất kỳ task nào.

**Claude phải:**
1. Chạy lệnh verify thực sự (không dùng cache)
2. Show output đầy đủ
3. Chỉ claim "xong" khi có bằng chứng rõ ràng

**Không được** dùng "should work", "probably fine", "seems okay".

**Ví dụ:**
```
/verify
```

---

### `/review-request` — Yêu cầu review code

**Dùng khi:** Xong một feature lớn, trước khi merge vào main.

**Claude sẽ:**
1. Lấy git commit hash
2. Dispatch code-reviewer subagent với context đầy đủ
3. Tổng hợp kết quả theo mức độ: Critical / Important / Suggestion

**Ví dụ:**
```
/review-request
Feature dark mode đã xong, cần review trước khi merge
```

---

### `/review-receive` — Xử lý feedback từ review

**Dùng khi:** Nhận được code review, cần xử lý đúng cách.

**Quy trình:**
1. Đọc hết feedback trước khi làm gì
2. Xác nhận hiểu đúng ý
3. Verify với codebase thực tế
4. Fix từng item một, test sau mỗi item
5. Không nói "Great point!" — chỉ cần fix và show kết quả

**Ví dụ:**
```
/review-receive
```

---

### `/subagent-dev` — Chạy plan bằng nhiều agent song song

**Dùng khi:** Có plan chi tiết, muốn thực thi nhanh với chất lượng cao.

**Cách hoạt động:**
- Mỗi task → 1 subagent riêng (fresh context, không lẫn lộn)
- Sau mỗi task: review spec compliance → review code quality
- Chỉ sang task tiếp theo khi task hiện tại pass review

**Tốt hơn** tự làm tuần tự vì mỗi agent focused 100% vào task của mình.

**Ví dụ:**
```
/subagent-dev
Chạy plan tại docs/superpowers/plans/dark-mode-plan.md
```

---

### `/parallel-agents` — Giải quyết nhiều vấn đề độc lập cùng lúc

**Dùng khi:** Có nhiều bug hoặc task không liên quan đến nhau.

**Chỉ dùng khi** các task hoàn toàn độc lập (không share state, không phụ thuộc nhau).

**Ví dụ:**
```
/parallel-agents
Fix 3 lỗi: (1) Hero animation, (2) Contact form validation, (3) SEO meta tags
```

---

### `/worktree` — Tạo workspace riêng cho feature

**Dùng khi:** Bắt đầu feature mới, muốn giữ main sạch.

**Claude sẽ:**
1. Tạo thư mục `.worktrees/<branch-name>` (đã gitignore)
2. Tạo branch mới
3. Cài dependencies
4. Chạy baseline test để xác nhận điểm xuất phát sạch

**Ví dụ:**
```
/worktree
Tạo workspace cho feature: add-blog-section
```

---

### `/feature-superpower` — Workflow khép kín cho một feature mới

**Dùng khi:** Muốn đi từ ý tưởng đến merge trong một flow duy nhất, có human-approval ở mỗi bước.

**Pipeline:**
```
Phase 1: Brainstorm → lưu spec vào docs/superpowers/specs/
Phase 2: Plan       → đọc spec, lưu plan vào docs/superpowers/plans/
Phase 3: Execute    → đọc plan, tạo branch, code từng task
Phase 4: Verify     → build + lint + test trên browser
Phase 5: Finish     → merge / PR / giữ / discard
```

**Mỗi phase dừng lại chờ bạn approve** trước khi sang phase tiếp theo.
Context được pass tự động giữa các phase — không cần giải thích lại.

**Ví dụ:**
```
/feature
Tôi muốn thêm lightbox cho ảnh trong Projects section
```

---

### `/execute-plan` — Chạy plan theo từng bước

**Dùng khi:** Đã có plan, muốn Claude chạy step-by-step theo đúng kế hoạch.

**Yêu cầu:** Phải có worktree, không được chạy trên main.

**Ví dụ:**
```
/execute-plan
docs/superpowers/plans/blog-section-plan.md
```

---

### `/finish-branch` — Hoàn tất branch và quyết định merge

**Dùng khi:** Xong hết công việc trên một branch.

**Claude sẽ:**
1. Chạy toàn bộ test suite — nếu fail thì dừng
2. Hỏi bạn chọn 1 trong 4 option:
   - Merge vào main
   - Push và tạo Pull Request
   - Giữ branch lại
   - Discard (xoá)

**Ví dụ:**
```
/finish-branch
```

---

## Cheat Sheet Nhanh

| Tình huống | Lệnh |
|---|---|
| Muốn làm feature mới (nhanh) | `/feature-superpower` |
| Muốn làm feature mới (từng bước) | `/brainstorm` → `/plan` |
| Đã có plan, muốn bắt đầu code | `/execute-plan` hoặc `/subagent-dev` |
| Đang viết component/function | `/tdd` |
| Có bug không biết nguyên nhân | `/debug` |
| Xong task, muốn kiểm tra | `/verify` |
| Xong feature, muốn review | `/review-request` |
| Nhận được review feedback | `/review-receive` |
| Xong hết, muốn merge | `/finish-branch` |
| Có nhiều bug độc lập | `/parallel-agents` |
| Muốn workspace riêng | `/worktree` |

---

## Ghi Chú

- Các file skill nằm ở `.claude/commands/` — không cần chỉnh sửa
- Gõ `/` trong Claude Code để xem toàn bộ lệnh có sẵn
- Workflow khuyên dùng cho mọi feature: **brainstorm → plan → execute → verify → finish**
