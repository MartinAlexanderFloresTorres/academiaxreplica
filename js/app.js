const menubar = document.querySelector('.menubar');
const header_item = document.querySelector('.header-item');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('active');
    header_item.classList.toggle('active');
})