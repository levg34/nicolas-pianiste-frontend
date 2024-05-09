/* eslint-disable react/no-unescaped-entities */
import { Well, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import axios from 'axios'
import NewsletterFeedback, { FeedbackType } from './newsletter/NewsletterFeedback'

type NewsletterProps = {
    setFeedback: React.Dispatch<React.SetStateAction<FeedbackType>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    feedback: FeedbackType
} & Props

function Newsletter(props: NewsletterProps) {
    const { setFeedback, email, setEmail, feedback, subscribers: subs } = props

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
                            // getSubs() TODO: refresh when new subscriber
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
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
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

type Props = {
    subscribers: number
}

function NewsletterController({ subscribers }: Props) {
    const [feedback, setFeedback] = useState<FeedbackType>({ show: false })
    const [email, setEmail] = useState('')

    return (
        <div className="container">
            {feedback.show && (
                <NewsletterFeedback setFeedback={setFeedback} email={email} setEmail={setEmail} feedback={feedback} />
            )}
            <Newsletter
                setFeedback={setFeedback}
                email={email}
                setEmail={setEmail}
                feedback={feedback}
                subscribers={subscribers}
            />
        </div>
    )
}

export default NewsletterController
