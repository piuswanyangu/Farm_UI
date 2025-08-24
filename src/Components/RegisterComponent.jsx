import React from 'react'

const RegisterComponent = () => {
  return (
    <div className='mainreg'>
      <div className="row ">
        <div className="col-md-6 align-items-center justify-content-center mx-auto">
          <h1>Create An Account</h1>
          <p>Join our community and connect directly with the harvest</p>
          <form className="p-5 shadow rounded">
            Fullnames <br />
            <input type="text" className="form-control" required />
            Email <br />
            <input type="email" className="form-control" required />
            Phone Number <br />
            <input type="phone" className="form-control" required />
            Password <br />
            <input type="password" className="form-control " required />
            Role <br />
            <select className="form-control">
              <option>Select Role</option>
              <option>Admin</option>
              <option>Farmer</option>
              <option>Buyer</option>
              <option>Middleman</option>
            </select>
            <br />
            SecretKey <br />
            <input
              type="text"
              placeholder="For Admin Roles Only"
              className="form-control"
            />
            County <br />
            <input type="text" className="form-control" />
            Sub-county <br />
            <input type="text" className="form-control" />
            Village <br />
            <input type="text" className="form-control" />
            <br />
            <p>Already have an Account <a href="">Login</a></p>
            <button type="submit" className="form-control btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent