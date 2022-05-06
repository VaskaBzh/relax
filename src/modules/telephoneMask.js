const telephoneMask = () => {
    window.addEventListener("DOMContentLoaded", () => {
        [].forEach.call( document.querySelectorAll('[name="phone"]'), (input) => {
        let keyCode
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode)
            let pos = this.selectionStart
            if (pos < 3) event.preventDefault()
            let matrix = "+7 (___) ___-__-__"
            let i = 0
            let def = matrix.replace(/\D/g, "")
            let val = this.value.replace(/\D/g, "")
            let new_value = matrix.replace(/[_\d]/g, (a) => {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_")
            if (i != -1) {
                i < 5 && (i = 3)
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                (a) => {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&")
            reg = new RegExp("^" + reg + "$")
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false)
        input.addEventListener("focus", mask, false)
        input.addEventListener("blur", mask, false)
        input.addEventListener("keydown", mask, false)
    
      })
    
    })
    // const tels = document.querySelectorAll('[name="phone"]')

    // const handleInput = (e) => {
    //     e.target.value = phoneMask(e.target.value)
    // }
      
    // const phoneMask = (phone) => {
    // return phone.replace(/\D/g, '')
    //     .replace(/^(\d)/, '($1')
    //     .replace(/^(\(\d{3})(\d)/, '$1) $2')
    //     .replace(/(\d{3})(\d{1,4})/, '$1-$2')
    //     .replace(/(-\d{4})\d+?$/, '$1')
    // }

    // tels.forEach((tel, index) => [
    //     tel.addEventListener('input', handleInput)
    // ])
}

export default telephoneMask