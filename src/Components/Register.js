import { useState } from "react"

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [name, setName] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefoult();
        console.log({ email })

    }



    return (
        <div className="auth-form-container">
            <h2>Register Form</h2>

            <form onSubmit={HandleSubmit} className="register-form">
                <label htmlFor="name">Full name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Abdalrhman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>

                <label
                    htmlFor="email">Email</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>

                <label
                    htmlFor="Password">Password</label>

                <input
                    type="Password"
                    id="Password"
                    name="Password"
                    placeholder="Password"
                    value={Pass}
                    onChange={(e) => setPass(e.target.value)} >
                </input>

                <button type="submit"
                    className="login-btn">Login</button>

                <button
                    type="submit"
                    className="link-btn">Already have an account ? Log in now</button>

            </form>
        </div>
    )
}