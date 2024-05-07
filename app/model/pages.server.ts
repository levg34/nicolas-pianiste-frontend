import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants'

const PAGES_BASE_URL = 'https://pages.nicolasdross.fr'

export async function getPages() {
    try {
        const response = await axios.get(BACKEND_URL + '/pages')
        if (response && response.data && Array.isArray(response.data)) {
            return response.data.map((page) => ({
                ...page,
                url: PAGES_BASE_URL + '/' + page.url
            }))
        }
        return []
    } catch (err) {
        console.error(err)
        return []
    }
}
