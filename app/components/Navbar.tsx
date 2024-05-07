/* eslint-disable jsx-a11y/anchor-is-valid */
type PageType = {
    url: string
    name: string
}

type LinkType = {
    url: string
    name: string
}

const Navbar = ({ pages, personalLinks }: { pages: PageType[]; personalLinks: LinkType[] }) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        Nicolas DROSS
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#music">
                                <b>
                                    <i
                                        style={{ color: 'orange', fontSize: '17px' }}
                                        className="glyphicon glyphicon-volume-up"
                                    ></i>
                                </b>
                            </a>
                        </li>
                        <li>
                            <a href="#myPage">ACCUEIL</a>
                        </li>
                        <li>
                            <a href="#band">BIOGRAPHIE</a>
                        </li>
                        <li>
                            <a href="#studies">ÉTUDES</a>
                        </li>
                        <li>
                            <a href="#tour">CONCERTS</a>
                        </li>
                        <li>
                            <a href="#repertory">RÉPERTOIRE</a>
                        </li>
                        <li className="dropdown">
                            {pages?.length > 0 && (
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    GROUPES <span className="caret"></span>
                                </a>
                            )}
                            <ul className="dropdown-menu">
                                {pages?.map((page) => (
                                    <li key={page.url}>
                                        <a href={page.url}>{page.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="#videos">VIDEOS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                LIENS <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                {personalLinks.map((pl) => (
                                    <li key={pl.url}>
                                        <a target="_blank" href={pl.url} rel="noreferrer">
                                            {pl.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a href="#links">Autres</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
