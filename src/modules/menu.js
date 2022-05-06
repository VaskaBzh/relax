const menu = () => {
    const buttonOpen = document.querySelector('.menu__icon')
    const modal = document.querySelector('.popup-menu')
    const modalValue = modal.querySelector('.popup-dialog-menu')
    const main = document.getElementById('main')
    const formula = document.getElementById('formula')
    const repairTypes = document.getElementById('repair-types')
    const portfolio = document.getElementById('portfolio')
    const transparency = document.getElementById('transparency')
    const director = document.getElementById('director')
    const reviews = document.getElementById('reviews')
    const faq = document.getElementById('faq')

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
        } else if (e.target.matches('[href="#main"]')) {
            main.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#formula"]')) {
            formula.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#repair-types"]')) {
            repairTypes.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#portfolio"]')) {
            portfolio.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#transparency"]')) {
            transparency.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#director"]')) {
            director.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#reviews"]')) {
            reviews.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('[href="#faq"]')) {
            faq.scrollIntoView({block: "start", behavior: "smooth"})
            modalClose()
        } else if (e.target.matches('.menu-link')) {
            modalClose()
        }
    })
}

export default menu