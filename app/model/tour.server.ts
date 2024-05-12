import { BACKEND_URL } from '~/ts/constants.server'

type WithId = {
    _id: string
}

export type Concert = {
    id: string
    name: string
    occs: Occurrence[]
    noOccs?: boolean
}

type Occurrence = {
    concertId: string
    date: string
    time: string
    cancel?: boolean
}

export async function getTour(): Promise<Concert[]> {
    const response = await fetch(BACKEND_URL + '/concerts')
    const rawData: (Concert & Occurrence & WithId)[] = await response.json()
    const concerts: Concert[] = []

    rawData
        .filter((c) => c.name)
        .forEach((concert) => {
            concert.id = concert._id
            concert.occs = rawData.filter((o) => o.concertId === concert._id)
            concerts.push(concert)
        })

    const enrichedConcerts = concerts.map((concert) => {
        if (concert.occs.length > 0) {
            return concert
        } else {
            return {
                ...concert,
                noOccs: true,
                occs: [{ date: '2099-12-31', time: '23:59' }]
            }
        }
    })

    enrichedConcerts.forEach((concert) => {
        concert.occs.sort((a, b) => (a.date > b.date ? 1 : a.date === b.date ? (a.time > b.time ? 1 : -1) : -1))
    })

    enrichedConcerts.sort((a, b) =>
        a.occs[0].date > b.occs[0].date
            ? 1
            : a.occs[0].date === b.occs[0].date
            ? a.occs[0].time > b.occs[0].time
                ? 1
                : -1
            : -1
    )

    return enrichedConcerts
}

function state(occ: Occurrence): string {
    if (occ.cancel) {
        return 'cancel'
    } else if (new Date(occ.date) >= new Date().setHours(0, 0, 0, 0)) {
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
