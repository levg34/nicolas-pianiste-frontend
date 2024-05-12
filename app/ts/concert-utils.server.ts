// type WithId = {
//     _id: string
// }

import { APIConcert } from '~/model/concerts.server'
import { adjustDisplayUrl } from './utils.server'

export type Concert = {
    type: ConcertType
    info: string
    details?: Partial<{
        artists: [{ name: string; instrument: string }]
        pieces: [{ composer: string; title: string }]
    }>
    id: string
    name: string
    occs: Occurrence[]
    noOccs?: boolean
}

export type Occurrence = {
    img: string | undefined
    id?: string
    name?: string
    noOccs?: boolean
    concertId: string
    date: string
    time: string
    cancel?: boolean
    place: string
    city: string
    state: OccurenceType
    irUrl?: string
    info?: string
    photosUrl?: string
}

export type OccurenceType = 'on' | 'off' | 'cancel'

export type ConcertType = 'Solo' | 'Composition' | 'Trio éphémère' | 'Duo éphémère' | 'Musique vocale et spectacles'

export function concertsToOcc(concertList: APIConcert[]): Occurrence[] {
    const res: Occurrence[] = []
    concertList.forEach(function (concert) {
        const occurences: Occurrence[] = []
        concert.occs.forEach(function (o) {
            const occurence = JSON.parse(JSON.stringify(concert))
            delete occurence.details
            delete occurence.occs
            Object.assign(occurence, o)
            occurences.push({ ...occurence, img: adjustDisplayUrl(occurence.img) })
        })
        res.push(occurences)
    })
    return res.flat() //[].concat.apply([], res)
}
