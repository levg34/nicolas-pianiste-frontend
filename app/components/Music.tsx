/* eslint-disable jsx-a11y/iframe-has-title */
const Music = () => {
    return (
        <div id="music" className="container">
            <iframe
                width="100%"
                height="300"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/575613921&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily:
                        'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: '100'
                }}
            >
                <a
                    href="https://soundcloud.com/nicolas-dross-587682986"
                    title="Nicolas Dross"
                    target="_blank"
                    style={{
                        color: '#cccccc',
                        textDecoration: 'none'
                    }}
                    rel="noreferrer"
                >
                    Nicolas Dross
                </a>{' '}
                ·{' '}
                <a
                    href="https://soundcloud.com/nicolas-dross-587682986/sets/piano"
                    title="Piano"
                    target="_blank"
                    style={{
                        color: '#cccccc',
                        textDecoration: 'none'
                    }}
                    rel="noreferrer"
                >
                    Piano
                </a>
            </div>
        </div>
    )
}

export default Music
