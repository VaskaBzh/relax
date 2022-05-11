const menu = () => {
    const buttonOpen = document.querySelector('.menu__icon')
    const modal = document.querySelector('.popup-menu')
    const modalValue = modal.querySelector('.popup-dialog-menu')

    const modalOpen =  () => {
        modalValue.style.transform = "translate3d(0, 0, 0)"
    }

    const modalClose = () => {
        if (window.innerWidth < 576) {
            modalValue.style.transform = "translate3d(0, -100vh, 0)"
        } else {
            modalValue.style.transform = "translate3d(645px, 0, 0)"
        }
    }
    
    buttonOpen.addEventListener('click', modalOpen)

    modalValue.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.matches('.close')) {
            modalClose()
        } else if (e.target.matches('[href*="#"]')) {
            modalClose()
        } else if (e.target.matches('.menu-link')) {
            modalClose()
        }
    })
}

export default menu