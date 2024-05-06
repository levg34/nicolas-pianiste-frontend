const Repertoire = () => {
    // repertoryCtrl

    const repertory = [
        {
            title: 'Classical Composers',
            items: [
                {
                    title: 'Baroque',
                    list: ['J.S. Bach', 'G.F. Handel', 'A. Vivaldi']
                },
                {
                    title: 'Classical Period',
                    list: ['W.A. Mozart', 'L. van Beethoven', 'F.J. Haydn']
                }
            ]
        },
        {
            title: 'Modern Bands',
            items: [
                {
                    title: 'Rock',
                    list: ['The Beatles', 'Led Zeppelin', 'Pink Floyd']
                },
                {
                    title: 'Pop',
                    list: ['The Weeknd', 'Dua Lipa', 'Harry Styles']
                }
            ]
        }
    ]

    return (
        <div id="repertory" className="container bg-1">
            <h3 className="text-center">RÉPERTOIRE</h3>

            {repertory.map((group) => (
                <div key={group.title}>
                    <h4>{group.title}</h4>
                    {group.items.map((item) => (
                        <div key={item.title}>
                            {item.title && (
                                <p>
                                    <b>{item.title}</b>
                                </p>
                            )}
                            <ul>
                                {item.list.map((el) => (
                                    <li key={el}>{el}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Repertoire
