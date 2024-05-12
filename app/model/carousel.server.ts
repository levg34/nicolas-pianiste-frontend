import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'
import { adjustDisplayUrl } from '~/ts/utils.server'

export type CarouselImgType = {
    active?: string
    url: string
    title?: string
    description?: string
    _id: string
    index?: string
}

export async function getCarouselImg() {
    try {
        const response = await axios.get<CarouselImgType[]>(BACKEND_URL + '/carousel')
        return response.data.map((ce) => ({
            ...ce,
            url: adjustDisplayUrl(ce.url)
        }))
    } catch (err) {
        console.error(err)
        return []
    }
}
