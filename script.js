document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const header = box.querySelector('.box-header input');
        header.addEventListener('change', () => {
            const content = box.querySelector('.box-content');
            const isVisible = content.style.display === 'block';

            // Collapse all boxes
            boxes.forEach(b => b.querySelector('.box-content').style.display = 'none');

            // Expand the clicked box
            if (!isVisible) {
                content.style.display = 'block';
            }
        });
    });
});
