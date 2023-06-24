let html = document.getElementsByTagName("html");
let body = document.getElementsByTagName("body");
let mode_toggler = document.getElementById("btn_mode_switcher");
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  body[0].classList.toggle("mode-light")
  body[0].classList.toggle("mode-dark")
})