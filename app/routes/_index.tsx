import type { MetaFunction } from '@remix-run/node'
import Carousel from '~/components/Carousel'
import Navbar from '~/components/Navbar'

export const meta: MetaFunction = () => {
    return [{ title: 'Nicolas DROSS - Pianiste' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
    return (
        <div>
            <Navbar />
            <Carousel />
        </div>
    )
}
