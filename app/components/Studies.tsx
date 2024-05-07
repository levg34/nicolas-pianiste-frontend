type Props = {
    title: string
    paragraphs: string[]
    awards: {
        title: string
        all: string[]
    }
}

const Studies = ({ title, paragraphs, awards }: Props) => {
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
