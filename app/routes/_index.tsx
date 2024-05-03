import type { MetaFunction } from '@remix-run/node'
import Navbar from '~/components/Navbar'

export const meta: MetaFunction = () => {
    return [{ title: 'Nicolas DROSS - Pianiste' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
    return (
        <div>
            <h1>Nicolas DROSS - Pianiste</h1>
            <Navbar />
        </div>
    )
}
