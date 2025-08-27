import React, { useState } from 'react'

const LoginComponent = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
  return (
    <div>
      <div className="container p-3 ">
        <form className="shadow mx-auto mt-5 p-3">
          <h1 className="text-center">Welcome Back</h1>
          <p className="text-center text-secondary">
            {" "}
            Please Login to your account to continue.
          </p>
          Email <br />
          <input type="email" className="form-control" />
          <br />
          Password <br />
          <input type="password" className="form-control" />
          <br />
          <p className='text-secondary text-center'>
            Don't have an Account <a href="register" className='fw-bold text-decoration-none' >Register Here</a>
          </p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent