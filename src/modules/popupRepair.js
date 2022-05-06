const popupRepair = () => {
    const menuLinks = document.querySelectorAll('.link-list')
    const modal = document.querySelector('.popup-repair-types')

    modal.addEventListener('click', (e) => {
        if (e.target.matches('.close')) {
            modal.style.visibility = 'hidden'
        }
    })
    menuLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            modal.style.visibility = 'visible'
        })
    })
}

export default popupRepair