const toggleBtn = document.querySelector('.btn-close');
const navMenu = document.querySelector('.displayed-nav');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    toggleBtn.classList.toggle('active');
});