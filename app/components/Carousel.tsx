type CarouselImgType = {
    active?: string
    url: string
    title?: string
    description?: string
    _id: string
    index?: string
}

const Carousel = () => {
    // carouselCtrl
    const carouselImg: CarouselImgType[] = [
        {
            url: 'https://nicolasdross.fr/uploads/9ef7bfc25ab4b8893422ed97659f931a',
            active: 'active',
            _id: 'MBkF9YJQU7WKf9Qr'
        },
        {
            title: 'Belesta',
            url: 'https://nicolasdross.fr/img/banner/Nicolas piano Belesta 9x2.jpg',
            description: '2014',
            _id: '9xn9XSATYBU68CFQ',
            index: '1'
        },
        {
            title: 'Fontainebleau',
            url: 'https://nicolasdross.fr/img/banner/Fontainebleau 9x2.jpeg',
            description: '2016',
            _id: 'MtIml3cBe62HV9tW',
            index: '2'
        },
        {
            title: 'Petit palais',
            url: 'https://nicolasdross.fr/img/banner/Petit palais 2017 9x2.JPG',
            description: '2017',
            _id: '3DXCcXaEb0oj1n1e',
            index: '3'
        },
        {
            title: 'Maison Heinrich Heine',
            url: 'https://nicolasdross.fr/img/banner/Schubert 9x2.jpg',
            description: '2018',
            _id: 'lHSq8PGKk5svYQA4',
            index: '4'
        },
        {
            title: 'Tauriac',
            url: 'https://nicolasdross.fr/uploads/d3784b6cbc631442e3e0a4aa40451b5d',
            description: '2023',
            _id: 'HqWwIOx4zOgexBdS',
            index: '5'
        },
        {
            title: '',
            url: 'https://nicolasdross.fr/uploads/037ff0878f8b3abd545d5de98160eb28',
            description: '',
            _id: '9JIlkVzm0Nj6uot4',
            index: '6'
        },
        {
            title: '',
            url: 'https://nicolasdross.fr/uploads/41eb7849191572e1a742c253aee495b8',
            description: '',
            _id: 'jCf48bvnGuT1xdry',
            index: '7'
        },
        {
            title: '',
            url: 'https://nicolasdross.fr/uploads/1aea057cfa3e46cb498e32e33d52a58e',
            description: '',
            _id: '8qKriN4yviG1X33I',
            index: '8'
        }
    ]

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
                        <img src={img.url} alt={img.url} />
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
