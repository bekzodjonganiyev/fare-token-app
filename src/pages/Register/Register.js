import React, { useState } from 'react'
import useToken from '../../hook/useToken'
// import axios from "axios"
import "./Register.css"

const Register = () => {
    const [setToken] = useToken(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = (e) => {
        e.preventDefault()

        // axios.post("http://localhost:8000/auth/register",

        //     {
        //         email: email,
        //         password: password
        //     },

        // )
        //     .then((res) => {
        //         console.log(res.data.access_token)
        //         setToken(res.data.access_token)
        //     })
        //     .catch((err) => console.log(err))

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
                console.log(data)
                setToken(data.access_token)
            })
            .catch(err => console.log(err));

        setEmail(" ")
        setPassword(" ")
    }

    return (
        <form className='form-with shadow-lg p-3 mb-5 bg-body rounded' onSubmit={register}>
            <h3 className='text-center'>Register</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    )
}

export default Register