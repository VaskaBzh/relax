import { Using } from './using'
import render from './render'

const admin = () => {
    const body = document.querySelector('body')
    
    if (body.matches('.admin')) {
        const tableWrapper = document.querySelector('.table__wrapper')
        const tbody = document.getElementById('tbody')
    
        tableWrapper.style.height = 500 + 'px'
        
        window.using = new Using

        using.getTable().then(data => {
            render(data, 'toAdmin')
        })

        const addService = () => {
            body.addEventListener('click', (e) => {
                e.preventDefault()

                if (e.target.closest('.btn-addItem')) {
                    const newService = {
                        type: "Тип",
                        name: "Вид работ",
                        units: "Единица измерения",
                        cost: "цена"
                    }
            
                    using.addService(newService).then(() => {
                        using.getTable().then(service => {
                            render(service, 'toAdmin')
                        })
                    })
                }
            })
        }

        const removeService = () => {
            tbody.addEventListener('click', (e) => {
                e.preventDefault()

                if (e.target.closest('.action-remove')) {
                    const tr = e.target.closest('tr')
                    const id = tr.dataset.key

                    using.removeService(id).then(() => {
                        using.getTable().then(service => {
                            render(service, 'toAdmin')
                        })
                    })
                }
            })
        }
        
        const editService = () => {
            tbody.addEventListener('click', (e) => {
            e.preventDefault()

            if (e.target.closest('.action-change')) {
                let tr = e.target.closest('tr')
                const id = tr.dataset.key

                using.getService(id).then(res => {
                    tr.innerHTML = `<td class="table__id table__cell">${res.id}</td>
                    <td class="table-type table__cell"><input type="text" class="input type" value="${res.type}"></td>
                    <td class="table-name table__cell"><input type="text" class="input name" value="${res.name}"></td>
                    <td class="table-units table__cell"><input type="text" class="input units" value="${res.units}"></td>
                    <td class="table-cost table__cell"><input type="text" class="input cost" value="${res.cost}"> руб</td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-confirm"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Сохранить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>`

                    tbody.addEventListener('click', (e) => {
                        e.preventDefault()

                        if (e.target.closest('.action-confirm')) {
                            const inputType = tr.querySelector('.type').value
                            const inputName = tr.querySelector('.name').value
                            const inputUnits = tr.querySelector('.units').value
                            const inputCost = tr.querySelector('.cost').value

                            const service = {
                                type: inputType,
                                name: inputName,
                                units: inputUnits,
                                cost: inputCost
                            }

                            using.editService(id, service).then(() => {
                                using.getTable().then(data => {
                                    render(data, 'toAdmin')
                                })
                            })
                        }
                    })
                })
            }
        })
        }

        addService()
        removeService()
        editService()
    }
}

export default admin