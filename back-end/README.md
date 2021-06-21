#Back-end Đồ Án
**Kiến thức cần có:**
- Java, Spring boot, Spring JPA.

##Các lưu ý
- các task chia dựa trên api trong các file controller, chỉ cần thêm code chứ k tạo mới
- Trong các file model có comment giải thích các thuộc tính
- Các file Service đã được implement sẵn và chỉ thêm code vào chứ k tạo mới
- Tất cả các hàm ở service và controller đều trả về ```ResponseData(String msg, Object data)``` tức là data có thể trả về bất cứ kiểu gì, msg để báo lỗi.
- Nếu có bất cứ thay đổi nào về các hàm implements thì nhắn tin thảo luận trc.
- Đối với các hàm truyền vào User.id thì lấy id từ token bằng hàm ```getUserIdFromRequest()``` trong file ```jwt/JwtAuthenticationFilter.java``` (@Autowired)