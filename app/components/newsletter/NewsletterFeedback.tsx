/* eslint-disable react/no-unescaped-entities */
import { Alert } from 'react-bootstrap'

export type FeedbackType = {
    variant?: string
    error?: { errorType?: string }
    show: boolean
}

export default function NewsletterFeedback(props: {
    setFeedback: React.Dispatch<React.SetStateAction<FeedbackType>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    feedback: FeedbackType
}) {
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
                onClick={() => {
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
