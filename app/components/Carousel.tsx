type CarouselImgType = {
    active: string
    url: string
    title: string
    description: string
}

const Carousel = () => {
    // carouselCtrl
    const carouselImg: CarouselImgType[] = []
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
                {carouselImg.map((img) => (
                    <li key={img.url} data-target="#myCarousel" data-slide-to="{$index}" className={img.active}></li>
                ))}
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
                {carouselImg.map((img) => (
                    <div key={img.url} className={`item ${img.active}`}>
                        <img src="{img.url}" alt="{img.url}" />
                        <div className="carousel-caption">
                            <h3>{img.title}</h3>
                            <p>{img.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                {' '}
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>{' '}
                <span className="sr-only">Previous</span>
            </a>{' '}
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                {' '}
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>{' '}
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
