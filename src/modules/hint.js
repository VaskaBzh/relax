const hint = () => {
    const hintModal = document.querySelectorAll('.formula-item-popup')
    const hintLink = document.querySelectorAll('.formula-item__icon-inner-text')

    hintLink.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            hintModal[index].style.visibility = 'visible'
            hintModal[index].style.opacity = 1
            console.log(hintModal[index].getBoundingClientRect().top);
            if (hintModal[index].getBoundingClientRect().top <= 0) {
                hintModal[index].style.transform = 'rotate(180deg)'
                hintModal[index].style.transform = 'rotate(180deg)'
            }
        })
        link.addEventListener('mouseout', () => {
            hintModal[index].style.visibility = 'hidden'
            hintModal[index].style.opacity = 0.1
        })
    })
}

export default hint