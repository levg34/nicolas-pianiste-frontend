const Studies = () => {
    // studCtrl
    const title = 'Titre'
    const paragraphs: string[] = []
    const awards = {
        title: 'Awards',
        all: ['ze award']
    }
    return (
        <div id="studies" className="container text-center bg-1">
            <h3>{title}</h3>
            {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
            <p style={{ textAlign: 'left' }}>
                <b>{awards.title}</b>
            </p>
            <p>
                <ul style={{ textAlign: 'left' }}>
                    {awards.all.map((award, i) => (
                        <li key={i}>{award}</li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default Studies
