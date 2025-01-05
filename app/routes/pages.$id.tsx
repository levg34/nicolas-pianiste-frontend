import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData, useParams } from '@remix-run/react'
import { Breadcrumb, Carousel, Col, Container, Row, Spinner, Stack } from 'react-bootstrap'
import Element from './elements/Element'
import { prepareForDisplay } from './utils'

export interface PageData {
    headerImageUrl: string
    pageName: string
    data: Datum[]
    bgColor?: string
}

export interface Datum {
    text?: string[]
    image?: string
    video?: Video
}

export interface Video {
    url: string
    thumbUrl: string
}

export const loader: LoaderFunction = async ({ params }) => {
    const pageId = params.id
    const pageData = await fetch(`/api/pages/${pageId}/data`).then((res) => res.json())
    return json(pageData)
}

export default function Page() {
    const pageData = useLoaderData<PageData>()
    const params = useParams()

    function getFontColor() {
        const bgColor = pageData.bgColor
        if (!bgColor) return '#000000'
        const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
        const r = parseInt(color.substring(0, 2), 16)
        const g = parseInt(color.substring(2, 4), 16)
        const b = parseInt(color.substring(4, 6), 16)
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
    }

    const HOME_URL = process.env.VITE_HOME_URL ?? '/'

    return (
        <Stack style={{ backgroundColor: 'black' }}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <div
                        className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                        style={{ height: `${document.body?.clientWidth * (2 / 9)}px` }}
                    >
                        <img src={pageData.headerImageUrl} height="100%" width="100%" alt="Header" />
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container
                style={{
                    backgroundColor: pageData.bgColor ?? 'lightgrey',
                    color: getFontColor()
                }}
                className="mt-3 pt-2"
            >
                {prepareForDisplay(pageData.data ?? []).map((elements, index) => (
                    <React.Fragment key={index}>
                        <Row>
                            <Col sm>
                                <Element element={elements[0]} />
                            </Col>
                            <Col sm>{elements[1] && <Element element={elements[1]} />}</Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                ))}
                <Breadcrumb>
                    <Breadcrumb.Item href={HOME_URL}>Accueil</Breadcrumb.Item>
                    <Breadcrumb.Item active>{pageData.pageName}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </Stack>
    )
}
