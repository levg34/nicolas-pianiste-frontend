import { Occurrence } from '~/ts/concert-utils'

export default function UpcomingConcertsTiles({
    occList,
    occIsOn
}: {
    occList: Occurrence[]
    occIsOn: (occ: Occurrence) => boolean
}) {
    return (
        <div className="row text-center">
            {occList.filter(occIsOn).map((concert) => (
                <div key={concert.id} className="col-sm-4">
                    <div className="thumbnail">
                        <a href="#{concert.id}">
                            {' '}
                            <img src="{concert.img}" alt="{concert.name}" />
                            <p>
                                {concert.place ||
                                    (concert.city && (
                                        <strong>
                                            {concert.place}, {concert.city}
                                        </strong>
                                    ))}
                                <br /> <b className="title">{concert.name}</b>
                            </p>
                            {!concert.noOccs && (
                                <p>
                                    {concert.date /*| date:'EEE dd MMMM yyyy'*/} à {concert.time}
                                </p>
                            )}
                        </a>{' '}
                        {concert.irUrl && !concert.cancel && (
                            <a target="_blank" href="{concert.irUrl}" className="btn">
                                Info réservation
                            </a>
                        )}
                        {concert.cancel && <span className="label label-danger">Annulé</span>}
                        {concert.noOccs && <span className="label label-info">Prévu</span>}
                    </div>
                </div>
            ))}
        </div>
    )
}
