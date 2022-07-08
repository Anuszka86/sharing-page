import React, {useState} from "react";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({})

    const validate = () => {
        const err = {}

        if (name?.split(" ").length > 1) {
            err.name = "Niepoprawne imię"
        }
        if (!email?.includes("@")) {
            err.email = "Niepoprawny email"
        }
        if (message?.length < 120) {
            err.message = "musi być dłuższa niż 120 znaków"
        }
        if (Object.values(err).length) {
            setErrors(err);
            return false;
        }

        return true;
    }

    const handleSend = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            name: name,
            message: message
        };

        if (!validate()) return;
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    alert("Message Sent.");
                    resetForm()
                } else if (response.status === 'error') {
                    alert("Message failed to send.")
                }
            })
    }

    const resetForm = () => {
        setEmail("")
        setName("")
        setMessage("")
    }

    return (
        <>
            <form className="contact-form">
                <label>
                    Wpisz swoje imię
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                    <p>{errors?.name}</p>
                </label>
                <label>
                    Wpisz swój email
                    <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <p>{errors?.email}</p>
                </label>
                <label>
                    Wpisz swoją wiadomość
                    <textarea name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                    <p>{errors?.message}</p>
                </label>
            </form>
            <div className="login-logout-buttons-bar">
                <button className="login-logout-button submitting-button" onClick={handleSend}>Wyślij</button>
            </div>
        </>
    )
}

export default ContactForm