import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export default function Todo(): JSX.Element {
    const classes = useStyles()

    return (
        <form className={classes.root}>
            <div>
                <TextField
                    id="outlined-helperText"
                    label="Enter Task"
                    defaultValue="Type Here"
                    helperText="Some important text"
                    variant="outlined"
                />
                <Button>Submit</Button>
            </div>
        </form>
    )
}
