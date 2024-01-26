import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const changeInputHandler = (e) => {
        setUserData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
  return (
    <section className="register">
        <div className="container">
            <h2>Sign In</h2>
            <form className='form login__form'>
                <p className="form__error-message">This is an error message</p>
                <input type="text" name="email" placeholder='Email' value={userData.email} 
                onChange={changeInputHandler} autoFocus
                />
                <input type="text" name="password" placeholder='Password' value={userData.password} 
                onChange={changeInputHandler}
                />
                <button type='submit' className='btn primary'>Register</button>
            </form>
            <small>Don't have an account?<Link to="/register"> sign up</Link></small>
        </div>
    </section>
  )
}

export default Login