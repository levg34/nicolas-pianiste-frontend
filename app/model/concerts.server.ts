// import { BACKEND_URL } from '~/ts/constants.server'

import axios from 'axios'
import { Concert, Occurrence, concertsToOcc } from '~/ts/concert-utils.server'
import { BACKEND_URL } from '~/ts/constants.server'

export interface APIConcert {
    type?: Type
    name?: string
    img?: string
    details?: Details
    _id: string
    cancel?: boolean
    city?: string
    date?: Date
    irUrl?: string
    place?: string
    show?: boolean
    time?: string
    concertId?: string
    info?: string
    photosUrl?: string
}

export interface Details {
    artists?: Artist[]
    pieces?: Piece[]
}

export interface Artist {
    name: string
    instrument: string
}

export interface Piece {
    composer: string
    title: string
}

export type Type = 'Solo' | 'Musique vocale et spectacles' | 'Composition'

export async function getConcerts(): Promise<{ concertList: Concert[]; occList: Occurrence[] }> {
    try {
        const response = await axios.get<APIConcert[]>(BACKEND_URL + '/concerts')
        const raw = response.data
        let concertList = []
        raw.filter((c) => c.name).forEach((concert) => {
            concert.id = concert._id
            concert.occs = raw.filter((o) => o.concertId === concert._id)
            concertList.push(concert)
        })
        concertList = concertList.map((concert) => {
            if (concert.occs.length > 0) {
                return concert
            } else {
                return {
                    ...concert,
                    noOccs: true,
                    occs: [
                        {
                            date: '2099-12-31',
                            time: '23:59'
                        }
                    ]
                }
            }
        })
        // .map((c) => ({ ...c, img: adjustDisplayUrl(c.img) }))
        concertList.forEach((concert) => {
            concert.occs.sort((a, b) => (a.date > b.date ? 1 : a.date === b.date ? (a.time > b.time ? 1 : -1) : -1)) //.reverse()
        })
        concertList.sort((a, b) =>
            a.occs[0].date > b.occs[0].date
                ? 1
                : a.occs[0].date === b.occs[0].date
                ? a.occs[0].time > b.occs[0].time
                    ? 1
                    : -1
                : -1
        )
        // $('[data-toggle="popover"]').popover()

        const occList = concertsToOcc(concertList)

        return {
            concertList,
            occList
        }
    } catch (e) {
        console.error(e)
        return {
            concertList: [],
            occList: []
        }
    }
}
