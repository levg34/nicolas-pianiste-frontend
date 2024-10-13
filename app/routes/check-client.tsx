import type { LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 'Unknown'

    return new Response(clientIP, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
}
