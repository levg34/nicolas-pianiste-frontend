import { VideoData } from '~/model/videos.server'

type Props = { videos: VideoData[] }

const Videos = ({ videos }: Props) => {
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
                                    {video.list && video.list.length > 0 && (
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
