import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'

export interface RepertoryData {
    title: string
    items: Item[]
}

export interface Item {
    title: string
    list: string[]
}

export async function getRepertory(): Promise<RepertoryData[]> {
    try {
        const response = await axios.get<RepertoryData[]>(BACKEND_URL + '/repertory')
        return response.data || []
    } catch (err) {
        console.error(err)
        return []
    }
}
