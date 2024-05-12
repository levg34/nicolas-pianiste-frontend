import { BACKEND_URL } from './constants.server'

export function adjustDisplayUrl(url: string): string {
    if (!url) return ''
    if (url.startsWith('http')) return url
    return BACKEND_URL + (url.startsWith('/') ? '' : '/') + url
}
