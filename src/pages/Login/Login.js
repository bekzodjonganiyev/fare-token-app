import React, { useState } from 'react'
import { Context } from '../../context/authContext'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
// import axios from "axios"
import "./Login.css"

const Login = () => {
    const { setAuth } = React.useContext(Context)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = (e) => {
        e.preventDefault()

        // axios.post("http://localhost:8000/auth/login",

        //     {
        //         email,
        //         password
        //     }
        //     ,
        //     {
        //         headers: {
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //             'Content-Type': 'application/json'
        //         }
        //     }

        // )
        //     .then((res) => {
        //         console.log(res)
        //         setAuth(true)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        const requestOptions = {
            method: 'POST',

            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };
        fetch('http://localhost:8000/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 401) {
                   alert(data.message)
                }
                setEmail("")
                setPassword("")
                // setAuth(true)
            })
            .catch(err => console.log("salom", err));
    }

    return (
        <form className='form-with shadow-lg p-3 mb-5 bg-body rounded' onSubmit={login}>
            <h3 className='text-center'>Login</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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

                }}>Login</button>
        </form>
    )
}

export default Login