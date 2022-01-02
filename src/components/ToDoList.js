import React, {useEffect, useState} from 'react'
import s from './todoList.module.css'


export const ToDoList = (props) => {
    let [todos, changeTodos] = useState([])
    useEffect(() => {
        changeTodos(props.todos)
    }, [props.todos])

    let todosCount = 5
    let pagesCount = Math.ceil(todos.length / todosCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let toggleTodos = (todoId) => {
        props.updateTodo(todoId)
    }

    return <>
        <div className={s.decoration}></div>
        <div className={s.container}>
        <div className={s.head_container}>
            <div className={s.pageTitle}>Todo list</div>
            <div className={s.button}><a>Add</a></div>
        </div>

        {todos.map(t => {
            if (t.id > (props.activePage - 1) * todosCount && t.id <= props.activePage * todosCount) {
                return <div key={t.id}>
                    <div className={s.checkbox}>
                        <input id={t.id} className={s.checkbox_input} type="checkbox" onClick={(e) => {toggleTodos(t.id)}} />
                        <label className={t.completed ? [s.checkbox_label, s.active].join(' ') : s.checkbox_label} htmlFor={t.id}>
                                <div className={s.todoTitle}>{t.title}</div>
                        </label>
                        {props.descriptions.map(des => {
                            if (des.todoId === t.id) {
                                return <div className={s.todoDescription}>{des.title}</div>
                            }
                        })}
                    </div>
                </div>
            }
        }
        )}
    </div>
</>}
//

// no-optimized paginator
//<div>
// {pages.map(m => {
//   return <span style={{marginLeft: 20 + 'px'}} onClick={() => props.changeActivePage(m)}>{m}</span>
//  })}
//</div>