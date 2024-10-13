import axios, { AxiosError } from 'axios'
import { FeedbackType } from '~/components/newsletter/NewsletterFeedback'
import { BACKEND_URL } from '~/ts/constants.server'

export type AlertType = {
    variant: 'success' | 'warning' | 'danger'
    message: string
}

export async function getSubscribersCount(): Promise<number> {
    try {
        const response = await axios.get(BACKEND_URL + '/newsletter/subscribers')
        return response.data.subscribers
    } catch (err) {
        console.error(err)
        return 0
    }
}

type SubscribeParamsType = {
    email: string
    checkbots?: string
}

export async function subscribe({ email, checkbots }: SubscribeParamsType): Promise<FeedbackType> {
    try {
        await axios.post(BACKEND_URL + '/newsletter', { email, checkbots })
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

export async function unsubscribe(email: string): Promise<AlertType> {
    try {
        const res = await axios.put(BACKEND_URL + '/unsubscribe/' + email)
        if (res.data && res.data.updated !== undefined) {
            if (res.data.updated > 0) {
                return {
                    variant: 'success',
                    message: 'Vous avez bien été désinscrit de la newsletter.'
                }
            } else {
                return {
                    variant: 'danger',
                    message: "Vous n'étiez pas inscrit à la newsletter."
                }
            }
        } else {
            return {
                variant: 'danger',
                message: "Une erreur s'est produite : veuillez réessayer."
            }
        }
    } catch (e) {
        return {
            variant: 'danger',
            message: "Une erreur s'est produite : veuillez réessayer."
        }
    }
}
