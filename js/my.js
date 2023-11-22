document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const storeItems = document.querySelectorAll('.box');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const filter = button.getAttribute('data-filter');
  
        storeItems.forEach(function (item) {
          const itemCategory = item.getAttribute('data-item');
  
          if (filter === 'all' || filter === itemCategory) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  