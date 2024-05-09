/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
    return (
        <footer className="text-center">
            <a className="up-arrow" href="#maison" data-toggle="tooltip" title="HAUT DE PAGE">
                {' '}
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <br /> <br />
            <p id="photocreds">
                Le crédit des photographies présentes sur ce site reviennent à : François Henry - Masterclass Cyril
                Huvé, Elisabeth Villefranche - Récital au Petit Palais, Hugues Tenenbaum - spectacle Au salon d'Augusta
                Holmès (Versailles), Joseph Kerr - Trio Vicente Hatria (Fontainebleau), Le Berry Républicain - Subdray,
                Bernard Dross.
            </p>
            <p>
                <a
                    target="_blank"
                    href="https://levg34.github.io"
                    data-toggle="tooltip"
                    title="Visitez mon site"
                    rel="noreferrer"
                >
                    Auteur du site internet : levg34
                </a>
            </p>
        </footer>
    )
}

export default Footer
