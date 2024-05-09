import ConcertInformations from './concerts/ConcertInformations'

type Props = {
    concertList: any[]
}

const Composition = ({ concertList }: Props) => {
    // // Mock data
    // const [concertList, setConcertList] = useState([
    //     {
    //         id: '1',
    //         name: 'Concert Name',
    //         info: 'Additional concert information',
    //         details: {
    //             artists: [
    //                 { name: 'Artist Name', instrument: 'Instrument' }
    //                 // ... more artists
    //             ],
    //             pieces: [
    //                 { composer: 'Composer Name', title: 'Piece Title' }
    //                 // ... more pieces
    //             ]
    //         },
    //         occs: [
    //             {
    //                 date: new Date(),
    //                 place: 'Concert Hall',
    //                 city: 'City',
    //                 state: 'on',
    //                 irUrl: 'http://reservation.info',
    //                 info: 'More info',
    //                 photosUrl: 'http://photos.url'
    //             }
    //             // ... more occurrences
    //         ],
    //         noOccs: false
    //     }
    //     // ... more concerts
    // ])

    // useEffect(() => {
    //     // Fetch data from the backend
    //     const loadData = async () => {
    //         try {
    //             const response = await axios.get(BACKEND_URL + '/concerts')
    //             const raw = response.data
    //             const processedConcerts = raw
    //                 .filter((c) => c.name)
    //                 .map((concert) => {
    //                     concert.id = concert._id
    //                     concert.occs = raw.filter((o) => o.concertId === concert._id)
    //                     if (concert.occs.length === 0) {
    //                         concert.noOccs = true
    //                         concert.occs = [{ date: '2099-12-31', time: '23:59' }]
    //                     }
    //                     return concert
    //                 })

    //             // Sort occurrences for each concert
    //             processedConcerts.forEach((concert) => {
    //                 concert.occs.sort((a, b) => new Date(a.date) - new Date(b.date) || a.time.localeCompare(b.time))
    //             })

    //             // Sort concerts by the first occurrence
    //             processedConcerts.sort(
    //                 (a, b) =>
    //                     new Date(a.occs[0].date) - new Date(b.occs[0].date) ||
    //                     a.occs[0].time.localeCompare(b.occs[0].time)
    //             )

    //             setConcertList(processedConcerts)
    //         } catch (error) {
    //             console.error('Error fetching data: ', error)
    //         }
    //     }

    //     loadData()
    // }, [])

    // Function to format date
    const formatDate = (date: Date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    // Function to determine the state of the occurrence
    const determineState = (occ: {
        cancel?: boolean
        date: Date
        place?: string
        city?: string
        state?: string
        irUrl?: string
        info?: string
        photosUrl?: string
    }) => {
        if (occ.cancel) {
            return 'cancel'
        } else if (new Date(occ.date).getTime() >= new Date().setHours(0, 0, 0, 0)) {
            return 'on'
        } else {
            return 'off'
        }
    }

    return (
        <div id="compos" className="container">
            <h3 className="text-center">COMPOSITION</h3>
            {concertList.map((concert) => (
                <ConcertInformations key={concert.id} concert={concert} state={determineState} />
            ))}
        </div>
    )
}

export default Composition
