import React from 'react'

const RegisterComponent = () => {
  return (
    <div className='container mt-5'>
        <form >
            <input type="text" placeholder='Enter Your Name' className='form-control' />
            <input type="email" placeholder='Enter your email' className='form-control' required />
            <input type="phone" placeholder='Enter Your phone Number' className='form-control' />
            <input type="password" placeholder='' />

        </form>

    </div>
  )
}

export default RegisterComponent