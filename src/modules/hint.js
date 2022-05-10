const hint = () => {
    const hintModal = document.querySelectorAll('.formula-item-popup')
    const hintLink = document.querySelectorAll('.formula-item__icon')
    const hintBlock = document.querySelectorAll('.formula-item__icon-inner')

    hintLink.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            hintModal[index].style.visibility = 'visible'
            hintModal[index].style.opacity = 1
            hintBlock[index].classList.add('active-item')
            if (hintModal[index].getBoundingClientRect().top <= 0) {
                hintModal[index].style.transform = 'translateY(' + (+hintModal[index].clientHeight + 100) +'px)'
                hintModal[index].style.zIndex = 102
                hintModal[index].style.paddingTop = 30 + 'px'
                hintModal[index].classList.add('rotate')
            }
        })
        link.addEventListener('mouseout', () => {
            hintBlock[index].classList.remove('active-item')
            hintModal[index].style.transform = 'translateY(0)'
            hintModal[index].style.visibility = 'hidden'
            hintModal[index].style.opacity = 0.1
            hintModal[index].style.zIndex = 102
            hintModal[index].style.paddingTop = 20 + 'px'
            hintModal[index].classList.remove('rotate')
        })
    })
}

export default hint