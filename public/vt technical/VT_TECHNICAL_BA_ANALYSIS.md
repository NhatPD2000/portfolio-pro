# VT TECHNICAL - BUSINESS ANALYSIS IN ACTION

## Dự án: Triển khai Hệ thống ERP cho VT Technical

---

## 🔴 THÁCH THỨC (CHALLENGE)

### Tình huống ban đầu:
VT Technical là công ty chuyên về cung cấp giải pháp kỹ thuật, nhưng gặp phải các vấn đề:

- **Quản lý bán hàng**: Không có hệ thống tập trung, dữ liệu lưu trữ rải rác trên nhiều nơi
- **Quản lý kho hàng**: Không theo dõi được tồn kho real-time, thường xuyên thiếu hàng hoặc tồn kho thừa
- **Quản lý dịch vụ**: Không có quy trình chuẩn cho việc cung cấp dịch vụ sau bán hàng
- **Quy trình phê duyệt**: Phê duyệt đơn hàng, hóa đơn mất thời gian, không có workflow rõ ràng
- **Báo cáo & phân tích**: Không có dashboard, khó đưa ra quyết định dựa trên dữ liệu

### Tác động kinh doanh:
- Doanh số bán hàng không tăng trưởng
- Chi phí vận hành cao do quản lý thủ công
- Khách hàng không hài lòng với thời gian xử lý đơn hàng
- Không có visibility về tình hình kinh doanh

---

## 🔵 QUY TRÌNH BA (BA PROCESS)

### Bước 1: ELICITATION (Thu thập thông tin)
**Hành động cụ thể:**
- Phỏng vấn 15+ stakeholders từ các bộ phận: Sales, Kho, Dịch vụ, Tài chính, Quản lý
- Khảo sát quy trình hiện tại: Bán hàng → Kho → Dịch vụ → Phê duyệt → Báo cáo
- Phân tích dữ liệu lịch sử: 2 năm dữ liệu bán hàng, kho, dịch vụ
- Xác định pain points: Thời gian xử lý, lỗi dữ liệu, thiếu thông tin
- Tìm hiểu yêu cầu kỹ thuật: Hệ thống hiện tại, khả năng tích hợp

**Kết quả:**
- Tài liệu yêu cầu chi tiết (Requirements Document)
- Danh sách 50+ yêu cầu chức năng (Functional Requirements)
- Danh sách 20+ yêu cầu phi chức năng (Non-Functional Requirements)

---

### Bước 2: ANALYSIS (Phân tích & thiết kế)
**Hành động cụ thể:**
- Phân tích quy trình hiện tại (AS-IS): Vẽ sơ đồ quy trình, xác định bottleneck
- Thiết kế quy trình mới (TO-BE): Tối ưu hóa, loại bỏ bước không cần thiết
- Xây dựng mô hình dữ liệu: Xác định entities, relationships, data flow
- Lập kế hoạch triển khai: Phân chia thành 4 module chính
  - Module 1: Sales Management (Quản lý bán hàng)
  - Module 2: Inventory Management (Quản lý kho)
  - Module 3: Service Management (Quản lý dịch vụ)
  - Module 4: Approval Workflow & Reporting (Phê duyệt & Báo cáo)

**Kết quả:**
- Business Requirements Document (BRD) - 80 trang
- Functional Specification Document (FSD) - 150 trang
- Data Model Diagram
- Process Flow Diagrams (AS-IS & TO-BE)
- Implementation Roadmap

---

### Bước 3: SOLUTION DESIGN (Thiết kế giải pháp)
**Hành động cụ thể:**
- Chọn ERP system: Đánh giá 5 giải pháp (SAP, Oracle, Odoo, NetSuite, Infor)
- Quyết định: Odoo ERP (chi phí thấp, linh hoạt, phù hợp SME)
- Thiết kế chi tiết từng module:
  - **Sales**: Quản lý khách hàng, đơn hàng, báo giá, hóa đơn
  - **Inventory**: Quản lý kho, tồn kho, nhập/xuất kho, điều chỉnh
  - **Service**: Quản lý hợp đồng dịch vụ, ticket, bảo hành
  - **Approval**: Workflow phê duyệt, quyền hạn, audit trail
- Thiết kế giao diện người dùng (UI/UX)
- Lập kế hoạch tích hợp dữ liệu cũ
- Xây dựng kế hoạch training & change management

**Kết quả:**
- System Design Document (SDD) - 120 trang
- UI/UX Mockups - 50+ screens
- Data Migration Plan
- Training Materials - 200+ slides
- Change Management Plan

---

### Bước 4: IMPLEMENTATION (Triển khai & kiểm thử)
**Hành động cụ thể:**
- **Phase 1 (Tháng 1-2)**: Cài đặt Odoo, cấu hình cơ bản, tích hợp dữ liệu
- **Phase 2 (Tháng 3)**: Triển khai Sales & Inventory module
- **Phase 3 (Tháng 4)**: Triển khai Service & Approval module
- **Phase 4 (Tháng 5)**: Testing, UAT, training, go-live
- Kiểm thử chức năng (Functional Testing): 200+ test cases
- Kiểm thử tích hợp (Integration Testing): Kiểm tra dữ liệu flow giữa các module
- Kiểm thử hiệu suất (Performance Testing): Đảm bảo hệ thống xử lý được 1000+ users
- Kiểm thử người dùng (UAT): 30+ users từ các bộ phận
- Training: 5 buổi training cho 50+ users
- Go-live: Triển khai toàn công ty, hỗ trợ 24/7 trong 2 tuần đầu

