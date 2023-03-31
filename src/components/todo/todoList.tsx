import React from 'react'
import { observer } from 'mobx-react-lite'
import { List } from '@mui/material'
import TodoItem from './todoItem'
import todoViewModel, { Todo } from '@/models/TodoModel'

function TodoList() {
    const handleToggle = (todo: Todo) => {
        todoViewModel.toggleTodo(todo)
    }

    const handleDelete = (todo: Todo) => {
        todoViewModel.removeTodo(todo)
    }

    return (
        <List>
            {todoViewModel.todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            ))}
        </List>
    )
}

export default observer(TodoList)
