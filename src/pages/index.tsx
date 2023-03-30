import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography } from '@mui/material'
import { StoreContext } from '../modules/common/StoreProvider'
import { TextConstants } from '../modules/common/TextConstants'
function Index() {
    const store = useContext(StoreContext)

    return (
        <AppShell>
            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                <Typography variant="h3" color="textPrimary" align="center">
                    {TextConstants.Title}
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    An initiative by Caravel Labs
                </Typography>
                <Button
                    onClick={() => {
                        store?.successToast(
                            'This alert has been configured through Mobx!'
                        )
                    }}
                >
                    Show alert
                </Button>
            </Container>
        </AppShell>
    )
}

export default observer(Index)
