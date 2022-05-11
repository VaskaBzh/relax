const accordion = () => {
    const accordion = document.querySelector('.accordion')
    const accordionItem = accordion.querySelectorAll('.title_block')

    accordionItem.forEach(function (item) {
        item.addEventListener('click', function () {
            if (item.classList.contains('msg-active')) {
                item.classList.remove('msg-active')
            } else {
                accordionItem.forEach(item => {
                    item.classList.remove('msg-active')
                })
                item.classList.add('msg-active')
            }
        })
    })

}

export default accordion