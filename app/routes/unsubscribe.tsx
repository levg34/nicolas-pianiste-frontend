/* eslint-disable react/no-unescaped-entities */
import { Form } from '@remix-run/react'
import Container from '~/components/bootstrap/Container'
import NicoImg from '~/components/common/NicoImg'

function Unsubscribe() {
    // const submitForm = (e) => {
    //     e.preventDefault()
    //     axios
    //         .put('/unsubscribe/' + email)
    //         .then((res) => {
    //             if (res.data && res.data.updated !== undefined) {
    //                 if (res.data.updated > 0) {
    //                     setAlert({
    //                         variant: 'success',
    //                         message: 'Vous avez bien été désinscrit de la newsletter.'
    //                     })
    //                 } else {
    //                     setAlert({
    //                         variant: 'danger',
    //                         message: "Vous n'étiez pas inscrit à la newsletter."
    //                     })
    //                 }
    //             } else {
    //                 setAlert({
    //                     variant: 'danger',
    //                     message: "Une erreur s'est produite : veuillez réessayer."
    //                 })
    //             }
    //         })
    //         .catch((err) =>
    //             setAlert({
    //                 variant: 'danger',
    //                 message: "Une erreur s'est produite : veuillez réessayer."
    //             })
    //         )
    // }

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

// function Feedback(props: { alert: { variant: any; message: any } }) {
//     const { variant, message } = props.alert
//     return <Alert variant={variant}>{message}</Alert>
// }

export default function UnsubscribeController() {
    // const [alert, setAlert] = useState()

    return (
        <Container>
            <NicoImg />
            {/* {alert && alert.message && <Feedback alert={alert} />} */}
            <Unsubscribe />
        </Container>
    )
}
