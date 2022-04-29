const telephoneMask = () => {
    const tels = document.querySelectorAll('[name="phone"]')

    const handleInput = (e) => {
        e.target.value = phoneMask(e.target.value)
    }
      
    const phoneMask = (phone) => {
    return phone.replace(/\D/g, '')
        .replace(/^(\d)/, '($1')
        .replace(/^(\(\d{3})(\d)/, '$1) $2')
        .replace(/(\d{3})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }

    tels.forEach((tel, index) => [
        tel.addEventListener('input', handleInput)
    ])
}

export default telephoneMask