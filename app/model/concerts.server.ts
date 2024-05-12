// import { BACKEND_URL } from '~/ts/constants.server'

import { Concert, Occurrence } from '~/ts/concert-utils'

export async function getConcerts(): Promise<{ concertList: Concert[]; occList: Occurrence[] }> {
    return {
        concertList: [
            {
                id: '1',
                name: 'Concert Name',
                info: 'Additional concert information',
                details: {
                    artists: [
                        { name: 'Artist Name', instrument: 'Instrument' }
                        // ... more artists
                    ],
                    pieces: [
                        { composer: 'Composer Name', title: 'Piece Title' }
                        // ... more pieces
                    ]
                },
                occs: [
                    {
                        date: new Date().toDateString(),
                        place: 'Concert Hall',
                        city: 'City',
                        state: 'on',
                        irUrl: 'http://reservation.info',
                        info: 'More info',
                        photosUrl: 'http://photos.url',
                        concertId: 'okok',
                        time: '12:30'
                    }
                    // ... more occurrences
                ],
                noOccs: false,
                type: 'Solo'
            }
            // ... more concerts
        ],
        occList: []
    }
}
