import React from 'react'
import { observer } from 'mobx-react-lite'
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material'
import { Unstable_Grid2 as Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Todo } from '@/models/TodoModel'

type TodoProps = {
    todo: Todo
    onToggle: (todo: Todo) => void
    onDelete: (todo: Todo) => void
}

function TodoItem({ todo, onToggle, onDelete }: TodoProps): JSX.Element {
    return (
        <Grid container>
            <Grid xs={12}>
                <ListItem onClick={() => onToggle(todo)}>
                    <Checkbox checked={todo?.completed} />
                    <ListItemText
                        primary={todo.title}
                        sx={{
                            textDecoration: todo?.completed
                                ? 'line-through'
                                : 'none',
                        }}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(todo)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Grid>
        </Grid>
    )
}

export default observer(TodoItem)
