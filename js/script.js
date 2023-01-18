let buttonChangeFont = document.querySelector(".buttonChangeFont")
let body = document.querySelector(".body")
let buttonThemeName = document.querySelector(".js-colorName")

buttonChangeFont.addEventListener("click", () => {
    body.classList.toggle("body__font");
    buttonThemeName.innerText = body.classList.contains("body__font") ? "czarnym" : "niebieskim";
})