const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");

openButton.addEventListener("click", function () {
    letter.classList.remove("hidden");
    letter.classList.add("show-letter");

    openButton.textContent = "Made with love for you 🤍";
    openButton.disabled = true;

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
