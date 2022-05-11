import { Get } from './get'
import render from './render'

const price = () => {
    window.get = new Get

    get.getTable().then(data => {
        console.log(data);
        render(data)
    })
}

export default price