{
    const welcome = () => {
        console.log("Witam Was serdecznie!")
    }

    const toggleFont = () => {
        const body = document.querySelector(".body");
        const buttonThemeName = document.querySelector(".js-colorName")

        body.classList.toggle("body__font");
        buttonThemeName.innerText = body.classList.contains("body__font") ? "czarnym" : "niebieskim"
    };

    const init = () => {
        const buttonChangeFont = document.querySelector(".buttonChangeFont")
        buttonChangeFont.addEventListener("click", toggleFont)
    };

    welcome();
    init()

};