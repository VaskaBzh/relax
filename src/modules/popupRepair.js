const popupRepair = () => {
    const menuLinks = document.querySelectorAll('.link-list')
    const modal = document.querySelector('.popup-repair-types')
    const buttonClose = modal.querySelector('.close')

    buttonClose.addEventListener('click', () => {
        modal.style.visibility = 'hidden'
    })

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            modal.style.visibility = 'visible'
        })
    })
}

export default popupRepair