import { useEffect, useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { useCompletion } from 'ai/react'
import React from 'react'

interface Message {
    content: string
    dateCreated: Date
    type: 'sender' | 'receiver'
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const {
        completion,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
        setInput,
    } = useCompletion({
        api: '/api/completion/route',
        onFinish: (prompt, completion) => {
            setInput('')
            const promptMessage: Message = {
                content: prompt,
                dateCreated: new Date(),
                type: 'sender',
            }
            messages.push(promptMessage)
            setMessages(messages)
            const message: Message = {
                content: completion,
                dateCreated: new Date(),
                type: 'receiver',
            }
            messages.push(message)
            setMessages(messages)
        },
        initialInput: '',
    })

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                {messages.map((message, index) => (
                    <Grid
                        key={`message-${index}`}
                        sx={{
                            display: 'flex',
                            backgroundColor:
                                message.type === 'sender'
                                    ? '#e0e0e0'
                                    : '#f5f5f5',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '4px',
                            alignSelf:
                                message.type === 'sender'
                                    ? 'flex-end'
                                    : 'flex-start',
                            width: 'fit-content',
                            maxWidth: '80%',
                            marginLeft:
                                message.type === 'sender' ? 'auto' : '0',
                            marginRight:
                                message.type === 'sender' ? '0' : 'auto',
                        }}
                    >
                        {message.content}
                    </Grid>
                ))}
                {messages.length === 0 && <Grid sx={{ height: '100%' }} />}
            </Box>
            <Box sx={{ position: 'sticky', bottom: 0, padding: '16px' }}>
                {isLoading && <>{completion}</>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        value={input}
                        placeholder="Find top three cuisines..."
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </form>
            </Box>
        </Box>
    )
}

export default ChatBox
