const view = {}

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen

      break;
    case `loginScreen`:
      document.getElementById("app").innerHTML = components.loginScreen

      break;
  }
}