export class Get {
    getTable() {
        return fetch('http://localhost:3004/object').then(res => res.json())
    }
}