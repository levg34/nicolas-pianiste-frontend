import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'

interface StudData {
    title?: string
    awardsTitle?: string
    paragraph?: string
    award?: string
}

interface StudResponse {
    title: string
    awards: { title: string; all: string[] }
    paragraphs: string[]
}

export async function getStudies(): Promise<StudResponse> {
    try {
        const response = await axios.get<StudData[]>(BACKEND_URL + '/studies')
        const data = response.data

        if (!data) return { title: '', awards: { title: '', all: [] }, paragraphs: [] }

        const { title, awardsTitle } = data.find((e) => e.title) || { title: '', awardsTitle: '' }

        const paragraphs = data.filter((e) => e.paragraph).map((e) => e.paragraph || '')
        const allAwards = data.filter((e) => e.award).map((e) => e.award || '')

        return {
            title: title || '',
            awards: { title: awardsTitle || '', all: allAwards },
            paragraphs
        }
    } catch (err) {
        console.error(err)
        return {
            title: '',
            awards: { all: [], title: '' },
            paragraphs: []
        }
    }
}
