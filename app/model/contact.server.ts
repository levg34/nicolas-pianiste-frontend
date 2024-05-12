import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'

interface MessagePayload {
    name: string
    email: string
    message: string
}

export interface SendMessageResponse {
    success: boolean
    error: string | null
}

interface GetNbMessagesResponse {
    nbMessages: number
}

export async function sendMessage(payload: MessagePayload): Promise<SendMessageResponse> {
    try {
        await axios.post(BACKEND_URL + '/message', payload)
        return { success: true, error: null }
    } catch (err) {
        return { success: false, error: err.response?.data || err.message }
    }
}

export async function getNbMessages(): Promise<GetNbMessagesResponse> {
    try {
        const response = await axios.get<{ messages: number }>(BACKEND_URL + '/messages/count')
        return { nbMessages: response.data.messages }
    } catch (err) {
        console.error(err)
        return { nbMessages: 0 }
    }
}
