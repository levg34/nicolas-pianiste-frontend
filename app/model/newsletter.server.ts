import axios, { AxiosError } from 'axios'
import { FeedbackType } from '~/components/newsletter/NewsletterFeedback'
import { BACKEND_URL } from '~/ts/constants.server'

export async function getSubscribersCount(): Promise<number> {
    try {
        const response = await axios.get(BACKEND_URL + '/newsletter/subscribers')
        return response.data.subscribers
    } catch (err) {
        console.error(err)
        return 0
    }
}

export async function subscribe(email: string): Promise<FeedbackType> {
    try {
        await axios.post(BACKEND_URL + '/newsletter', { email })
        return {
            show: true,
            variant: 'success'
        }
    } catch (err) {
        console.error(err)
        const error = err as AxiosError

        return {
            show: true,
            variant: 'danger',
            error: error.response?.data ?? undefined
        }
    }
}
