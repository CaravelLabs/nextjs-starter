import AppShell from '../modules/common/AppShell'
import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { TextConstants } from '../modules/common/TextConstants'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Index() {
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
            </Container>
        </AppShell>
    )
}

export default Index
