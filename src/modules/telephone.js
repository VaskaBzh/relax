const telephone = () => {
    const buttonToggle = document.querySelector('.header-contacts__arrow img')
    const block = document.querySelector('.header-contacts__phone-number-accord')
    const tel = block.querySelector('.header-contacts__phone-number')

    buttonToggle.setAttribute('style', "transform: rotate(0deg);")

    const telToggle = () => {
        if (buttonToggle.getAttribute('style') == "transform: rotate(0deg);") {
            block.style.top = '30px'
            buttonToggle.style.transform = 'rotate(180deg)'
            tel.style.opacity = 1
        } else {
            block.style.top = '0'
            buttonToggle.style.transform = 'rotate(0deg)'
            tel.style.opacity = 0
        }
    }
    buttonToggle.addEventListener('click', telToggle)
}

export default telephone