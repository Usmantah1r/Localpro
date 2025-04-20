const totalPages = 10;
let currentPage = 1;

const renderPagination = () => {
  const container = document.getElementById("pagination");
  container.innerHTML = '';

  const createButton = (label, page = null, disabled = false, active = false) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    if (disabled) btn.disabled = true;
    if (active) btn.classList.add('active');
    if (page !== null) {
      btn.addEventListener('click', () => {
        currentPage = page;
        renderPagination();
      });
    }
    return btn;
  };

  // Previous Button
  container.appendChild(createButton('<', currentPage - 1, currentPage === 1));

  // Page 1
  container.appendChild(createButton('1', 1, false, currentPage === 1));

  // Show 2nd and 3rd pages or dots
  if (currentPage > 3) {
    const dots = document.createElement('div');
    dots.className = 'dots';
    dots.textContent = '...';
    container.appendChild(dots);
  }

  // Dynamic middle pages
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 1 && i < totalPages) {
      container.appendChild(createButton(i, i, false, i === currentPage));
    }
  }

  // Dots before last page
  if (currentPage < totalPages - 2) {
    const dots = document.createElement('div');
    dots.className = 'dots';
    dots.textContent = '...';
    container.appendChild(dots);
  }

  // Last Page
  if (totalPages > 1) {
    container.appendChild(createButton(totalPages, totalPages, false, currentPage === totalPages));
  }

  // Next Button
  container.appendChild(createButton('>', currentPage + 1, currentPage === totalPages));
};

renderPagination();