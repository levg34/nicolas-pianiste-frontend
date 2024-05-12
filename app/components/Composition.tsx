import { type Concert, determineState } from '~/ts/concert-utils'
import ConcertInformations from './concerts/ConcertInformations'

type Props = {
    concertList: Concert[]
}

const Composition = ({ concertList }: Props) => {
    return (
        <div id="compos" className="container">
            <h3 className="text-center">COMPOSITION</h3>
            {concertList
                .filter((c) => c.type === 'Composition')
                .map((concert) => (
                    <ConcertInformations key={concert.id} concert={concert} state={determineState} />
                ))}
        </div>
    )
}

export default Composition
