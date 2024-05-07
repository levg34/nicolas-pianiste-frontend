import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants'

export async function getBio() {
    try {
        const response = await axios.get(BACKEND_URL + '/biographie')
        if (!response || !response.data) {
            return { title: '', subtitle: '', paragraphs: [] }
        }
        const data = response.data
        const { title, subtitle } = data.find((e) => e.title)
        const paragraphs = data.filter((e) => e.paragraph).map((e) => e.paragraph)

        return { title, subtitle, paragraphs }
    } catch (error) {
        console.error(error)
        return { title: '', subtitle: '', paragraphs: [] }
    }
}
