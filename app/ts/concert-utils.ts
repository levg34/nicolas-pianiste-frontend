// type WithId = {
//     _id: string
// }

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

export function state(occ: Occurrence): OccurenceType {
    if (occ.cancel) {
        return 'cancel'
    } else if (new Date(occ.date) >= new Date(new Date().setHours(0, 0, 0, 0))) {
        return 'on'
    } else {
        return 'off'
    }
}

export function concertIsOn(concert: Concert): boolean {
    return concert.occs.some((occ) => state(occ) === 'on')
}

export function occIsOn(occ: Occurrence): boolean {
    return state(occ) === 'on'
}

export const determineState = (occ: Occurrence) => {
    if (occ.cancel) {
        return 'cancel'
    } else if (new Date(occ.date).getTime() >= new Date().setHours(0, 0, 0, 0)) {
        return 'on'
    } else {
        return 'off'
    }
}
