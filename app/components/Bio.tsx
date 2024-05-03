const Bio = () => {
    // bioCtrl
    const paragraphs: string[] = ['par1', 'par2']
    const title: string = 'Title'
    const subtitle = 'Subtitle'
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