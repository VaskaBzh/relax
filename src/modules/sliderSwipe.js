const sliderSwipe = (sliderBlock, sliderWrapper) => {
    const block = document.querySelector(sliderBlock)
    const slider = block.querySelector(sliderWrapper)

    let indexSlide = 0
    let position = 0

    const repair = () => {
        if (window.innerWidth <= 1024) {
            block.addEventListener('click', (e) => {
                if (e.target.closest('#nav-arrow-repair-left_base')) {
                    if (window.innerWidth > 768) {
                        position += 250
                        if (position > 20) {
                            position = -500
                        }
                    } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                        position += 230
                        if (position > 20) {
                            position = -690
                        }
                    } else if (window.innerWidth <= 425) {
                        position += 210
                        if (position > 20) {
                            position = -830
                        }
                    }
                    slider.style.transform = `translateX(${position + 'px'})`
                } else if (e.target.closest('#nav-arrow-repair-right_base')) {
                    if (window.innerWidth > 768) {
                        position -= 250
                        if (position < -500) {
                            position = 0
                        }
                    } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                        position -= 230
                        if (position < -690) {
                            position = 0
                        }
                    } else if (window.innerWidth <= 425) {
                        position -= 210
                        if (position < -900) {
                            position = 0
                        }
                    }
                    slider.style.transform = `translateX(${position + 'px'})`
                }
            })
        }
    }

    const formula = () => {
        if(window.innerWidth <= 1024) {
            block.style.overflowX = 'hidden'
        }

        const prevElement = document.createElement('div')
        const nextElement = document.createElement('div')

        nextElement.innerHTML = '<div class="formula-item__icon"><div class="formula-item-popup formula-item-popup-01">Работы ведутся<strong>точно</strong> по графику сострогим <strong>cоблюдением</strong> сроков ремонта,<strong>указанных</strong> в договоре.</div><div class="formula-item__icon-inner">01</div></div><div class="formula-item__descr">Делаем объекты в конкретный срок</div><!-- formula-item -->'
        nextElement.classList.add('formula-item')
        nextElement.classList.add('formula-slider__slide')
        prevElement.innerHTML = '<div class="formula-item__icon"><div class="formula-item-popup formula-item-popup-06"><strong>Сами</strong> вывозим и утилизируем мусор. Поприезду, вы войдете в <strong>чистую</strong> жилое помещение, в котором можно <strong>сразужить.</strong></div><div class="formula-item__icon-inner">06</div></div><div class="formula-item__descr">Оставляем чистоту<br>после ремонта</div></div><!-- /formula-slider -->'
        prevElement.classList.add('formula-item')
        prevElement.classList.add('formula-slider__slide')

        slider.append(nextElement) 
        slider.prepend(prevElement)

        indexSlide++
        
        const slides = slider.querySelectorAll(sliderWrapper + '__slide')
        const modal = slider.querySelectorAll('.formula-item-popup')

        const slideOff = () => {
            slides.forEach((slide, i) => {
                slide.style.opacity = 0.4
                slide.style.marginTop = -100 + 'px'
                modal[i].style.visibility = 'hidden'
                modal[i].style.opacity = 0  
            })
        }

        position = 50

        if (window.innerWidth >= 425) {
            position = -150
        }

        slider.style.display = 'flex'

        const swipe = (position) => {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${position + 'px'})`
            })
        }
        
        slides.forEach((slide, i) => {
            slide.style.transitionDuration = 400 + 'ms'
            slide.style.height = 188 + 'px'
            slide.style.marginRight = 16 + 'px'
            slide.style.marginLeft = 16 + 'px'
            slide.style.marginTop = -100 + 'px'
        })

        swipe(position)
        slides[indexSlide].style.opacity = 1
        slides[indexSlide].style.marginTop = -80 + 'px'
        modal[indexSlide].style.visibility = 'visible'
        modal[indexSlide].style.opacity = 1

        block.addEventListener('click', (e) => {
            if (e.target.closest('#formula-arrow_right')) {
                slideOff()
                indexSlide++
                if (window.innerWidth <= 1024 && window.innerWidth > 425) {
                    position -= 220
                    if (position < -1060) {
                        position = 50
                    }
                } else if (window.innerWidth <= 425) {
                    position -= 200
                    if (position < -1150) {
                        position = -150
                    }
                }
                if (indexSlide == 0) {
                    indexSlide = 6
                } else if (indexSlide == 7) {
                    indexSlide = 1
                }
                slides[indexSlide].style.opacity = 1
                slides[indexSlide].style.marginTop = -80 + 'px'
                modal[indexSlide].style.visibility = 'visible'
                modal[indexSlide].style.opacity = 1
                swipe(position)
            }
            if (e.target.closest('#formula-arrow_left')) {
                slideOff()
                indexSlide--
                if (window.innerWidth <= 1024 && window.innerWidth > 425) {
                    position += 220
                    if (position > 50) {
                        position = -1060
                    }
                } else if (window.innerWidth <= 425) {
                    position += 200
                    if (position > -150) {
                        position = -1150
                    }
                }
                if (indexSlide == 7) {
                    indexSlide == 1
                } else if (indexSlide == 0) {
                    indexSlide = 6
                }
                slides[indexSlide].style.opacity = 1
                slides[indexSlide].style.marginTop = -80 + 'px'
                modal[indexSlide].style.visibility = 'visible'
                modal[indexSlide].style.opacity = 1
                swipe(position)
            }
        })
    }

    const reviews = () => {
        const slides = slider.querySelectorAll(sliderWrapper + '__slide')

        let positionChanger = slides[0].clientWidth
    
        const swipe = (position) => {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${position + 'px'})`
            })
        }

        slider.style.display = 'flex'

        slides.forEach((slide, i) => {
            slide.style.transitionDuration = 400 + 'ms'
        })

        block.addEventListener('click', (e) => {
            if (e.target.closest('#reviews-arrow_right')) {
                if (window.innerWidth > 768) {
                    position -= positionChanger
                } else if (window.innerWidth <= 768) {
                    position -= positionChanger
                }
                if (position < -1976) {
                    position = 0
                }
                swipe(position)
            }
            if (e.target.closest('#reviews-arrow_left')) {
                if (window.innerWidth > 768) {
                    position += 494
                } else if (window.innerWidth <= 768) {
                    position += 494
                }
                if (position > 0) {
                    position = -1976
                }
                swipe(position)
            }
        })
    }

    const transparency = () => {
        if (window.innerWidth <= 768) {
            block.style.overflowX = 'hidden'

            const slides = slider.querySelectorAll('.transparency-item')
            
            position = 150

            if (window.innerWidth <= 425) {
                position = 0
            }

            slider.style.display = 'flex'
            slider.style.flexWrap = 'nowrap'
        
            const swipe = (position) => {
                slides.forEach((slide, i) => {
                    slide.style.transform = `translateX(${position + 'px'})`
                })
            }

            swipe(position)

            slider.style.display = 'flex'

            slides.forEach((slide, i) => {
                slide.style.transitionDuration = 400 + 'ms'
            })

            block.addEventListener('click', (e) => {
                if (e.target.closest('#transparency-arrow_right')) {
                    if (window.innerWidth <= 768 && window.innerWidth > 425) {
                        position -= 453
                        if (position < -926) {
                            position = 150
                        }
                    }
                    if (window.innerWidth <= 425) {
                        position -= 270
                        if (position < -540) {
                            position = 0
                        }
                    }
                    swipe(position)
                }
                if (e.target.closest('#transparency-arrow_left')) {
                    if (window.innerWidth <= 768 && window.innerWidth > 425) {
                        position += 453
                        if (position > 150) {
                            position = -926
                        }
                    }
                    if (window.innerWidth <= 425) {
                        position += 270
                        if (position > 0) {
                            position = -540
                        }
                    }
                    swipe(position)
                }
            })
        }
    }

    const arrowInit = () => {
        if (window.innerWidth > 1024) {
            if (position == -704) {
                block.querySelector(sliderBlock + '-arrow_right').style.display = 'none'
                block.querySelector(sliderBlock + '-arrow_left').style.display = 'flex'
            }
        } else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
            if (position == -1056) {
                block.querySelector(sliderBlock + '-arrow_right').style.display = 'none'
                block.querySelector(sliderBlock + '-arrow_left').style.display = 'flex'
            }
        } else if (window.innerWidth <= 768) {
            if (position == -1364) {
                block.querySelector(sliderBlock + '-arrow_right').style.display = 'none'
                block.querySelector(sliderBlock + '-arrow_left').style.display = 'flex'
            }
        }
        if (position == 0) {
            block.querySelector(sliderBlock + '-arrow_left').style.display = 'none'
            block.querySelector(sliderBlock + '-arrow_right').style.display = 'flex'
        }
    }

    const portfolio = () => {
        const slides = slider.querySelectorAll(sliderWrapper + '__slide')
    
        const swipe = (position) => {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${position + 'px'})`
            })
        }

        slides.forEach((slide, i) => {
            slide.style.transitionDuration = 400 + 'ms'
        })

        block.addEventListener('click', (e) => {
            if (e.target.closest('#portfolio-arrow_right')) {
                if (window.innerWidth > 768) {
                    position -= 352
                } else if (window.innerWidth <= 768) {
                    position -= 341
                }
                swipe(position)
                arrowInit()
            }
            if (e.target.closest('#portfolio-arrow_left')) {
                if (window.innerWidth > 768) {
                    position += 352
                } else if (window.innerWidth <= 768) {
                    position += 341
                }
                swipe(position)
                arrowInit()
            }
        })
    }

    if (sliderBlock == '#portfolio') {
        portfolio()
        arrowInit()
    } else if (sliderBlock == '#repair-types') {
        repair()
    } else if (sliderBlock == '#formula') {
        formula()
    } else if (sliderBlock == '#reviews') {
        reviews()
    } else if (sliderBlock == '#transparency') {
        transparency()
    }
}

export default sliderSwipe