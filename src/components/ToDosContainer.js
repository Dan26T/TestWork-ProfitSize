import React from 'react'
import {ToDoList} from './ToDoList'
import {connect} from 'react-redux';
import {changeActivePageAC, getTodos, updateTodo} from '../store/todosReducer'
import {compose} from "redux";




class ToDosContainer extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return <>
            <ToDoList todos={this.props.todo} changeActivePage={this.props.changeActivePageAC} activePage={this.props.activePage}
                      updateTodo={this.props.updateTodo} descriptions={this.props.descriptions} />
            </>
    }
}


let mapStateToProps = (state)=> ({
    todo: state.todosPage.todos,
    descriptions: state.todosPage.descriptions,
    activePage: state.todosPage.activePage
    })

export default compose(
    connect(mapStateToProps, {getTodos, changeActivePageAC, updateTodo}),
)(ToDosContainer);