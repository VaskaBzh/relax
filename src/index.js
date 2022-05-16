import admin from './modules/admin'
import telephone from './modules/telephone'
import menu from './modules/menu'
import smoothButtonUp from './modules/smoothButtonUp'
import popup from './modules/popup'
import hint from './modules/hint'
import scrollTop from './modules/scrollTop'
import accordion from './modules/accordion'
import slider from './modules/slider'
import sliderSwipe from './modules/sliderSwipe'
import sendForm from './modules/sendForm'
import price from './modules/price'
import validation from './modules/validation'

admin()
telephone()
menu()
smoothButtonUp()
popup('.popup-privacy', '.link-privacy')
popup('.popup-repair-types', '.link-list')
popup('.popup-consultation', '#director .button_wide')
popup('.popup-transparency', '.transparency-item')
popup('.popup-portfolio', '.portfolio-slider__slide-frame')
hint()
scrollTop()
accordion()
slider('#repair-types', '.types-repair1 > .repair-types')
slider('.popup-transparency', '.popup-transparency')
slider('.popup-portfolio', '.popup-portfolio')
slider('.popup-portfolio', '.popup-portfolio-text')
sliderSwipe('#portfolio', '.portfolio-slider')
sliderSwipe('#repair-types', '.nav-list')
sliderSwipe('#formula', '.formula-slider')
sliderSwipe('#reviews', '.reviews-slider')
sliderSwipe('#transparency', '.transparency-slider')
price()
validation()

sendForm({
    formId: 'feedback1',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input1'
        }
    ]
});
sendForm({
    formId: 'feedback2',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input2'
        }
    ]
});
sendForm({
    formId: 'feedback3',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input3'
        }
    ]
});
sendForm({
    formId: 'feedback4',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input4'
        }
    ]
});
sendForm({
    formId: 'feedback5',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input5'
        }
    ]
});
