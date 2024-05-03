import { Well, FormGroup, FormControl, HelpBlock, ControlLabel, Button, Alert } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

function NewsletterFeedback(props: { setFeedback: any; email: any; setEmail: any; feedback: any }) {
    const { setFeedback, email, setEmail, feedback } = props
    const handleDismiss = () => {
        setFeedback({ show: false })
    }

    return (
        <Alert bsStyle={feedback.variant} onDismiss={handleDismiss}>
            {feedback.variant === 'success' ? (
                <span>
                    Merci <strong>{email}</strong> ! Vous avez bien souscrit à la newsletter.
                    <br />
                    Pour souscrire avec une autre adresse, ou si vous vous êtes trompés d'adresse,{' '}
                </span>
            ) : feedback.error && feedback.error.errorType === 'uniqueViolated' ? (
                <span>
                    Cette adresse est déjà inscrite aux newsletters.
                    <br />
                    Si vous vous êtes désinscrits, vous devez attendre que votre désinscription soit traitée avant de
                    vous réinscrire.
                    <br />
                    Si vous vous êtes trompés d'adresse,{' '}
                </span>
            ) : (
                <span>
                    Une erreur s'est produite.
                    <br />
                    Pour reessayer,{' '}
                </span>
            )}
            <a
                href="#newsletter"
                onClick={(e) => {
                    setFeedback({ show: false })
                    setEmail('')
                }}
            >
                cliquez ici
            </a>
            .
        </Alert>
    )
}

function Newsletter(props: { setFeedback: any; email: any; setEmail: any; feedback: any }) {
    const { setFeedback, email, setEmail, feedback } = props

    const [subs, setSubs] = useState(0)

    const getSubs = () => {
        axios
            .get('/newsletter/subscribers')
            .then((res) => setSubs(res.data.subscribers))
            .catch((err) => console.error(err))
    }

    useEffect(getSubs, [])

    return (
        <Well>
            <h2>Newsletter</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setFeedback({ show: true })
                    axios
                        .post('/newsletter', { email })
                        .then(() => {
                            setFeedback({
                                show: true,
                                variant: 'success'
                            })
                            getSubs()
                        })
                        .catch((err) =>
                            setFeedback({
                                show: true,
                                variant: 'danger',
                                error: err.response ? err.response.data : undefined
                            })
                        )
                }}
            >
                <FormGroup>
                    <ControlLabel>Entrez votre email ci-dessous pour vous inscrire à la newsletter</ControlLabel>
                    <FormControl
                        type="email"
                        placeholder="Votre adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={feedback.show}
                    />
                    <HelpBlock>Vous recevrez des informations générales, et sur les concerts à venir.</HelpBlock>
                    <HelpBlock>Nombre de personnes inscrites : {subs}</HelpBlock>
                </FormGroup>
                <Button type="submit" disabled={feedback.show || !email}>
                    S'inscrire
                </Button>
            </form>
        </Well>
    )
}

function NewsletterComponent() {
    const [feedback, setFeedback] = useState({ show: false })
    const [email, setEmail] = useState('')

    return (
        <div>
            {feedback.show && (
                <NewsletterFeedback setFeedback={setFeedback} email={email} setEmail={setEmail} feedback={feedback} />
            )}
            <Newsletter setFeedback={setFeedback} email={email} setEmail={setEmail} feedback={feedback} />
        </div>
    )
}

export default NewsletterComponent
