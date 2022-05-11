const popup = (block, open) => {
    const popupThank = () => {
        const modal = document.querySelector(block)
    
        modal.addEventListener('click', (e) => {
            if (e.target.matches('.close') || !e.target.closest('.popup-dialog')) {
                modal.style.visibility = 'hidden'
            }
        })
        modal.style.visibility = 'visible'
    }

    const normalPopup = () => {
        const openBtn = document.querySelectorAll(open)
        const modal = document.querySelector(block)

        modal.addEventListener('click', (e) => {
            if (e.target.matches('.close') || !e.target.closest('.popup-dialog') && !e.target.closest('.popup-arrow')) {
                modal.style.visibility = 'hidden'
            }
        })
        openBtn.forEach((btn, i) => {
            if (block == '.popup-privacy') {
                if (btn.textContent == 'политикой конфиденциальности') {
                    btn.addEventListener('click', () => {
                        modal.style.visibility = 'visible'
                    })
                }
            } else {
                btn.addEventListener('click', () => {
                    modal.style.visibility = 'visible'
                })
            }
        })
    }
    
    if (block == '.popup-thank') {
        popupThank()
    } else {
        normalPopup()
    }
}

export default popup