import { Concert } from '~/model/tour.server'

type Props = {
    concerts: Concert[]
}

const Concerts = () => {
    const occList: any[] = []
    const concertList: any[] = []
    const concertIsOn = () => true
    const occIsOn = () => true

    function state(occ: any): 'on' | 'off' | 'cancel' {
        throw new Error('Function not implemented.')
    }

    return (
        <div id="tour">
            <div className="container">
                <h3 className="text-center">DATES DES CONCERTS</h3>
                <p className="text-center">
                    Il va jouer de la musique.
                    <br /> Achetez vos tickets!
                </p>

                <div className="row text-center">
                    {occList.filter(occIsOn).map((concert) => (
                        <div key={concert.id} className="col-sm-4">
                            <div className="thumbnail">
                                <a href="#{concert.id}">
                                    {' '}
                                    <img src="{concert.img}" alt="{concert.name}" />
                                    <p>
                                        {concert.place ||
                                            (concert.city && (
                                                <strong>
                                                    {concert.place}, {concert.city}
                                                </strong>
                                            ))}
                                        <br /> <b className="title">{concert.name}</b>
                                    </p>
                                    {!concert.noOccs && (
                                        <p>
                                            {concert.date /*| date:'EEE dd MMMM yyyy'*/} à {concert.time}
                                        </p>
                                    )}
                                </a>{' '}
                                {concert.irUrl && !concert.cancel && (
                                    <a target="_blank" href="{concert.irUrl}" className="btn">
                                        Info réservation
                                    </a>
                                )}
                                {concert.cancel && <span className="label label-danger">Annulé</span>}
                                {concert.noOccs && <span className="label label-info">Prévu</span>}
                            </div>
                        </div>
                    ))}
                </div>

                {concertList.filter(concertIsOn).length && <h4>A venir</h4>}
                {concertList.filter(concertIsOn).map((concert) => (
                    <span key={concert.id} className="concertInfo">
                        <p id="{concert.id}_avenir">
                            <b>{concert.name}</b>
                            {concert.info && (
                                <span>
                                    <br />
                                    <span style={{ fontStyle: 'italic', marginLeft: '15px' }}>{concert.info}</span>
                                </span>
                            )}
                            {concert.details.artists.map((artist: any) => (
                                <span key={artist.name}>
                                    <br />
                                    {artist.name}, {artist.instrument}
                                </span>
                            ))}
                        </p>
                        <ul>
                            {concert.details.pieces.map((piece: any) => (
                                <li key={piece.title}>
                                    {piece.composer} – {piece.title}
                                </li>
                            ))}
                        </ul>
                        {!concert.noOccs && (
                            <span>
                                <ul className="list-group">
                                    {concert.occs.map((occ, i) => (
                                        <li key={i} className="list-group-item">
                                            {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                            {state(occ) === 'on' && (
                                                <span>
                                                    <span className="label label-success">À venir</span>{' '}
                                                    <span ng-show="occ.irUrl" className="label ">
                                                        <a target="_blank" href="{occ.irUrl}">
                                                            infos réservation
                                                        </a>
                                                    </span>{' '}
                                                    <span className="label " ng-if="occ.info">
                                                        <a
                                                            href=""
                                                            data-placement="bottom"
                                                            data-toggle="popover"
                                                            data-trigger="hover"
                                                            title="{occ.date /*| date:'dd/MM/yyyy'*/}"
                                                            data-content="{occ.info}"
                                                        >
                                                            plus d'info...
                                                        </a>
                                                    </span>
                                                </span>
                                            )}
                                            {state(occ) == 'off' && (
                                                <span>
                                                    <span className="label label-warning">Terminé</span>
                                                    {occ.photosUrl && (
                                                        <span className="label ">
                                                            <a target="_blank" href="{occ.photosUrl}">
                                                                photos
                                                            </a>
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {state(occ) == 'cancel' && (
                                                <span className="label label-danger">Annulé</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </span>
                        )}
                        {concert.noOccs && (
                            <span>
                                <span className="label label-info">Prévu</span>
                            </span>
                        )}
                    </span>
                ))}

                <h4>Solo</h4>
                <span
                    className="concertInfo"
                    ng-repeat="concert in concertList | orderBy:'-' | filter: {type:  'Solo'}"
                >
                    <p id="{concert.id}">
                        <b>{concert.name}</b>
                        <span ng-show="concert.info">
                            <br />
                            <span style="font-style:italic; margin-left: 15px;">{concert.info}</span>
                        </span>
                        <span ng-repeat="artist in concert.details.artists">
                            <br />
                            {artist.name}, {artist.instrument}
                        </span>
                    </p>
                    <ul>
                        <li ng-repeat="piece in concert.details.pieces">
                            {piece.composer} – {piece.title}
                        </li>
                    </ul>
                    <span ng-if="!concert.noOccs">
                        <ul className="list-group">
                            <li ng-repeat="occ in concert.occs" className="list-group-item">
                                {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                <span ng-show="state(occ)=='on'">
                                    <span className="label label-success">À venir</span>{' '}
                                    <span ng-show="occ.irUrl" className="label ">
                                        <a target="_blank" href="{occ.irUrl}">
                                            infos réservation
                                        </a>
                                    </span>{' '}
                                    <span className="label " ng-if="occ.info">
                                        <a
                                            href=""
                                            data-placement="bottom"
                                            data-toggle="popover"
                                            data-trigger="hover"
                                            title="{occ.date | date:'dd/MM/yyyy'}"
                                            data-content="{occ.info}"
                                        >
                                            plus d'info...
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='off'">
                                    <span ng-show="state(occ)=='off'" className="label label-warning">
                                        Terminé
                                    </span>
                                    <span ng-if="occ.photosUrl" className="label ">
                                        <a target="_blank" href="{occ.photosUrl}">
                                            photos
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='cancel'" className="label label-danger">
                                    Annulé
                                </span>
                            </li>
                        </ul>
                    </span>
                    <span ng-if="concert.noOccs">
                        <span ng-if="concert.noOccs" className="label label-info">
                            Prévu
                        </span>
                    </span>
                </span>

                <p>
                    <b>Au fil de l’eau</b>
                </p>
                <ul>
                    <li>T. Takemitsu – Rain Tree Sketch II</li>
                    <li>L. Berio – Wasserklavier</li>
                    <li>M. Ravel – Ondine, Une barque sur l’océan, Jeux d’eau</li>
                    <li>C. Debussy – Reflets dans l’eau, Poissons d’or</li>
                    <li>A. Scriabine – Sonate n°2 (Sonate-Fantaisie)</li>
                    <li>C. Scott – Lotus Land op.47 n°1</li>
                    <li>F. Liszt – Au bord d’une source</li>
                    <li>J.-P. Rameau – Les tourbillons</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        07/09/2017 : Petit Palais, Paris <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        28/08/2017 : Château Malmont, Villeneuvette <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p>
                    <b>Contraintes libératrices</b>
                </p>
                <ul>
                    <li>J.-S. Bach – Chromatische Fantasie und Fuge</li>
                    <li>R. Schumann – Carnaval op.9</li>
                    <li>E. Satie – Avant-dernières pensées</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        21/12/2016 : Hôtel Magnol, Montpellier <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p>
                    <b>Concert de piano</b>
                </p>
                <ul>
                    <li>A. Scriabine – Sonate n°2 (Sonate-Fantaisie</li>
                    <li>S. Rachmaninov – Prélude op.23 n°6, Études-tableaux op.33 n°2 et 6</li>
                    <li>M. Ravel – Valses nobles et sentimentales</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        10/10/2015 : Château Saint-Martin de la Garrigue, Montagnac{' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <h4 id="ephemere">Duo/Trio Éphémère</h4>

                <p>
                    <b>Trio avec Charlotte Saluste-Bridoux et Frankie Carr</b>
                </p>

                <span
                    className="concertInfo"
                    ng-repeat="concert in concertList | orderBy:'-' | filter: {type:  'Trio éphémère'}"
                >
                    <p id="{concert.id}">
                        <b>{concert.name}</b>
                        <span ng-show="concert.info">
                            <br />
                            <span style="font-style:italic; margin-left: 15px;">{concert.info}</span>
                        </span>
                        <span ng-repeat="artist in concert.details.artists">
                            <br />
                            {artist.name}, {artist.instrument}
                        </span>
                    </p>
                    <ul>
                        <li ng-repeat="piece in concert.details.pieces">
                            {piece.composer} – {piece.title}
                        </li>
                    </ul>
                    <span ng-if="!concert.noOccs">
                        <ul className="list-group">
                            <li ng-repeat="occ in concert.occs" className="list-group-item">
                                {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                <span ng-show="state(occ)=='on'">
                                    <span className="label label-success">À venir</span>{' '}
                                    <span ng-show="occ.irUrl" className="label ">
                                        <a target="_blank" href="{occ.irUrl}">
                                            infos réservation
                                        </a>
                                    </span>{' '}
                                    <span className="label " ng-if="occ.info">
                                        <a
                                            href=""
                                            data-placement="bottom"
                                            data-toggle="popover"
                                            data-trigger="hover"
                                            title="{occ.date | date:'dd/MM/yyyy'}"
                                            data-content="{occ.info}"
                                        >
                                            plus d'info...
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='off'">
                                    <span ng-show="state(occ)=='off'" className="label label-warning">
                                        Terminé
                                    </span>
                                    <span ng-if="occ.photosUrl" className="label ">
                                        <a target="_blank" href="{occ.photosUrl}">
                                            photos
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='cancel'" className="label label-danger">
                                    Annulé
                                </span>
                            </li>
                        </ul>
                    </span>
                    <span ng-if="concert.noOccs">
                        <span ng-if="concert.noOccs" className="label label-info">
                            Prévu
                        </span>
                    </span>
                </span>

                <ul>
                    <li>Ravel - Trio</li>
                    <li>Schubert - Trio no.2 op.100, D.929</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        21/12/2017 : Chapelle des Jésuites, Carcassonne{' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p>
                    <b>Violon et piano avec Charlotte Saluste-Bridoux</b>
                </p>

                <span
                    className="concertInfo"
                    ng-repeat="concert in concertList | orderBy:'-' | filter: {type:  'Duo éphémère'}"
                >
                    <p id="{concert.id}">
                        <b>{concert.name}</b>
                        <span ng-show="concert.info">
                            <br />
                            <span style="font-style:italic; margin-left: 15px;">{concert.info}</span>
                        </span>
                        <span ng-repeat="artist in concert.details.artists">
                            <br />
                            {artist.name}, {artist.instrument}
                        </span>
                    </p>
                    <ul>
                        <li ng-repeat="piece in concert.details.pieces">
                            {piece.composer} – {piece.title}
                        </li>
                    </ul>
                    <span ng-if="!concert.noOccs">
                        <ul className="list-group">
                            <li ng-repeat="occ in concert.occs" className="list-group-item">
                                {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                <span ng-show="state(occ)=='on'">
                                    <span className="label label-success">À venir</span>{' '}
                                    <span ng-show="occ.irUrl" className="label ">
                                        <a target="_blank" href="{occ.irUrl}">
                                            infos réservation
                                        </a>
                                    </span>{' '}
                                    <span className="label " ng-if="occ.info">
                                        <a
                                            href=""
                                            data-placement="bottom"
                                            data-toggle="popover"
                                            data-trigger="hover"
                                            title="{occ.date | date:'dd/MM/yyyy'}"
                                            data-content="{occ.info}"
                                        >
                                            plus d'info...
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='off'">
                                    <span ng-show="state(occ)=='off'" className="label label-warning">
                                        Terminé
                                    </span>
                                    <span ng-if="occ.photosUrl" className="label ">
                                        <a target="_blank" href="{occ.photosUrl}">
                                            photos
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='cancel'" className="label label-danger">
                                    Annulé
                                </span>
                            </li>
                        </ul>
                    </span>
                    <span ng-if="concert.noOccs">
                        <span ng-if="concert.noOccs" className="label label-info">
                            Prévu
                        </span>
                    </span>
                </span>

                <ul>
                    <li>Beethoven – Sonate pour violon et piano no.3</li>
                    <li>Brahms – Sonate pour piano et violon no.3</li>
                    <li>Szymanowski – Mythes</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        02/02/2019 19h : Hôtel Magnol, Montpellier <span className="label label-danger">Annulé</span>
                    </li>
                </ul>

                <ul>
                    <li>Beethoven – Sonate no.10 op.96</li>
                    <li>Grieg – Sonate no.2 op.13</li>
                    <li>Ravel – Sonate en Sol</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        28/10/2017 : Hôtel Magnol, Montpellier <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        29/09/2017 : Château Rieutort, Saint-Pargoire{' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        23/08/2017 : Château Cicéron, Ribaute <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <ul>
                    <li>L.V. Beethoven – Sonate n°8 en sol majeur, op.30 n°3</li>
                    <li>R. Schumann – Fantasie en ut majeur, op.131</li>
                    <li>G. Enescu – Sonate n°3 en la mineur</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        09/08/2016 : Château Planères, Saint-Jean-Lasseille{' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <ul>
                    <li>Bach – Sonate pour violon et clavecin BWV 1018</li>
                    <li>Brahms – Sonate pour piano et violon no.3 op.108</li>
                    <li>Ravel – Sonate en sol</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        14/08/2015 : Château de Cassan, Roujan <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <h4>Musique vocale et spectacles</h4>

                <span
                    className="concertInfo"
                    ng-repeat="concert in concertList | orderBy:'-' | filter: {type:  'Musique vocale et spectacles'}"
                >
                    <p id="{concert.id}">
                        <b>{concert.name}</b>
                        <span ng-show="concert.info">
                            <br />
                            <span style="font-style:italic; margin-left: 15px;">{concert.info}</span>
                        </span>
                        <span ng-repeat="artist in concert.details.artists">
                            <br />
                            {artist.name}, {artist.instrument}
                        </span>
                    </p>
                    <ul>
                        <li ng-repeat="piece in concert.details.pieces">
                            {piece.composer} – {piece.title}
                        </li>
                    </ul>
                    <span ng-if="!concert.noOccs">
                        <ul className="list-group">
                            <li ng-repeat="occ in concert.occs" className="list-group-item">
                                {occ.date /*| date:'dd/MM/yyyy'*/} : {occ.place}, {occ.city}{' '}
                                <span ng-show="state(occ)=='on'">
                                    <span className="label label-success">À venir</span>{' '}
                                    <span ng-show="occ.irUrl" className="label ">
                                        <a target="_blank" href="{occ.irUrl}">
                                            infos réservation
                                        </a>
                                    </span>{' '}
                                    <span className="label " ng-if="occ.info">
                                        <a
                                            href=""
                                            data-placement="bottom"
                                            data-toggle="popover"
                                            data-trigger="hover"
                                            title="{occ.date | date:'dd/MM/yyyy'}"
                                            data-content="{occ.info}"
                                        >
                                            plus d'info...
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='off'">
                                    <span ng-show="state(occ)=='off'" className="label label-warning">
                                        Terminé
                                    </span>
                                    <span ng-if="occ.photosUrl" className="label ">
                                        <a target="_blank" href="{occ.photosUrl}">
                                            photos
                                        </a>
                                    </span>
                                </span>
                                <span ng-show="state(occ)=='cancel'" className="label label-danger">
                                    Annulé
                                </span>
                            </li>
                        </ul>
                    </span>
                    <span ng-if="concert.noOccs">
                        <span ng-if="concert.noOccs" className="label label-info">
                            Prévu
                        </span>
                    </span>
                </span>

                <p id="rchant">
                    <b>Récital de chant</b>
                    <br /> Solène Lorent et Adèle Clermont, soprani
                    <br /> Nicolas Dross, piano
                </p>
                <ul>
                    <li>Mélodies, airs d'opéra romantiques français et allemands</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        28/01/2019 à 19h : Paris (Conservatoire à rayonnement régional, salle Gabriel Fauré){' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p id="rossini">
                    <b>Concert Rossini</b>
                    <br /> Lalaïna Garreta, soprano
                    <br /> Nicolas Dross, piano et <br /> Masako Miyako, clarinettiste
                </p>
                <ul>
                    <li>Una voce poco fa, air extrait du Barbier de Séville de Rossini</li>
                    <li>La promessa, extrait des Soirées musicales de Rossini</li>
                    <li>La ricordanza, des 4 sonnets de Bellini</li>
                    <li>Quelques riens pour album de Rossini</li>
                    <li>Fantaisie pour clarinette de Rossini</li>
                    <li>Introduction, thème et variation pour clarinette de Rossini</li>
                    <li>Pot-pourri “Rossini à l'Opéra”</li>
                </ul>
                <ul className="list-group" id="winterreise">
                    <li className="list-group-item">
                        27/01/2019 à 17h : Rueil Malmaison (château de la petite Malmaison){' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p>
                    <b>Au salon d'Augusta Holmès</b>
                    <br />{' '}
                    <a
                        target="_blank"
                        href="http://www.agence-annealvarescorrea.com/artiste.cfm/33155-brigitte_fossey.html"
                    >
                        Brigitte Fossey
                    </a>
                    , comédienne
                    <br />{' '}
                    <a target="_blank" href="https://www.operamusica.com/artist/natacha-hummel/">
                        Natacha Hummel
                    </a>{' '}
                    , mezzo-soprano
                    <br />{' '}
                    <a target="_blank" href="https://www.operamusica.com/artist/lauriane-vidal/">
                        Lauriane Vidal
                    </a>
                    , soprano
                    <br /> Nicolas Dross, pianiste
                    <br />
                </p>
                <ul>
                    <li>Œuvres d’ A. Holmès, C. Saint-Saëns, J. Massenet, F. Liszt et C. Franck.</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        07/10/2018 : Salle Ravel, Levallois <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        16/03/2018 : Salon de l'Hôtel de Ville, Versailles{' '}
                        <span className="label label-warning">Terminé</span>
                    </li>
                </ul>

                <p>
                    <b>Les Femmes Compositrices</b>
                    <br />{' '}
                    <a target="_blank" href="https://www.operamusica.com/artist/natacha-hummel/">
                        Natacha Hummel
                    </a>{' '}
                    , mezzo-soprano
                    <br /> Anaëlle Gregorutti, soprano
                    <br /> Nicolas Dross et{' '}
                    <a target="_blank" href="http://www.isabelle-aboulker.com/">
                        Isabelle Aboulker
                    </a>{' '}
                    , piano
                    <br />
                </p>
                <ul>
                    <li>Clara Schumann, Pauline Viardot, Maria Malibran, Augusta Holmes et Isabelle Aboulker</li>
                </ul>
                <ul className="list-group" id="winterreise">
                    <li className="list-group-item">
                        21/11/2018 : MINES ParisTech <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        4/09/2017 : MINES ParisTech <span className="label label-warning">Terminé</span>
                    </li>
                </ul>
                <p>
                    <b>Winterreise</b>
                    <br />{' '}
                    <a
                        target="_blank"
                        href="https://www.maison-heinrich-heine.org/intervenant/myrianne-fleur-le-ralle-soprano"
                    >
                        Myrianne-Fleur Le Ralle
                    </a>
                    , soprano
                    <br />{' '}
                    <a target="_blank" href="https://www.maison-heinrich-heine.org/intervenant/j/alexandre-jamar-tenor">
                        Alexandre Jamar
                    </a>
                    , tenor
                    <br />{' '}
                    <a target="_blank" href="http://www.paletuviens.fr/halidou-nombre">
                        Halidou Nombre
                    </a>
                    , baryton
                    <br />{' '}
                    <a target="_blank" href="https://www.collectiflacapsule.com/paul-meynieux/">
                        Paul Meynieux
                    </a>
                    , mise en scène
                    <br />
                </p>
                <ul className="list-group">
                    <li className="list-group-item">
                        27/01/2018 : Maison Heinrich Heine, Paris <span className="label label-warning">Terminé</span>{' '}
                        <span className="label ">
                            <a
                                target="_blank"
                                href="https://www.maison-heinrich-heine.org/manifestations-culturelles/2018/janvier/die-winterreise#gallery-1-picture-0"
                            >
                                photos
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item">
                        20/01/2018 : Fondation Biermans-Lapôtre <span className="label label-warning">Terminé</span>
                    </li>
                    <li className="list-group-item">
                        11/01/2018 : Conservatoire Paul Dukas <span className="label label-warning">Terminé</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default () => (
    <div id="tour">
        <div className="container">
            <h3 className="text-center">DATES DES CONCERTS</h3>
            <p className="text-center">
                Il va jouer de la musique.
                <br /> Achetez vos tickets!
            </p>
        </div>
    </div>
)
