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