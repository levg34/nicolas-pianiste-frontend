/* eslint-disable react/no-unescaped-entities */

import { Concert, OccurenceType, Occurrence } from '~/ts/concert-utils'

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ConcertInformations({
    concert,
    state,
    suffix
}: {
    concert: Concert
    state: (occ: Occurrence) => OccurenceType
    suffix?: string
}) {
    return (
        <span key={concert.id} className="concertInfo">
            <p id={concert.id + (suffix ? suffix : '')}>
                <b>{concert.name}</b>
                {concert.info && (
                    <span>
                        <br />
                        <span style={{ fontStyle: 'italic', marginLeft: '15px' }}>{concert.info}</span>
                    </span>
                )}
                {concert.details?.artists?.map((artist) => (
                    <span key={artist.name}>
                        <br />
                        {artist.name}, {artist.instrument}
                    </span>
                ))}
            </p>
            <ul>
                {concert.details?.pieces?.map((piece) => (
                    <li key={piece.title}>
                        {piece.composer} – {piece.title}
                    </li>
                ))}
            </ul>
            {!concert.noOccs && (
                <span>
                    <ul className="list-group">
                        {concert.occs.map((occ, i) => (
                            <li key={i} className="list-group-item">
                                {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                {state(occ) === 'on' && (
                                    <span>
                                        <span className="label label-success">À venir</span>{' '}
                                        {occ.irUrl && (
                                            <span className="label ">
                                                <a target="_blank" href={occ.irUrl} rel="noreferrer">
                                                    infos réservation
                                                </a>
                                            </span>
                                        )}{' '}
                                        {occ.info && (
                                            <span className="label ">
                                                <a
                                                    href=""
                                                    data-placement="bottom"
                                                    data-toggle="popover"
                                                    data-trigger="hover"
                                                    title={occ.date /*| date:'dd/MM/yyyy'*/}
                                                    data-content={occ.info}
                                                >
                                                    plus d'info...
                                                </a>
                                            </span>
                                        )}
                                    </span>
                                )}
                                {state(occ) == 'off' && (
                                    <span>
                                        <span className="label label-warning">Terminé</span>
                                        {occ.photosUrl && (
                                            <span className="label ">
                                                <a target="_blank" href={occ.photosUrl} rel="noreferrer">
                                                    photos
                                                </a>
                                            </span>
                                        )}
                                    </span>
                                )}
                                {state(occ) == 'cancel' && <span className="label label-danger">Annulé</span>}
                            </li>
                        ))}
                    </ul>
                </span>
            )}
            {concert.noOccs && (
                <span>
                    <span className="label label-info">Prévu</span>
                </span>
            )}
        </span>
    )
}
