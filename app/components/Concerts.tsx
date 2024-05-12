import UpcomingConcertsTiles from './concerts/UpcomingConcertsTiles'
import ConcertInformations from './concerts/ConcertInformations'
import SoloConcerts from './concerts/legacy/SoloConcerts'
import TrioConcerts from './concerts/legacy/TrioConcerts'
import DuoConcerts from './concerts/legacy/DuoConcerts'
import VocSpecConcerts from './concerts/legacy/VocSpecConcerts'

type Props = {
    occList: any[]
    concertList: any[]
}

const Concerts = ({ occList, concertList }: Props) => {
    const concertIsOn = () => true
    const occIsOn = () => true

    function state(occ: any): 'on' | 'off' | 'cancel' {
        throw new Error('Function not implemented.')
    }

    return (
        <div id="tour">
            <div className="container">
                <h3 className="text-center">DATES DES CONCERTS</h3>
                <p className="text-center">
                    Il va jouer de la musique.
                    <br /> Achetez vos tickets!
                </p>

                <UpcomingConcertsTiles occList={occList} occIsOn={occIsOn} />

                {concertList.filter(concertIsOn).length && <h4>A venir</h4>}
                {concertList.filter(concertIsOn).map((concert, ci) => (
                    <ConcertInformations key={ci} concert={concert} state={state} suffix="_avenir" />
                ))}

                <h4>Solo</h4>
                {concertList
                    .filter((c) => "| orderBy:'-' | filter: {type:  'Solo'}")
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <SoloConcerts />

                <h4 id="ephemere">Duo/Trio Éphémère</h4>

                <p>
                    <b>Trio avec Charlotte Saluste-Bridoux et Frankie Carr</b>
                </p>

                {concertList
                    .filter((c) => "| orderBy:'-' | filter: {type:  'Trio éphémère'}")
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <TrioConcerts />

                <p>
                    <b>Violon et piano avec Charlotte Saluste-Bridoux</b>
                </p>

                {concertList
                    .filter((c) => "| orderBy:'-' | filter: {type:  'Duo éphémère'}")
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <DuoConcerts />

                <h4>Musique vocale et spectacles</h4>

                {concertList
                    .filter((c) => "| orderBy:'-' | filter: {type:  'Musique vocale et spectacles'}")
                    .map((concert, ci) => (
                        <ConcertInformations key={ci} concert={concert} state={state} />
                    ))}

                <VocSpecConcerts />
            </div>
        </div>
    )
}

export default Concerts
