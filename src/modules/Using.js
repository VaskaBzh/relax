export class Using {
    getTable() {
        return fetch('http://localhost:3004/object').then(res => res.json())
    }

    addService(element) {
        return fetch('http://localhost:3004/object', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(element)
        })
    }    
    
    removeService(id) {
        return fetch(`http://localhost:3004/object/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    getService(id) {
        return fetch(`http://localhost:3004/object/${id}`).then(res => res.json())
    }

    editService(id, element) {
        return fetch(`http://localhost:3004/object/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(element)
        })
    }

    filterService(filterOption) {
        return fetch(`http://localhost:3004/object?type=${filterOption}`).then(res => res.json())
    }
}