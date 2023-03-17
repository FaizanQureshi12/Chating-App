import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerRoute } from '../utills/ApiRoutes'


const Register = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: '',
        confirmPassword: ''
    })

    const toastOptions = {
        position: 'top-center',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (handleValidation()) {
            console.log('in validation', registerRoute)
            const { password,  username, email } = values
            const { data } = await axios.post(registerRoute,{
                username, 
                email,
                password,
            })
        }
    }

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password must be Same",
                toastOptions
            )
            return false
        } else if (username.length < 3) {
            toast.error("Username should be greater than 3 Characters",
                toastOptions)
            return false
        } else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 Characters",
                toastOptions)
            return false
        } else if (email === '') {
            toast.error('Email is required',
                toastOptions)
            return false
        }
        alert("Sucessfully SignUp")
        console.log(values)
        return true
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <FormContainer>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="brand">
                        <img src={Logo} alt="nhj" />
                        <h1>Happy Chating</h1>
                    </div>
                    <input type="text"
                        placeholder='Username'
                        name="username"
                        onChange={(e) => handleChange(e)}
                    />
                    <input type="email"
                        placeholder='Email'
                        name="email"
                        onChange={(e) => handleChange(e)}
                    />
                    <input type="password"
                        placeholder='Password'
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <input type="password"
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        onChange={(e) => handleChange(e)}
                    />
                    <button type='submit'>
                        Create User
                    </button>
                    <span>
                        Already have an Account?
                        <Link to="/login">
                            {''} login
                        </Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    )
}


const FormContainer = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 1rem;
 align-items: center;
 background-image: linear-gradient(to right, #f4f4ac, #e573da);

 .brand {
   display: flex;
   align-items: center;
   gap: 1rem;
   justify-content: center;
   img {
     height: 5rem;
   }
   h1 {
    color: white;
    text-transform: uppercase;
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #cf7d7d76;
  border-radius: 2rem;
  padding: 3rem 5rem;
}
input {
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
  }
}
button {
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #4e0eff;
  }
}
span {
  color: white;
  text-transform: uppercase;
  a {
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
  }
}
 `

export default Register
