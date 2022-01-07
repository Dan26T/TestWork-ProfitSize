import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
})

export const toDoApi = {
    getToDos() {
        return instance.get(`todos`)
            .then(res => res.data)
    },
    completeToDos(todo) {
        debugger
        return instance.put(`todos/${todo.id}`, {...todo, completed: true})
            .then(res => res.data)
    },
    uncompleteToDos(todo) {
        debugger
        return instance.put(`todos/${todo.id}`, {...todo, completed: false})
            .then(res => res.data)
    },
}