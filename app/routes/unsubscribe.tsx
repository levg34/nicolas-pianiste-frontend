/* eslint-disable react/no-unescaped-entities */
import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { AlertType, unsubscribe } from '~/model/newsletter.server'

export const action = async ({ request }: ActionFunctionArgs): Promise<AlertType> => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    return unsubscribe(email)
}

function Unsubscribe() {
    return (
        <div className="well well-lg">
            <h1>Désinscription de la newsletter de Nicolas Dross</h1>
            <p>Entrez votre adresse email pour vous désinscrire, puis cliquez sur "Désinscription"</p>
            <Form method="post">
                <input className="form-control" type="email" placeholder="Votre adresse email" name="email" required />
                <button className="btn btn-default" type="submit">
                    Désinscription
                </button>
            </Form>
            <p>
                Sinon, pour revenir sur le site, <a href="/">cliquez ici</a>
            </p>
        </div>
    )
}

function Feedback(props: { alert: AlertType }) {
    const { variant, message } = props.alert
    return (
        <div className={`alert alert-${variant}`} role="alert">
            {message}
        </div>
    )
}

export default function UnsubscribeController() {
    const alert = useActionData<AlertType>()

    return (
        <div className="container" style={{ marginTop: '5px' }}>
            {alert && alert.message && <Feedback alert={alert} />}
            <Unsubscribe />
        </div>
    )
}
