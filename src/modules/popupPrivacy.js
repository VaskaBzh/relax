import popupRepair from "./popupRepair"

const popupPrivacy = () => {
    const linkOpen = document.querySelector('.link-privacy')
    const modal = document.querySelector('.popup-privacy')
    const buttonClose = modal.querySelector('.close')

    buttonClose.addEventListener('click', () => {
        modal.style.visibility = 'hidden'
    })
    linkOpen.addEventListener('click', () => {
        modal.style.visibility = 'visible'
    })
}

export default popupPrivacy