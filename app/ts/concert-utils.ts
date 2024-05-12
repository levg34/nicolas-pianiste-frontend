import type { Occurrence, OccurenceType, Concert } from './concert-utils.server'

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
    return concert.occs.some(occIsOn)
}

export function occIsOn(occ: Occurrence): boolean {
    return state(occ) === 'on'
}
