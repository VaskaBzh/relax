const render = (objects) => {
    const tbodys = document.querySelectorAll('.popup-repair-types-content-table__list > tbody')

    objects.forEach((obj, i) => {
        console.log(obj);
        if (obj.type == 'Потолок: Демонтажные работы') {
            tbodys[1].insertAdjacentHTML(`
            <tr class="mobile-row showHide">
                <td class="repair-types-name">${obj.name}</td>
                <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                <td class="repair-types-value">${obj.units.slice(0, 1)}<sup>${obj.units.slice(1, 1)}</sup></td>
                <td class="repair-types-value">${obj.const} руб.</td>
            </tr>`)
        }
        // obj.type
        console.log(tbody[1]);
    });
}

export default render