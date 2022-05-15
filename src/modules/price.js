import { Using } from './using'
import render from './render'

const price = () => {
    window.using = new Using

    using.getTable().then(data => {
        render(data, 'toTable')
    })
}

export default price