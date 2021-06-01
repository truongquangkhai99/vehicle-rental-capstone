
# Đồ Án Tốt Nghiệp - Vehicle Rental
- Front-end web sử dụng các thư viện:
  - [react-bootstrap](https://react-bootstrap.github.io/getting-started/theming/)
  - [bootstrap 5](https://getbootstrap.com/)(chú ý xem document của v5)
  - [react-icons](https://react-icons.github.io/react-icons)
  - [redux và redux-toolkit](https://viblo.asia/p/redux-toolkit-refactor-lai-redux-structure-RQqKL0pmK7z)
  - [formik](https://formik.org/docs/overview)
  - [yup]()

## Cấu trúc thư mục source code
```
web
 └─ src
    ├─ api //chứa các fetch api để lấy dữ liệu từ server
    ├─ app //chứa các reducer, action và store của redux, sử dụng redux toolkit
    │  ├─  slice //chứa slice, redux toolkit nhóm reducer và action thành slice
    │  └─ store.js //export tất cả store để sử dụng
    ├─ assets //chứa các file tĩnh như ảnh, font
    ├─ components //chứa tất cả các components, nếu components lớn có thể chia nhỏ và bỏ chung 1 thư mục
    ├─ lib //để chứa các file helper, utils,... nếu có
    ├─ pages //chứa các components là container của trang dựa trên route, cấu trúc tối thiểu, dùng để import các components    
    │  └─  layout //chứa các static components dùng chung như footer,... 
    ├─ styles //chứa tất các file để style. Cấu trúc thư mục dựa trên 7-1 pattern
        ├─ abstracts //chứa các file helper hỗ trợ
        │  ├─ _function.scss //chứa các fuction 
        │  ├─ _mixins.scss //chứa các mixins
        │  ├─ _variables.scss //chứa các biến global
        ├─ base 
        │  ├─ _base.scss //chứa các định nghĩa cơ bản của các tag mặc định hoặc để chỉ cụ thể 1 tag
        │  ├─ _fonts.scss //chứa các import font
        │  ├─ _helpers.scss //chứa các class để css nhanh giống như bootstrap (tuân thủ BEM)
        │  └─ _typography.scss //chứa các định nghĩa về chữ (font, size, color) mặc định
        ├─ components //chứa các style cho các components (chỉ dùng components lớn nhất)
        └─ pages // chứa các style đặc biệt của 1 page (vd background,... )        
           └─ layout // chứa các style cho components layout.
```
## Các quy tắc
1. **Components**
 - Nhóm các components dựa trên feature, tên thư mục của components viết kiểu PascalCase 
 - Thống nhất dùng function hoặc function arrow để khai báo react components, k dùng class
 - Dùng file đuôi jsx để khai báo components
2. **Style**
 - Sử dụng [quy tắc đặt tên BEM](https://viblo.asia/p/tim-hieu-ve-bem-trong-15-phut-924lJOk65PM)
 - Nếu thêm các style dùng chung ở các thư mục abstracts và base thì comment rõ tác dụng
3. **Redux**
 - Nếu thêm 1 slice file ở thư mục app/slice thì phải thêm reducer vào biến rootReducer ở file app/store.js
 - Comment rõ slice đó quản lý state gì để làm gì

**Các task front-end được chia trên Trello**
