import React from 'react'

const Loginform = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setMessage('Please fill in all fields');
            return;
        }

        setMessage('Login Successful!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>

                <h2>Login Form</h2>

                <label htmlFor="email">Email:</label>

                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>

                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}
        </div >
    )
}

export default Loginform;