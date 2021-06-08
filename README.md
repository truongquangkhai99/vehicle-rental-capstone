# Đồ Án Tốt Nghiệp - Vehicle Rental
- **Kiến thức của dự án**:
    - Ngôn ngữ: `HTML`, `CSS`, `JavaScrit`, `Java`
    - Thư viện: `ReactJS`, `React-Bootstrap`,...
    - Framework: `Spring`(`Boot`,`Security`,`JPA`)
    - Database: `MySQL`
    - Ngoài ra: `JWT (Json Web Token)`,...
 > **_Các hướng dẫn bên dưới có link hướng dẫn có thể bấm vào xem, các phần mềm cần thiết cũng có link tải. Đây là hướng dẫn để chạy ứng dụng, trong mỗi thư mục back-end, web và app còn 1 file Readme cụ thể cho từng thành phần. Mọi người đọc kĩ, nếu có thắc mắc gì thì nhắn trên nhóm_**

## Setup môi trường
Để bắt đầu hãy tải [Github desktop](https://desktop.github.com), [hướng dẫn](https://openplanning.net/10283/su-dung-github-voi-github-desktop).
Đăng nhập và clone code xuống bằng Github desktop

**Để chạy được web cần cài đặt:**
- [Java 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
- [XAMPP](https://www.apachefriends.org/index.html)
- [Nodejs](https://nodejs.org/en/) (bản LTS)

**Cài đặt môi trường làm việc (khuyên dùng thôi):**
- [VS Code](https://code.visualstudio.com/): **Search và tải các extension bằng tên ở tab extension của Vs code**
    - Extension bắt buộc: `Java Extension Pack`, `Spring Boot Extension Pack`, `Lombok Annotations Support`. Sau khi cài 3 Extension này, vào tab Extensions tìm extension: `Language Support for Java` => `Manage`(nút bánh răng bên cạnh) => `Install Another Version` => `0.64.1`)
    - Extension gợi ý: `Bracket Pair Colorizer`, `ES7 React Snipset`, `Visual Studio IntelliCode`,... ( Mọi người có thể bổ sung các Extension tiện lợi mà mọi người biết )
- [Postman](https://www.postman.com/):
    - Dùng để test api, có thể dùng phiên bản web hoặc tải xuống desktop
    - [Hướng dẫn sử dụng](https://viblo.asia/p/huong-dan-su-dung-postman-cho-test-api-aWj53Lb1K6m)
- Trình duyệt: Chrome hoặc Edge

## Chạy Server:
1. **Database**
    - Mở XAMPP Cotrol Panel trên máy tính => Start Apache và MySql
    - Nếu mở lần đầu thì bấm vào Admin của MySql để tới trang quan trị MySQL => [Tạo 1 database mới](https://hoclaptrinh.vn/posts/tao-database-trong-phpmyadmin-voi-xampp) tên là `vehicle-rental`.
2. **Spring server**
    - Cài đặt các Dependency (Chỉ cần làm lần đầu):
        - Đi tới file `pom.xml` (`\vehicle-rental-capstone\back-end\pom.xml`)
        - Chuột phải => Update project configuration
    - Chạy app:
        - Đi tới file `BackEndApplication` (`\vehicle-rental-capstone\back-end\src\main\java\com\capstone\backend\BackEndApplication.java`)
        - Chuột phải => Run Java 

## Chạy Webapp
1. **Mở terminal ở thư mục `web` (`\vehicle-rental-capstone\web`)**
    - Nếu VS Code mặc định khi mở thư mục project thì terminal đang ở \vehicle-rental
    - Ở tab TERMINAL chạy lệnh `cd web`
3. **Cài đặt các Dependency (Chỉ cần làm lần đầu)**
    - Cài đặt `yarn` để quản lý các lib package chạy lệnh: `npm install --global yarn`
    - Cài đặt các Dependency chạy lệnh: `yarn install`
4. **Chạy webapp ở chế độ develop**
    - Chạy lệnh `yarn start`
    - Mở trình duyệt nhập địa chỉ `http://localhost:3000/`
