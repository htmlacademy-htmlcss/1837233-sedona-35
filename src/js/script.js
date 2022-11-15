const searchButton = document.querySelector('.navigation-item.search-hotels')
const openModalBtn = document.querySelector('.info-block__hotel-seach-button')
const modal = document.querySelector('.modal-container')
const closeModalBtn = document.querySelector('.modal-content__close-btn')

searchButton.addEventListener('click', () => {
    modal.classList.add('open');
})

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('open');
    })
}

modal.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal-container')) {
        modal.classList.remove('open');
    }
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
})
