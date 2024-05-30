document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filters button');
    const items = document.querySelectorAll('.gallery-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});