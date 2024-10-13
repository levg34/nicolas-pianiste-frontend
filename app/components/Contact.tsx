import { Form, useActionData, useNavigation } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { SendMessageResponse } from '~/model/contact.server'
import { ACTION_STRING } from '~/ts/constants'
import ClientChecker from './common/ClientChecker'

type Props = {
    nbMessages: number
}

export const SEND_MESSAGE_ACTION = 'sendMessage'

/* eslint-disable react/no-unescaped-entities */
const Contact = ({ nbMessages }: Props) => {
    const [message, setMessage] = useState('')
    const [ip, setIp] = useState<string>()

    const navigation = useNavigation()

    const actionIsContact = navigation.formData?.get(ACTION_STRING) === SEND_MESSAGE_ACTION

    const actionData = useActionData<SendMessageResponse>()
    const success = actionIsContact ? actionData?.success : undefined
    const error = actionIsContact ? actionData?.error : undefined

    const loading = actionIsContact && (navigation.state === 'loading' || navigation.state === 'submitting')

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (!loading) {
            formRef.current?.reset()
            setMessage('')
        }
    }, [loading])

    return (
        <div id="contact" className="container">
            <h3 className="text-center">Contact</h3>
            <p className="text-center">
                <em>On adore Nicolas !</em>
            </p>
            <div className="row test">
                <div className="col-md-4">
                    <p>Fan ? Laissez un message !</p>
                    {success && (
                        <div id="sendSuccess" className="alert alert-success">
                            <strong>Envoyé !</strong> Message envoyé avec succès.
                        </div>
                    )}
                    {error && (
                        <div id="sendError" className="alert alert-danger">
                            <strong>Erreur !</strong> Le message n'a pas été envoyé : {error}
                        </div>
                    )}
                    {!nbMessages && (
                        <p>
                            Aucun message envoyé pour l'instant.
                            <br />
                            Envoyez le premier !
                        </p>
                    )}
                    {nbMessages === 1 && <p>Un message envoyé.</p>}
                    {nbMessages > 1 && <p>{nbMessages} messages envoyés.</p>}
                </div>
                <Form ref={formRef} method="post" className="col-md-8">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Nom"
                                type="text"
                                required
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <div style={{ display: 'none' }}>
                        <input name="birthdate" type="date" />
                    </div>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Commentaire"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                    ></textarea>
                    <ClientChecker onIpChange={setIp} />
                    <div className="row">
                        <div className="col-md-12 form-group">
                            {ip && (
                                <button
                                    id="sendbtn"
                                    name="_action"
                                    value={SEND_MESSAGE_ACTION}
                                    disabled={!message || loading || !ip}
                                    className="btn pull-right"
                                >
                                    {loading ? (
                                        <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                                    ) : (
                                        'Envoyer'
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </Form>
            </div>
            <div className="visible-xs-block" style={{ height: '15px' }}></div>
        </div>
    )
}

export default Contact
