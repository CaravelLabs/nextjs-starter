import { Container, Toolbar, AppBar, Typography } from '@material-ui/core'
import { Menu, AccountCircle, Toc } from '@material-ui/icons'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import { useRouter } from 'next/dist/client/router'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DehazeIcon from '@material-ui/icons/Dehaze'
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Index() {
    const classes = useStyles()
    const [open, setopen] = useState(false)
    const { push } = useRouter()
    const tab = ['', 'profile', 'todo']
    const list = () => (
        <div className={classes.listStyle}>
            <List>
                {['Hello User', 'Go to Profile', 'Test To Do List'].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => push(`/${tab[index]}`)}
                        >
                            <ListItemIcon>
                                {index === 0 ? (
                                    <PersonIcon />
                                ) : index === 1 ? (
                                    <AccountCircle />
                                ) : (
                                    <Toc />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
        </div>
    )

    return (
        <div className={classes.root}>
            <AppBar position="relative" color="secondary">
                <Toolbar>
                    <Menu onClick={() => setopen(true)}>
                        <DehazeIcon />
                    </Menu>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                <Drawer
                    className={classes.drawerstyle}
                    open={open}
                    onClose={() => setopen(false)}
                >
                    {list()}
                </Drawer>

                <Typography variant="h3" color="textPrimary" align="center">
                    Welcome to Next JS Project
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    An initiative by Caravel Labs
                </Typography>
            </Container>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        background: '#e3e3e3',
    },
    drawerstyle: {
        width: '3000',
        marginTop: '100',
    },
    listStyle: {
        width: 'auto',
        marginTop: '100',
    },
})

export default Index
