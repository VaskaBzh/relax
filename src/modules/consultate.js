const consultate = () => {
    const block = document.getElementById('director')
    const buttonOpen = block.querySelector('.button_wide')
    const modal = document.querySelector('.popup-consultation')
    const buttonClose = modal.querySelector('.close')

    buttonOpen.addEventListener('click', () => {
        modal.style.visibility = 'visible'
        console.log('open');
    })
    buttonClose.addEventListener('click', () => {
        modal.style.visibility = 'hidden'
    })
}

export default consultate