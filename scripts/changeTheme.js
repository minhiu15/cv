const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const icon = btn.querySelector("i");
    const text = btn.querySelector("span");

    if (document.body.classList.contains("light-mode")) {
        icon.className = "bi bi-sun";
        text.textContent = "Light";
    } else {
        icon.className = "bi bi-moon-stars";
        text.textContent = "Dark";
    }
});
