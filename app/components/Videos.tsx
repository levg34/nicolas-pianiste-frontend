const Videos = () => {
    // videosCtrl
    const videos = [
        {
            title: 'Découverte de la Nature',
            subtitle: 'La beauté de la Terre',
            description: 'Rejoignez-nous pour un voyage à travers les merveilles naturelles de notre planète.',
            img: 'nature.jpg',
            alt: 'Paysage naturel',
            url: 'https://example.com/video/nature',
            list: ['Paysages époustouflants', 'Faune sauvage', 'Flore exotique']
        },
        {
            title: "L'Art de la Cuisine",
            subtitle: 'Recettes et Techniques',
            description: 'Apprenez les secrets des chefs et transformez votre cuisine en un art culinaire.',
            img: 'cuisine.jpg',
            alt: 'Chef en cuisine',
            url: 'https://example.com/video/cuisine',
            list: ['Recettes innovantes', 'Techniques de chef', 'Présentation et décoration']
        },
        {
            title: "Les Mystères de l'Espace",
            subtitle: 'Au-delà de notre Galaxie',
            description: "Explorez l'univers et découvrez les mystères qui se cachent au-delà des étoiles.",
            img: 'espace.jpg',
            alt: 'Galaxie',
            url: 'https://example.com/video/espace',
            list: ['Constellations', 'Phénomènes cosmiques', 'Exploration spatiale']
        }
    ]

    return (
        <div id="videos" className="bg-1">
            <div className="container">
                <h3 className="text-center">Vidéos</h3>

                <div className="row text-center">
                    {videos.map((video) => (
                        <div key={video.title} className="col-sm-4">
                            <div className="thumbnail">
                                <a target="_blank" href={video.url} rel="noreferrer">
                                    <img src={video.img} alt={video.alt} />
                                    <p>
                                        <strong>{video.title}</strong>
                                        <br /> <b>{video.subtitle}</b>
                                    </p>
                                    <p>{video.description}</p>
                                    {video.list && video.list.length && (
                                        <ul style={{ textAlign: 'left' }}>
                                            {video.list.map((el) => (
                                                <li key={el}>{el}</li>
                                            ))}
                                        </ul>
                                    )}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Videos
