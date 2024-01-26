import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeInputHandler = (e) => {
        setUserData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
  return (
    <section className="register">
        <div className="container">
            <h2>Sign Up</h2>
            <form className='form register__form'>
                <p className="form__error-message">This is an error message</p>
                <input type="text" name="name" placeholder='Full Name' value={userData.name} 
                onChange={changeInputHandler}
                />
                <input type="text" name="email" placeholder='Email' value={userData.email} 
                onChange={changeInputHandler}
                />
                <input type="text" name="password" placeholder='Password' value={userData.password} 
                onChange={changeInputHandler}
                />
                <input type="text" name="confirmPassword" placeholder='Confirm Password' value={userData.confirmPassword} 
                onChange={changeInputHandler}
                />
                <button type='submit' className='btn primary'>Register</button>
            </form>
            <small>Already have an account?<Link to="/login"> sign in</Link></small>
        </div>
    </section>
  )
}

export default Register