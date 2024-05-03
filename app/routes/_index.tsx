import type { MetaFunction } from '@remix-run/node'
import Bio from '~/components/Bio'
import Carousel from '~/components/Carousel'
import Footer from '~/components/Footer'
import Links from '~/components/Links'
import Music from '~/components/Music'
import Navbar from '~/components/Navbar'
import Newsletter from '~/components/Newletter'

export const meta: MetaFunction = () => {
    return [
        { title: 'Nicolas DROSS - Pianiste' },
        { name: 'description', content: 'Bienvenue sur le site de Nicolas DROSS, pianiste ! Fait main, et avec amour.' }
    ]
}

export default function Index() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Bio />
            {/* Studies */}
            {/* Concerts */}
            {/* Repertoire */}
            {/* Composition */}
            {/* Videos */}
            {/* Contact */}
            <Newsletter />
            <Links />
            <Music />
            <Footer />
        </div>
    )
}
