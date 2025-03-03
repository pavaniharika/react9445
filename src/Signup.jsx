
/*--------------------signup-------------------------------------*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup">
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card p-4 shadow-xl ">
              <h2 className="text-center mb-4 text-primary">Signup</h2>

              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="secondName" className="form-label">Second Name</label>
                  <input
                    type="text"
                    id="secondName"
                    className="form-control"
                    placeholder="Enter your second name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="text-center mt-4">
                  <Link to="/Login">
                    <button type="button" className="btn btn-primary w-100">Signup</button>
                  </Link>
                </div>

                <div className="text-center mt-3">
                  <p>Already have an account? <Link to="/Login"><button type='button' class="btn btn-primary  w-10">Login</button></Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
