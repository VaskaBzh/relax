const smoothButtonUp = () => {
    const buttonUp = document.querySelector('.button-footer')
    const main = document.getElementById('main')

    buttonUp.addEventListener('click', (e) => {
        e.preventDefault()
        main.scrollIntoView({block: 'start', behavior: 'smooth'})
    })
}

export default smoothButtonUp