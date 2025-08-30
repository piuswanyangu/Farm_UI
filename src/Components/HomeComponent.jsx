import React from 'react'
import pic from '../images/farm1.jpg'
import ig from '../images/farm2.jpg'
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <div className="container-fluid bg-success ">
        <nav className="navbar navbar-expand-lg bg-success">
          <div className="container">
            <Link className="navbar-brand text-light" to="/">
              AgriMarket
            </Link>
            <h1 className=" text-center text-light">
              Welcome to AgriMarket Kenya
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar nav ms-auto">
                <li className="nav-item">
                  <a href="#about" className="nav-link text-light">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="register" className="nav-link text-light">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="login" className="nav-link text-light">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="exploreproduces" className="nav-link text-light">
                    Explore Produces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* hero section */}
      <div className="container-fluid text-center ">
        <section className="hero">
          <h1 className="text-center  p-3 fw-bolder">
            <b>
              Connecting the Harvest, Simplifying the Market- Fair Trade , Fresh
              Produce
            </b>
          </h1>
          <p>
            Your direct link to fresh produce, fair price and stronger community
          </p>
          <button className="btn btn-success text-light m-5">
            <a
              href="exploreproduces"
              className="text-decoration-none fw-bolder text-dark"
            >
              Explore all Produce
            </a>
          </button>
          <button className="btn btn-outline-success text-success">
            <a
              href="register"
              className="text-decoration-none fw-bolder text-dark"
            >
              Sign Up Now
            </a>
          </button>
          <br />
        </section>
      </div>
      <div className="container text-center p-2">
        <h2 className="m-5 text-center ">How it works</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow" style={{ height: 180 }}>
              <div className="card-body">
                <h4>1. Discover & Connect</h4>
                <p>
                  Search for fresh produce or post your harvest directly on the
                  platform.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ height: 180 }}>
              <div className="card-body">
                <h4>2. Agree on Terms</h4>

                <p>
                  Chat and negotiate with your trading partner to finalize the
                  sale.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ height: 180 }}>
              <div className="card-body">
                <h4>3. Transact Securely</h4>
                <p>
                  Use our secure payment system to ensure a safe transaction and
                  arrange logistics and delivery all in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center m-2">Benefits for Everyone</h1>
      {/* about section */}
      <div className="container bg-light">
        <br />
        <div className=" row mt-3 mb-3 justify-content-center">
          <div className="col-md-10">
            <div className="card shadow">
              <div className="card-body">
                <h3>For Farmers: More Profit, Less Hassle </h3>
                <p>
                  ✔ Direct sales to buyers and middlemen, cutting out layers{" "}
                </p>
                <p>✔ Transparent pricing models that empower your business</p>
                <p>✔ Access to a broader market beyond local boundaries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 justify-content-center">
          <div className="col-md-10">
            <div className="card shadow">
              <div className="card-body">
                <h1>ForBuyers: Quality & Freshness,Guaranteed </h1>
                <p>✔ Get the freshest produce directly from the source.</p>
                <p>
                  ✔ Competitive pricing through direct negotiations with farmers
                </p>
                <p>✔ Build lasting relationships with trusted suppliers</p>
                <p>
                  ✔ Access to exclusive, high quality products not found
                  anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 justify-content-center">
          <div className="col-md-10">
            <div className="card shadow">
              <div className="card-body">
                <h1>For Middlemen:New Opportunities, Efficient Trade</h1>
                <p>
                  ✔ Expand your network by connecting with more farmers and
                  buyers to discover new sources of supply
                </p>
                <p>✔Streamlined transactions and reduced paperwork</p>
                <p>✔Stay updated with market trends and pricing information</p>
                <p>
                  ✔ Diversify your supplier base and reduce dependency on
                  traditional channels
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="container transparent p-5 text-white">
        <h1 className="text-center mt-3 mb-3">Transparent Pricing</h1>
      </div>
      <div className="container">
        <h1>Our Commitment to Fair Pricing</h1>
        <p>
          By connecting farmers, buyers and middlemen directly, Agrimarket
          removes hidden markups and inefficient channels that inflate costs.
          Our platform ensures tha farmers receive the true value for their hard
          work, and buyers get high-quality produce at a fair, honest price.
        </p>

        <p>
          This transparent model not only benefits individual users but also the
          entire agricultural ecosystem.
        </p>
      </div>
      <div className="container bg-success text-light text-center p-5 mt-3 fw-bold">
        <h1>Ready to join the AgriMarket Community</h1>
        <p>
          Ready to transform the way you trade in agriculture? Sign up today and
          be part of a community that values transparency, quality, and fair
          trade.Whether you're a farmer looking to sell your harvest, a buyer
          seeking fresh produce, or a middleman wanting to expand your network,
          AgriMarket is here to help you thrive.Join us in building a more
          connected, efficient, and fair agricultural market.
        </p>
        <button className="btn btn-light text-success m-3">
          Explore Produce
        </button>
        <button className="btn btn-outline-light text-light ">
          Become Vendor
        </button>
      </div>

      {/* footer */}
      <div className="container text-center fw-bolder bg-dark text-light p-3">
        <p>
          &copy; {new Date().getFullYear()} AgriMarket Kenya. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default HomeComponent