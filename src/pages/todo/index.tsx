import { Container, Typography } from '@mui/material'
import { Unstable_Grid2 as Grid } from '@mui/material'
import TodoList from '@/components/todo/todoList'
import TodoInput from '@/components/todo/todoInput'

function TodoApp(): JSX.Element {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2} sx={{ margin: 2 }}>
                <Grid xs={12}>
                    <Typography variant="h4" component="h1" align="center">
                        Todo App
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ margin: 2 }}>
                <Grid xs={12}>
                    <TodoInput />
                    <TodoList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default TodoApp
