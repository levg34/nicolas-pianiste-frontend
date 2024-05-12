import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'

export type LinkType = {
    type: 'personal' | 'media' | 'other'
    url: string
    name: string
}

export async function getLinks() {
    try {
        const response = await axios.get<LinkType[]>(BACKEND_URL + '/links')
        const personalLinks: LinkType[] = []
        const mediaLinks: LinkType[] = []
        const otherLinks: LinkType[] = []

        if (response && response.data && Array.isArray(response.data)) {
            response.data.forEach((link) => {
                switch (link.type) {
                    case 'personal':
                        personalLinks.push(link)
                        break
                    case 'media':
                        mediaLinks.push(link)
                        break
                    default:
                        otherLinks.push(link)
                }
            })
        }

        return { personalLinks, mediaLinks, otherLinks }
    } catch (err) {
        console.error(err)
        return { personalLinks: [], mediaLinks: [], otherLinks: [] }
    }
}
