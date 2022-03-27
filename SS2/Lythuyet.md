1. Test Responsive: có 2 cách

- C1: Sử dụng f12 sau đó tiến hành kéo thả
- C2: Sử dụng icon di động để check responsive
- C3: Sử dụng Extension: Viewport Resizer

2. Giới thiệu về khái niệm: "Media query":

- KN: Là chuỗi truy vấn giúp dev dễ dàng lựa chọn ra được
  kích thước màn hình cụ thể. VD: điện thoại, máy tính bảng, máy tính
- Cú pháp Media query:

@media not|only mediatypes and (mediafeature and|or|not mediafeature){
CSS code
}

- Keywords:

* not: loại trừ
* only: chỉ với
* and: và
* or: hoặc

- mediatypes (các trường hợp muốn dùng CSS)

* screen: Chế độ màn hình (đt, tablet, pc)
* print: Chế độ màn hình máy in
* speech: Màn hình nói được (màn hình dành người khuyết tật)
* all-default: (mặc định là tất cả, gộp cả 3 đối tượng trên)

- mediafeature: Đối tượng cụ thể để CSS

* min-width: Chiều rộng tối thiểu
* max-width: Chiều rộng tối đa

II. Khái niệm Breakpoint và thực hành:

- Break-point: là những điểm, vị trí mà bố cục website sẽ thay đổi - thích ứng để tạo nên giao diện đa thiết bị

* Thường sẽ có 3 Break-point cơ bản sử dụng như sau:

- Mobile: width < 740px
- tablet: 740px <= width < 1024px
- PZ: width >= 1024px
