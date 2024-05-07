type Props = {
    paragraphs: string[]
    title: string
    subtitle: string
}

const Bio = ({ title, subtitle, paragraphs }: Props) => {
    return (
        <div id="band" className="container text-center">
            <h3>{title}</h3>
            <h2>
                <em>{subtitle}</em>
            </h2>
            {paragraphs.map((p) => (
                <p key={p}>{p}</p>
            ))}
        </div>
    )
}

export default Bio
