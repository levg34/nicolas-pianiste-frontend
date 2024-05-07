import type { MetaFunction } from '@remix-run/node'
import { json, useLoaderData } from '@remix-run/react'
import Bio from '~/components/Bio'
import Carousel from '~/components/Carousel'
import Composition from '~/components/Composition'
import Concerts from '~/components/Concerts'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'
import Links from '~/components/Links'
import Music from '~/components/Music'
import Navbar from '~/components/Navbar'
import Newsletter from '~/components/Newletter'
import Repertoire from '~/components/Repertoire'
import Studies from '~/components/Studies'
import Videos from '~/components/Videos'
import { getCarouselImg } from '~/model/carousel.server'
import { getLinks } from '~/model/links.server'
import { getPages } from '~/model/pages.server'

export const meta: MetaFunction = () => {
    return [
        { title: 'Nicolas DROSS - Pianiste' },
        { name: 'description', content: 'Bienvenue sur le site de Nicolas DROSS, pianiste ! Fait main, et avec amour.' }
    ]
}

export const loader = async () => {
    return json({
        carouselImg: await getCarouselImg(),
        pages: await getPages(),
        links: await getLinks()
    })
}

export default function Index() {
    const { carouselImg, pages, links } = useLoaderData<typeof loader>()
    return (
        <div>
            <Navbar pages={pages} personalLinks={links.personalLinks} />
            <Carousel carouselImg={carouselImg} />
            <Bio />
            <Studies />
            <Concerts />
            <Repertoire />
            <Composition />
            <Videos />
            <Contact />
            <Newsletter />
            <Links mediaLinks={links.mediaLinks} personalLinks={links.personalLinks} otherLinks={links.otherLinks} />
            <Music />
            <Footer />
        </div>
    )
}
