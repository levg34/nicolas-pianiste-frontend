import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react'
import '~/styles.css'
import NotFound from './components/error/NotFound'
import ServerError from './components/error/ServerError'
import NicoImg from './components/common/NicoImg'

export function ErrorBoundary() {
    const error: any = useRouteError()
    console.error(error)
    return (
        <html lang="fr">
            <head>
                <title>Nicolas DROSS - Pianiste - Erreur</title>
                <Meta />
                <Links />
            </head>
            <body>
                <NicoImg />
                {error?.status === 404 && <NotFound />}
                {error?.status !== 404 && <ServerError />}
                <Scripts />
            </body>
        </html>
    )
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <link href="favicon.png" rel="icon" type="image/x-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
                    integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
                    crossOrigin="anonymous"
                ></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"></link>
                <Links />
                <script
                    src="https://code.jquery.com/jquery-1.12.4.min.js"
                    integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"
                    integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body id="#maison" data-spy="scroll" data-target=".navbar" data-offset="50">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
