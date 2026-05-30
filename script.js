document.querySelectorAll('.education-header').forEach(header => {

  header.addEventListener('click', () => {

    const item = header.closest('.education-item');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.education-item').forEach(i => {
      i.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }

  });
});

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeBtn.textContent = "☀️ Light";
}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const isLight =
      document.body.classList.contains("light-mode");

  localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
  );

  themeBtn.textContent =
      isLight ? "☀️ Light" : "🌙 Dark";
});