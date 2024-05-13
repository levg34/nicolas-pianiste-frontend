/* eslint-disable react/no-unescaped-entities */
import Container from '../bootstrap/Container'

export default function ServerError() {
    return (
        <Container>
            <div className="well well-lg">
                <h1>Erreur serveur !</h1>
                <p>
                    Une erreur s'est produite côté serveur. Pour revenir à la page d'accueil, cliquer{' '}
                    <a href="/">ici</a>, ou sur le bouton ci-dessous.
                </p>
                <p>
                    <a className="btn btn-primary" href="/" role="button">
                        Revenir à l'accueil
                    </a>
                </p>
            </div>
        </Container>
    )
}
