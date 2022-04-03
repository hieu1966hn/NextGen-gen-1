const controller = {}

controller.register = (data) => {
  // kiểm tra dữ liệu (data) phù hợp chưa để gửi lên  server (sếp)
  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").innerText = "Please input firstName"
  }

}


controller.login