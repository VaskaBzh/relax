const hint = () => {
    const hintModal = document.querySelectorAll('.formula-item-popup')
    const hintLink = document.querySelectorAll('.formula-item__icon-inner-text')

    hintLink.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            hintModal[index].style.visibility = 'visible'
            console.log('wfew')
        })
        // link.addEventListener('mouseover', () => {
        //     hintModal[index].style.visibility = 'hidden'
        // })
    })
}

export default hint