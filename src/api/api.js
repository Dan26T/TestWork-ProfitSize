import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
})

export const toDoApi = {
    getToDos() {
        debugger
        return instance.get(`todos`)
            .then(res => res.data)
    },
    updateToDos(todoId) {
        debugger
        return instance.put(`todos/${todoId}`)
            .then(res => res.data)
    }
}