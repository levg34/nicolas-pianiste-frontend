import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants'

export async function getSubscribersCount(): Promise<number> {
    try {
        const response = await axios.get(BACKEND_URL + '/newsletter/subscribers')
        return response.data.subscribers
    } catch (err) {
        console.error(err)
        return 0
    }
}
