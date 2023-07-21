import { useState } from 'react'

interface Message {
    content: string
    dateCreated: string
    type: 'sender' | 'receiver'
}

interface UserMessages {
    senderMessages: Message[]
    receiverMessages: Message[]
}

const useUserMessages = (): UserMessages => {
    const [senderMessages, setSenderMessages] = useState<Message[]>([])
    const [receiverMessages, setReceiverMessages] = useState<Message[]>([])

    return { senderMessages, receiverMessages }
}

export default useUserMessages
