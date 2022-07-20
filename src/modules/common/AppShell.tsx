import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Container, Toolbar, Box, styled } from '@mui/material'
import { Menu, AccountCircle, Toc } from '@mui/icons-material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'
import DehazeIcon from '@mui/icons-material/Dehaze'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'

function AppShell({ children }: { children?: React.ReactNode }): JSX.Element {
    const BoxStyled = styled(Box)(() => ({
        display: 'flex',
    }))

    const [open, setOpen] = useState(false)
    const { push } = useRouter()
    const tab = ['', 'profile', 'todo']
    const list = () => (
        <BoxStyled>
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
        </BoxStyled>
    )

    return (
        <>
            <AppBar position="relative" color="secondary">
                <Toolbar>
                    <Menu onClick={() => setOpen(true)} color="primary">
                        <DehazeIcon />
                    </Menu>
                </Toolbar>
            </AppBar>
            <Container>
                <Drawer open={open} onClose={() => setOpen(false)}>
                    {list()}
                </Drawer>
                {children}
            </Container>
        </>
    )
}

export default AppShell
