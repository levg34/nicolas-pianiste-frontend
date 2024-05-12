import { state } from '~/ts/concert-utils'
import ConcertInformations from './concerts/ConcertInformations'
import { Concert } from '~/ts/concert-utils.server'

type Props = {
    concertList: Concert[]
}

const Composition = ({ concertList }: Props) => {
    const reverseConcertList = [...concertList].reverse()
    return (
        <div id="compos" className="container">
            <h3 className="text-center">COMPOSITION</h3>
            {reverseConcertList
                .filter((c) => c.type === 'Composition')
                .map((concert) => (
                    <ConcertInformations key={concert.id} concert={concert} state={state} />
                ))}
        </div>
    )
}

export default Composition
