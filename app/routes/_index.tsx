import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node'
import { json, useLoaderData } from '@remix-run/react'
import Bio from '~/components/Bio'
import Carousel from '~/components/Carousel'
import Composition from '~/components/Composition'
import Concerts from '~/components/Concerts'
import Contact, { SEND_MESSAGE_ACTION } from '~/components/Contact'
import Footer from '~/components/Footer'
import Links from '~/components/Links'
import Music from '~/components/Music'
import Navbar from '~/components/Navbar'
import Newsletter, { SUBSCRIBE_ACTION } from '~/components/Newletter'
import Repertoire from '~/components/Repertoire'
import Studies from '~/components/Studies'
import Videos from '~/components/Videos'
import { getBio } from '~/model/bio.server'
import { getCarouselImg } from '~/model/carousel.server'
import { getNbMessages, sendMessage } from '~/model/contact.server'
import { getLinks } from '~/model/links.server'
import { getSubscribersCount, subscribe } from '~/model/newsletter.server'
import { getPages } from '~/model/pages.server'
import { getRepertory } from '~/model/repertory.server'
import { getStudies } from '~/model/studies.server'
import { getTour } from '~/model/tour.server'
import { getVideos } from '~/model/videos.server'
import { ACTION_STRING } from '~/ts/constants'

export const meta: MetaFunction = () => {
    return [
        { title: 'Nicolas DROSS - Pianiste' },
        { name: 'description', content: 'Bienvenue sur le site de Nicolas DROSS, pianiste ! Fait main, et avec amour.' }
    ]
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const action = formData.get(ACTION_STRING)
    if (action === SEND_MESSAGE_ACTION) {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const message = formData.get('message') as string
        if (!name || !message || !email) {
            console.error('Name, message and email necessary')
            return json({ error: 'Name, message and email necessary' })
        } else {
            return json(await sendMessage({ name, email, message }))
        }
    } else if (action === SUBSCRIBE_ACTION) {
        const email = formData.get('email') as string
        if (!email) {
            return json({ error: 'Name, message and email necessary' })
        }

        return json(await subscribe(email))
    } else {
        console.error('No action corresponding to ' + action + ' found')
        return null
    }
}

export const loader = async () => {
    return json({
        carouselImg: await getCarouselImg(),
        pages: await getPages(),
        links: await getLinks(),
        bio: await getBio(),
        studies: await getStudies(),
        videos: await getVideos(),
        repertory: await getRepertory(),
        contact: await getNbMessages(),
        concerts: await getTour(),
        subscribers: await getSubscribersCount()
    })
}

export default function Index() {
    const { carouselImg, pages, links, bio, studies, videos, repertory, contact, concerts, subscribers } =
        useLoaderData<typeof loader>()
    return (
        <div>
            <Navbar pages={pages} personalLinks={links.personalLinks} />
            <Carousel carouselImg={carouselImg} />
            <Bio paragraphs={bio.paragraphs} title={bio.title} subtitle={bio.subtitle} />
            <Studies title={studies.title} paragraphs={studies.paragraphs} awards={studies.awards} />
            <Concerts />
            <Repertoire repertory={repertory} />
            <Composition concertList={[]} />
            <Videos videos={videos} />
            <Contact nbMessages={contact.nbMessages} />
            <Newsletter subscribers={subscribers} />
            <Links mediaLinks={links.mediaLinks} personalLinks={links.personalLinks} otherLinks={links.otherLinks} />
            <Music />
            <Footer />
        </div>
    )
}
