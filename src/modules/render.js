const render = (objects, title) => {
    var objectType = ''

    var types = []

    objects.forEach((obj, i) => {
        if (obj.type != objectType) {
            types.push(obj.type)
            
            // Array.from(new Set(types))
            
            objectType = obj.type
        }
    })

    if (title == 'toTable') {
        const block = document.querySelector('.popup-repair-types')
        const wrapper = block.querySelector('.popup-repair-types-content-table')
        const tabs = block.querySelector('.nav-list-popup-repair')

        tabs.innerHTML = ''
        wrapper.innerHTML = ''

        Array.from(new Set(types)).forEach((type, i) => {
            tabs.insertAdjacentHTML('beforeend', `<button class="button_o popup-repair-types-nav__item">${type}</button>`)
        })

        Array.from(new Set(types)).forEach((type, i) => {
            wrapper.insertAdjacentHTML('beforeend', `<table class="popup-repair-types-content-table__list">
                <tbody>
                </tbody>
            </table>`)
        })

        var tbodys = wrapper.querySelectorAll('tbody')

        wrapper.style.display = 'flex'
        // wrapper.style.overflowX = 'hidden'
        block.querySelector('.nav-popup-repair-types').style.overflow = 'scroll'

        const swiper = () => {
            const tab = tabs.querySelectorAll('.popup-repair-types-nav__item')

            wrapper.querySelectorAll('tr').forEach((tr, i) => {
                tr.style.width = 674 + 'px'
                tr.style.display = 'inline-block'
            })
            let positionChange = wrapper.querySelector('table').clientWidth

            const positionChanger = () => {
                positionChange = wrapper.querySelector('table').clientWidth
            }

            let indexSlide = 0
            let position = 0

            tab[0].classList.add('active')

            block.addEventListener('click', (e) => {
                if (e.target.closest('.popup-repair-types-nav__item')) {
                    positionChanger()
                    tab.forEach((el, i) => {
                        el.classList.remove('active')
                    })
                }
            })
        }

        setTimeout(swiper, 1500)
    } else if (title == 'toAdmin') {
        const tbody = document.getElementById('tbody')
        const filter = document.getElementById('typeItem')

        tbody.innerHTML = ''
        filter.innerHTML = ''

        filter.insertAdjacentHTML('beforeend', `<option value="" selected></option>`)
        filter.insertAdjacentHTML('beforeend', `<option value="Все услуги">Все услуги</option>`)

        Array.from(new Set(types)).forEach((type, i) => {
            filter.insertAdjacentHTML('beforeend', `<option value="${type}">${type}</option>`)
        })
    }

    objects.forEach((obj, i) => {
        if (title == 'toTable') {
            Array.from(new Set(types)).forEach((type, i) => {
                if (obj.type == type) {
                    tbodys[i].insertAdjacentHTML('beforeend', `
                    <tr class="mobile-row showHide">
                        <td class="repair-types-name">${obj.name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${obj.units}</td>
                        <td class="repair-types-value">${obj.cost} руб.</td>
                    </tr>
                    `)
                }
            })
        } else if (title == 'toAdmin') {
            tbody.insertAdjacentHTML('beforeend', `
                <tr class="table__row" data-key="${obj.id}">
                    <td class="table__id table__cell">${obj.id}</td>
                    <td class="table-type table__cell">${obj.type}</td>
                    <td class="table-name table__cell">${obj.name}</td>
                    <td class="table-units table__cell">${obj.units}</td>
                    <td class="table-cost table__cell">${obj.cost} руб</td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `)
        }
    })
}

export default render