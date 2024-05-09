import { useState } from 'react'

type Props = {
    nbMessages: number
}

/* eslint-disable react/no-unescaped-entities */
const Contact = ({ nbMessages }: Props) => {
    // contactCtrl

    // Mock data for testing the component
    const [sendSuccess, setSendSuccess] = useState(false)
    const [sendError, setSendError] = useState('')
    const [name, setName] = useState('Name')
    const [email, setEmail] = useState('name@example.com')
    const [message, setMessage] = useState('The message')
    const [loading, setLoading] = useState(false)

    // Mock function to simulate message sending
    const sendMessage = () => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setSendSuccess(true)
            setName('')
            setEmail('')
            setMessage('')
            setLoading(false)
        }, 2000)
    }

    return (
        <div id="contact" className="container">
            <h3 className="text-center">Contact</h3>
            <p className="text-center">
                <em>On adore Nicolas !</em>
            </p>
            <div className="row test">
                <div className="col-md-4">
                    <p>Fan ? Laissez un message !</p>
                    {sendSuccess && (
                        <div id="sendSuccess" className="alert alert-success">
                            <strong>Envoyé !</strong> Message envoyé avec succès.
                        </div>
                    )}
                    {sendError && (
                        <div id="sendError" className="alert alert-danger">
                            <strong>Erreur !</strong> Le message n'a pas été envoyé : {sendError}
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
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Nom"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
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
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <button
                                id="sendbtn"
                                disabled={!message || loading}
                                className="btn pull-right"
                                onClick={sendMessage}
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
