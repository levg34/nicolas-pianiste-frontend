/* eslint-disable react/no-unescaped-entities */
import { Well, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import NewsletterFeedback, { FeedbackType } from './newsletter/NewsletterFeedback'
import { Form, useActionData } from '@remix-run/react'
import { ACTION_STRING } from '~/ts/constants'
import ClientChecker from './common/ClientChecker'

type NewsletterProps = {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    feedback: FeedbackType
} & Props

export const SUBSCRIBE_ACTION = 'subscribe'

function Newsletter(props: NewsletterProps) {
    const { email, feedback, subscribers: subs, setEmail } = props
    const [ip, setIp] = useState<string>()

    return (
        <Well>
            <h2>Newsletter</h2>
            <Form method="post">
                <FormGroup>
                    <ControlLabel>Entrez votre email ci-dessous pour vous inscrire à la newsletter</ControlLabel>
                    <FormControl
                        name="email"
                        type="email"
                        placeholder="Votre adresse email"
                        disabled={feedback.show}
                        value={email}
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                    />
                    <HelpBlock>Vous recevrez des informations générales, et sur les concerts à venir.</HelpBlock>
                    <HelpBlock>Nombre de personnes inscrites : {subs}</HelpBlock>
                    <ClientChecker onIpChange={setIp} />
                </FormGroup>
                <Button
                    type="submit"
                    disabled={feedback.show || !email || !ip}
                    name={ACTION_STRING}
                    value={SUBSCRIBE_ACTION}
                >
                    S'inscrire
                </Button>
            </Form>
        </Well>
    )
}

type Props = {
    subscribers: number
}

function NewsletterController({ subscribers }: Props) {
    const [email, setEmail] = useState('')
    const feedbackAction = useActionData<FeedbackType>()
    // const navigation = useNavigation()
    const actionIsNewsletter = true //navigation.formData?.get(ACTION_STRING) === SUBSCRIBE_ACTION
    const feedback = feedbackAction && actionIsNewsletter ? feedbackAction : { show: false }

    return (
        <div className="container">
            {feedback.show && <NewsletterFeedback email={email} setEmail={setEmail} feedback={feedback} />}
            <Newsletter email={email} setEmail={setEmail} feedback={feedback} subscribers={subscribers} />
        </div>
    )
}

export default NewsletterController
