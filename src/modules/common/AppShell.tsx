import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Container, Toolbar, Box, makeStyles } from '@material-ui/core'
import { Menu, AccountCircle, Toc } from '@material-ui/icons'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import DehazeIcon from '@material-ui/icons/Dehaze'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'

function AppShell({ children }: { children?: React.ReactNode }): JSX.Element {
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
        <Box className={classes.root}>
            <AppBar position="relative" color="secondary">
                <Toolbar>
                    <Menu onClick={() => setopen(true)} color="primary">
                        <DehazeIcon />
                    </Menu>
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                <Drawer
                    className={classes.drawerstyle}
                    open={open}
                    onClose={() => setopen(false)}
                >
                    {list()}
                </Drawer>
                {children}
            </Container>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawerstyle: {
        width: '3000',
        marginTop: '100',
    },
    container: {
        paddingTop: theme.spacing(2),
    },
    listStyle: {
        width: 'auto',
        marginTop: '100',
    },
}))

export default AppShell
