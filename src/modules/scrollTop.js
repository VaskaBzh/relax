const scrollTop = () => {
    const scrollTop = document.querySelector('.button-footer')
    
    // Плавный скрол вверх
    const scroll = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30)
            setTimeout(scroll, 0)
        }
    }

    scrollTop.addEventListener('click', scroll)

    // Плавная прокрутка при якорной ссылке
    const anchors = document.querySelectorAll('[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.closest('.link-list')) {
            const blockID = anchor.getAttribute('href').substr(1)
        
            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        }
    })
}

}

export default scrollTop