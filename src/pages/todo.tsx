import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const Div = styled('div')(() => ({
    display: 'flex',
}))

export default function Todo(): JSX.Element {
    return (
        <form>
            <Div>
                <TextField
                    id="outlined-helperText"
                    label="Enter Task"
                    defaultValue="Type Here"
                    helperText="Some important text"
                    variant="outlined"
                />
                <Button>Submit</Button>
            </Div>
        </form>
    )
}