**Kết quả:**
- Hệ thống ERP hoạt động ổn định
- 100% users được training
- Tài liệu hỗ trợ (User Guides, FAQs, Troubleshooting)
- Support team sẵn sàng

---

## 🟡 KẾT QUẢ (RESULT)

### Kết quả định lượng (Quantitative):

| Chỉ số | Trước | Sau | Cải thiện |
|-------|-------|------|----------|
| **Thời gian xử lý đơn hàng** | 3-5 ngày | 1-2 ngày | ⬇️ 60% |
| **Độ chính xác dữ liệu** | 85% | 99% | ⬆️ 14% |
| **Tồn kho không khớp** | 15% | 2% | ⬇️ 87% |
| **Thời gian phê duyệt** | 2-3 ngày | 4-8 giờ | ⬇️ 80% |
| **Chi phí vận hành** | 100% | 70% | ⬇️ 30% |
| **Doanh số bán hàng** | Baseline | +25% | ⬆️ 25% |
| **Tỷ lệ khách hàng hài lòng** | 70% | 92% | ⬆️ 22% |

### Kết quả định tính (Qualitative):

✅ **Quản lý bán hàng:**
- Có hệ thống tập trung quản lý khách hàng, đơn hàng, báo giá
- Tự động tính toán giá, chiết khấu, thuế
- Theo dõi được trạng thái đơn hàng real-time

✅ **Quản lý kho:**
- Theo dõi tồn kho real-time
- Cảnh báo tự động khi hàng sắp hết
- Quản lý nhiều kho, vị trí lưu trữ
- Báo cáo tồn kho chi tiết

✅ **Quản lý dịch vụ:**
- Quản lý hợp đồng dịch vụ, bảo hành
- Ticket system cho khách hàng
- Lịch sử dịch vụ cho từng khách hàng
- Báo cáo dịch vụ, KPI

✅ **Quy trình phê duyệt:**
- Workflow tự động cho phê duyệt đơn hàng, hóa đơn
- Quyền hạn rõ ràng theo vai trò
- Audit trail đầy đủ
- Giảm thời gian phê duyệt 80%

✅ **Báo cáo & phân tích:**
- Dashboard tổng quan kinh doanh
- Báo cáo bán hàng, kho, dịch vụ
- Phân tích xu hướng, dự báo
- Export dữ liệu dễ dàng

✅ **Khác:**
- Tích hợp với hệ thống kế toán
- Backup dữ liệu tự động
- Bảo mật dữ liệu tốt
- Hỗ trợ mobile app

### Tác động kinh doanh:

💰 **Tài chính:**
- Tiết kiệm chi phí vận hành: 30% (tương đương 500 triệu VND/năm)
- Tăng doanh số: 25% (tương đương 5 tỷ VND/năm)
- ROI: 8 tháng

📈 **Kinh doanh:**
- Tăng khả năng cạnh tranh
- Cải thiện dịch vụ khách hàng
- Tăng hiệu suất nhân viên
- Dễ dàng mở rộng kinh doanh

👥 **Nhân sự:**
- Nhân viên hài lòng với hệ thống mới
- Giảm công việc thủ công
- Tăng năng suất
- Dễ dàng training nhân viên mới

---

## 📊 TÓMO TẮT GIẢI PHÁP

### Giải pháp được triển khai:
- **ERP System**: Odoo ERP
- **Modules**: Sales, Inventory, Service, Approval, Reporting
- **Database**: PostgreSQL
- **Server**: Cloud (AWS)
- **Users**: 50+ users
- **Timeline**: 5 tháng
- **Budget**: 2 tỷ VND

### Thành công chính:
1. ✅ Triển khai đúng tiến độ
2. ✅ Đúng ngân sách
3. ✅ 100% users được training
4. ✅ Hệ thống ổn định, uptime 99.9%
5. ✅ Đạt được tất cả KPI đề ra

### Bài học rút ra:
- Tầm quan trọng của elicitation kỹ lưỡng
- Cần có change management mạnh mẽ
- Training là chìa khóa thành công
- Phải có support team sẵn sàng sau go-live
- Lựa chọn đúng công nghệ phù hợp với nhu cầu

---

## 📝 KẾT LUẬN

Dự án VT Technical là một ví dụ điển hình về cách áp dụng Business Analysis để giải quyết các vấn đề kinh doanh thực tế. Thông qua quy trình BA có hệ thống (Elicitation → Analysis → Solution Design → Implementation), công ty đã:

- Xác định được các vấn đề cốt lõi
- Thiết kế giải pháp phù hợp
- Triển khai thành công
- Đạt được kết quả vượt mong đợi

Kết quả là công ty có hệ thống ERP hiện đại, tăng doanh số 25%, giảm chi phí 30%, và cải thiện sự hài lòng khách hàng từ 70% lên 92%.

---

**Người phân tích**: Business Analyst  
**Ngày hoàn thành**: Tháng 5, 2026  
**Trạng thái**: ✅ Hoàn thành thành công
