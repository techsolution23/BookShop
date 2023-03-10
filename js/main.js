// header section

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.children[0].setAttribute('class', 'fas fa-times');
    } else if(visibility === 'true') {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.children[0].setAttribute('class', 'fas fa-bars');
    }
});

// dashboard page

const addBookBtn = document.querySelector('.btn--add-book');
const addBookForm = document.querySelector('.form-wrapper');
const closeForm = document.querySelector('.close-form');

addBookBtn.addEventListener('click', () => {
    addBookForm.style.display = 'grid';
});

closeForm.addEventListener('click', () => {
    addBookForm.style.display = 'none';
});