const slider = (block, slides) => {
    const sliderBlock = document.getElementById(block)
    const slideCount = sliderBlock.querySelector('.slider-counter-content__current')
    const slideTotal = sliderBlock.querySelector('.slider-counter-content__total')

    let numSlides = sliderBlock.querySelectorAll(slides + '-slider__slide')

    let count = 1
    let indexSlide = 0

    const slideOff = () => {
        numSlides.forEach((btn, key) => {
            numSlides[key].style.display = 'none'
            numSlides[key].style.position = 'relative'
            numSlides[key].style.top = 0
        })
    }

    const slideOn = (indexSlide) => {
        numSlides[indexSlide].style.display = 'block'
        numSlides[indexSlide].style.position = 'absolute'
        numSlides[indexSlide].style.top = 0
    }

    const repair = () => {
        const navList = sliderBlock.querySelector('.nav-list-repair')
        const repairNavs = navList.querySelectorAll('.repair-types-nav__item')
        const repairSlides1 = sliderBlock.querySelectorAll('.types-repair1 > .repair-types-slider__slide')
        const repairSlides2 = sliderBlock.querySelectorAll('.types-repair2 > .repair-types-slider__slide')
        const repairSlides3 = sliderBlock.querySelectorAll('.types-repair3 > .repair-types-slider__slide')
        const repairSlides4 = sliderBlock.querySelectorAll('.types-repair4 > .repair-types-slider__slide')
        const repairSlides5 = sliderBlock.querySelectorAll('.types-repair5 > .repair-types-slider__slide')
    
        const slideFirstOn = () => {
            numSlides[0].style.display = 'block'
            numSlides[0].style.position = 'absolute'
            numSlides[0].style.top = 0
        }

        repairNavs.forEach((btn, key) => {
            btn.addEventListener('click', (e) => {  
                e.preventDefault()
                const elem = navList.querySelector('.active')
                elem.classList.remove('active')
                e.target.classList.add('active')
                slideOff()
                if (key == 0) {
                    numSlides = repairSlides1
                } else if (key == 1) {
                    numSlides = repairSlides2
                } else if (key == 2) {
                    numSlides = repairSlides3
                } else if (key == 3) {
                    numSlides = repairSlides4
                } else if (key == 4) {
                    numSlides = repairSlides5
                }
                slideTotal.textContent = numSlides.length
                slideFirstOn()
                slideCount.textContent = 1
                count = 1
            })
        })
    }
    
    if (block == 'repair-types') {
        repair()
    }

    slideTotal.textContent = numSlides.length

    slideCount.textContent = 1
    count = 1

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('#repair-types-arrow_right')) {
            if (count == slideTotal.textContent) {
                count = 0
            }
            count++
            slideCount.textContent = count
            slideOff()
            indexSlide++
            if (indexSlide == numSlides.length) {
                indexSlide = 0
            }
            sldieOn(indexSlide)
        }

        if (e.target.closest('#repair-types-arrow_left')) {
            count--
            if (count == 0) {
                count = slideTotal.textContent
            }
            slideCount.textContent = count
            slideOff()
            if (indexSlide == 0) {
                indexSlide = numSlides.length
            }
            indexSlide--
            slideOn(indexSlide)
        }
    })
}

export default slider