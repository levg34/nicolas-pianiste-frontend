/* eslint-disable react/no-unescaped-entities */
import UpcomingConcertsTiles from './concerts/UpcomingConcertsTiles'
import ConcertInformations from './concerts/ConcertInformations'
import SoloConcerts from './concerts/legacy/SoloConcerts'
import TrioConcerts from './concerts/legacy/TrioConcerts'
import DuoConcerts from './concerts/legacy/DuoConcerts'
import VocSpecConcerts from './concerts/legacy/VocSpecConcerts'
import { occIsOn, concertIsOn, state } from '~/ts/concert-utils'
import type { Occurrence, Concert } from '~/ts/concert-utils.server'

type Props = {
    occList: Occurrence[]
    concertList: Concert[]
}

const Concerts = ({ occList, concertList }: Props) => {
    const reverseConcertList = [...concertList].reverse()
    return (
        <div id="tour">
            <div className="container">
                <h3 className="text-center">DATES DES CONCERTS</h3>
                <p className="text-center">
                    Il va jouer de la musique.
                    <br /> Achetez vos tickets!
                </p>

                <UpcomingConcertsTiles occList={occList} occIsOn={occIsOn} />

                {!concertList.filter(concertIsOn).length && (
                    <p className="text-center">Pas de concerts à venir pour l'instant.</p>
                )}
                {concertList.filter(concertIsOn).length > 0 && <h4>A venir</h4>}
                {concertList.filter(concertIsOn).map((concert, ci) => (
                    <ConcertInformations key={ci} concert={concert} state={state} suffix="_avenir" />
                ))}

                <h4>Solo</h4>
                {reverseConcertList
                    .filter((c) => c.type === 'Solo')
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <SoloConcerts />

                <h4 id="ephemere">Duo/Trio Éphémère</h4>

                <p>
                    <b>Trio avec Charlotte Saluste-Bridoux et Frankie Carr</b>
                </p>

                {reverseConcertList
                    .filter((c) => c.type === 'Trio éphémère')
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <TrioConcerts />

                <p>
                    <b>Violon et piano avec Charlotte Saluste-Bridoux</b>
                </p>

                {reverseConcertList
                    .filter((c) => c.type === 'Duo éphémère')
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <DuoConcerts />

                <h4>Musique vocale et spectacles</h4>

                {reverseConcertList
                    .filter((c) => c.type === 'Musique vocale et spectacles')
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <VocSpecConcerts />
            </div>
        </div>
    )
}

export default Concerts
