import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants'

export interface VideoData {
    title: string
    subtitle: string
    description: string
    img: string
    alt: string
    url: string
    list: string[]
}

export async function getVideos(): Promise<VideoData[]> {
    try {
        const response = await axios.get<VideoData[]>(BACKEND_URL + '/videos')
        if (!response.data) throw new Error('No data received')

        return response.data.reverse()
    } catch (err) {
        console.error(err)
        return []
    }
}
