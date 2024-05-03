type LinkType = {
    url: string | undefined
    name: string
}

const Links = () => {
    // linkCtrl
    const personalLinks: LinkType[] = []
    const otherLinks: LinkType[] = []
    const mediaLinks: LinkType[] = []

    return (
        <div id="links" className="container bg-1">
            <h3 className="text-center">Liens</h3>
            {/* perso */}
            <h4>Liens personnels</h4>
            <ul>
                {personalLinks.map((pl) => (
                    <li key={pl.url}>
                        <a target="_blank" href={pl.url} rel="noreferrer">
                            {pl.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="row">
                {/* autres */}
                <div className="col-sm-6">
                    <h4>Liens autres</h4>
                    <ul>
                        {otherLinks.map((l) => (
                            <li key={l.url}>
                                <a target="_blank" href={l.url} rel="noreferrer">
                                    {l.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-6">
                    {/* presse */}
                    <h4>Presse</h4>
                    <ul>
                        {mediaLinks.map((ml) => (
                            <li key={ml.url}>
                                <a target="_blank" href={ml.url} rel="noreferrer">
                                    {ml.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Links
