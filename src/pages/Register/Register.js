import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Register.css"

const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()
    const register = (e) => {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        fetch('http://localhost:8000/auth/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                setEmail("")
                setPassword("")
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    return (
        <form className='form-with shadow-lg p-3 mb-5 bg-body rounded'
            onSubmit={
                register
            }>
            <h3 className='text-center'>Register</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    autoComplete='off'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={() => {

                }}
            >Register</button>
        </form>
    )
}

export default Register