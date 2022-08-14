const closeBtnModal = document.querySelectorAll('[data-close-btn]')
const overlay = document.querySelector('#overlay')
const openModalBtn = document.querySelectorAll('[data-modal-target]')

openModalBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const modal = document.querySelector(btn.dataset.modalTarget)
        console.log(modal);
        openModal(modal)
    })
})

closeBtnModal.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')   
}
function closeModal(modal){
    if(modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')   
}
