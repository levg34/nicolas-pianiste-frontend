import { IMG_URL } from './constants'

export function adjustImgDisplayUrl(url: string): string {
    if (!url) return ''
    if (url.startsWith('http')) return url
    return IMG_URL + (url.startsWith('/') ? '' : '/') + url
}
