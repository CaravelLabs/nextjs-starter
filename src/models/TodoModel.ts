import { makeObservable, observable, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

export type Todo = {
    id: string
    title: string
    completed: boolean
}

export class TodoModel {
    todos: Array<Todo> = []

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            removeTodo: action,
            toggleTodo: action,
        })
    }

    addTodo = (title: string) => {
        this.todos.push({
            id: uuidv4(),
            title: title,
            completed: false,
        })
    }

    removeTodo = (todo: Todo) => {
        this.todos.splice(this.todos.indexOf(todo), 1)
    }

    toggleTodo = (todo: Todo) => {
        todo.completed = !todo.completed
    }
}

const todoViewModel = new TodoModel()

export default todoViewModel
