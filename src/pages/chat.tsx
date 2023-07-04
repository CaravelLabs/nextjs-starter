import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography } from '@mui/material'
import { StoreContext } from '../modules/common/StoreProvider'
import ChatBox from '@/components/chat/ChatBox'

function Chat(): JSX.Element {
    const store = useContext(StoreContext)

    return (
        <AppShell>
            <Container style={{ marginTop: '40px' }}>
                <ChatBox />
            </Container>
        </AppShell>
    )
}

export default observer(Chat)
