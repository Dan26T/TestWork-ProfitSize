import {toDoApi} from "../api/api";


const SET_TODOS = 'SET_TODOS'
const SET_DESCRIPTIONS = 'SET_DESCRIPTIONS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const TOGGLE_TODO = 'TOGGLE_TODO'

/*export type ToDoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}
*/
let initialState = {
    todos: [],
    descriptions: [],
    activePage: 1
};

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let descriptionRandom = (todos) => {
    let des = []
    if (todos.length > 0) {
        for (let i = 1; i <= todos.length; i++) {
            let happening = getRandomInt(0, 101)
            if (happening > 25) {
                des.push({
                    title: todos[getRandomInt(0, todos.length - 1)].title,
                    todoId: i
                })
            } else {
                des.push({
                    title: '',
                    todoId: i
                })
            }
        }
    }
    return des
}

const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: [...action.todos]
            }
        case SET_DESCRIPTIONS:
            let toDos = state.todos
            return {
                ...state,
                descriptions: [...descriptionRandom(toDos)]
            }
        case CHANGE_PAGE:
            debugger
            return {
                ...state,
                activePage: action.page
            }
        case TOGGLE_TODO:
            debugger
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        let completedNew = !todo.completed
                        console.log(todo.completed)
                        console.log(completedNew)
                        return {...todo, completed: completedNew}
                    }
                    return todo;
                })
            };


        default:
            return state;
    }
}

const setToDosAC = (todos) => ({type: SET_TODOS, todos})
const setDescriptionsAC = () => ({type: SET_DESCRIPTIONS})
const toggleTodoAC = (todoId) => ({type: TOGGLE_TODO, todoId})
export const changeActivePageAC = (page) => ({type: CHANGE_PAGE, page})


export const getTodos = () => {
    return async (dispatch) => {
        let response = await toDoApi.getToDos()
        dispatch(setToDosAC(response))
        dispatch(setDescriptionsAC())
    }
}
export const updateTodo = (todoId) => {
    return async (dispatch) => {
        let response = await toDoApi.updateToDos(todoId)
        dispatch(toggleTodoAC(todoId))
    }
}


export default TodosReducer;