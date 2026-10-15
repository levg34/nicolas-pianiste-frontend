import axios from 'axios'
import { BACKEND_URL } from '~/ts/constants.server'
import { adjustImgDisplayUrl } from '~/ts/utils.server'

interface CarouselBase {
    url: string
    title?: string
    description?: string
    _id: string
}

interface CarouselMainSlide extends CarouselBase {
    main: true
    index?: never
}

interface CarouselSlide extends CarouselBase {
    index: number
    main?: never
}

export type CarouselImgType = CarouselMainSlide | CarouselSlide

export async function getCarouselImg() {
    try {
        const response = await axios.get<CarouselImgType[]>(BACKEND_URL + '/carousel')
        return response.data.map((ce) => ({
            ...ce,
            url: adjustImgDisplayUrl(ce.url)
        }))
    } catch (err) {
        console.error(err)
        return []
    }
}
