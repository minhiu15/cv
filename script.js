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