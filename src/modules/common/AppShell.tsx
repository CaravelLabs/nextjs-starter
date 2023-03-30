import React, { useContext, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { styled } from '@mui/material/styles'
import { Container, Toolbar, Box, Alert, Snackbar } from '@mui/material'
import { Menu, AccountCircle, Toc } from '@mui/icons-material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'
import DehazeIcon from '@mui/icons-material/Dehaze'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import { StoreContext } from './StoreProvider'
import { observer } from 'mobx-react-lite'

function AppShell({ children }: { children?: React.ReactNode }): JSX.Element {
    const store = useContext(StoreContext)
    const toast = store?.toast
    const BoxStyled = styled(Box)(() => ({
        display: 'flex',
    }))

    const [open, setOpen] = useState(false)
    const { push } = useRouter()
    const tab = ['', 'profile', 'todo']
    const list = () => (
        <BoxStyled>
            <List>
                {['Hello User', 'Go to Profile', 'Todo Sample'].map(
                    (text, index) => (
                        <ListItem
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
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={toast?.isOpen === true}
                    autoHideDuration={3000}
                    onClose={() => toast?.close()}
                >
                    <Alert
                        onClose={() => toast?.close()}
                        severity={toast?.severity}
                    >
                        {toast?.message}
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}

export default observer(AppShell)
