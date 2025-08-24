import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className="row   ">
        <div className="col-md-6 mx-auto m-5 text-center">
          <form className="p-5 shadow rounded ">
            <h1 className="not">404</h1>
            <h3>OOPS! PAGE NOT FOUND</h3>
            <p>
              The page you are looking for might have been removed and its name
              changed or is temporarily unavailable.
            </p>
            <button className="btn btn-success rounded">Go to Homepage</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NotFound