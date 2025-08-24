import React, { useState } from 'react'

const LoginComponent = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
  return (
    
    <div className='bg-success'>
        <div className="container p-3 ">
            <h1>Welcome to Login Page</h1>
            <form>
                <input type="email" placeholder='Enter Email' className='form-control' />
                <br />
                <input type="password" placeholder='Enter Password' className='form-control' />
                <br />
                <button className='btn btn-warning text-light align-items-center' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginComponent