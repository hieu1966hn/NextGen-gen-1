const view = {}

view.setActiveScreen = (screenName) => {
  switch (screenName) {

    // Màn hình đăng ký
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen

      const register_form = document.getElementById("register-form")
      register_form.
        addEventListener("submit", (event) => {
          event.preventDefault(); // ngăn trình duyệt tự động reload khi người dùng submit

          const data = {
            firstName: register_form.firstName.value,
            lastName: register_form.lastName.value
          }

          console.log(data);

          // sau khi co du lieu nguoi dung nhap => controller de kiem tra tinh hop le
          controller.register(data)

        })







      // Người dùng chuyển từ trang đăng ký -> trang đăg nhập
      document.getElementById("redirect-to-login").
        addEventListener("click", () => {
          // khi bấm vào nút Login thì chuyển sang màn hình LoginScreen
          view.setActiveScreen("loginScreen");
        })


      break;





    // Màn hình đăng nhập
    case `loginScreen`:
      document.getElementById("app").innerHTML = components.loginScreen


      // Người dùng chuyển từ trang đăng nhập => trang đăng ký
      document.getElementById("redirect-to-register").
        addEventListener("click", () => {
          // khi bấm vào nút Login thì chuyển sang màn hình LoginScreen
          view.setActiveScreen("registerScreen");
        })
      break;
  }
}