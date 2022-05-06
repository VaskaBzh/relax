const popupPrivacy = () => {
    const linkOpen = document.querySelectorAll('.link-privacy')
    const modal = document.querySelector('.popup-privacy')

    modal.addEventListener('click', (e) => {
        if (e.target.matches('.close')) {
            modal.style.visibility = 'hidden'
        }
    })
    linkOpen.forEach((link, i) => {
        if (link.textContent == 'политикой конфиденциальности') {
            link.addEventListener('click', () => {
                modal.style.visibility = 'visible'
            })
        }
    })
}

export default popupPrivacy