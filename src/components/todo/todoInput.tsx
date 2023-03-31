import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Unstable_Grid2 as Grid } from '@mui/material'
import todoStore from '@/models/TodoModel'
import { observer } from 'mobx-react-lite'

function TodoInput(): JSX.Element {
    const [title, setTitle] = useState('')

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        todoStore.addTodo(title)
        setTitle('')
    }

    return (
        <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid xs={12}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid>
                            <TextField
                                label="Add Todo"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                variant="outlined"
                            />
                        </Grid>
                        <Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default observer(TodoInput)
