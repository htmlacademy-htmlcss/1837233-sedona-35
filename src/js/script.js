const searchButton = document.querySelector('.navigation-item.search-hotels')
const modal = document.querySelector('.modal-container')
const closeModalBtn = document.querySelector('.modal-content__close-btn')

searchButton.addEventListener('click', () => {
    modal.classList.add('open');
})

modal.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal-container')) {
        modal.classList.remove('open');
    }
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
})
