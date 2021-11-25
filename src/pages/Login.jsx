import React, {useContext, useRef} from 'react'
import logo from "@logos/logo_yard_sale.svg"
import "../styles/_login.sass"
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import {useNavigate} from 'react-router-dom';


export default function Login() {
    const form = useRef(null)
    const { saveItem } = useContext(AppContext)
    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            login: true
        }
        console.log(data)
        return (
            saveItem(data),
            navigate('/')
        )
    }

    return (
        <div className="login">
            <div className="login__container">
            <img src={logo} alt="logo" className="logo"/>

            <form action="/" className="login__form" ref={form}>
                <label for="email" className="login__form__label">Email address</label>
                <input type="text" name="email" placeholder="example@example.com" className="login__form__input input-email"/>

                <label for="password" className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="login__form__input input-password"/>

                <button className="primary-button login-button" onClick={handleSubmit}>Login</button>

                <Link to="/Forgotpass">Forgot my password</Link>
            </form>

            <button className="secondary-button signup-button" >Sign up</button>
            </div>
        </div>
    )
}
