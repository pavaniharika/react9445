
/*--------------------------------------login--------------------------------------*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4 text-primary">Login</h2>

              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your Username"
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
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
                </div>

                <div className="text-center mt-4">
                  <Link to="/dashboard">
                    <button type="button" className="btn btn-primary w-100">Login</button>
                  </Link>
                </div>
                
                <div className="text-center mt-3">
                  <p>Don't have an account? <Link to="/"><button type='button' class="btn btn-primary  w-10">Signup</button></Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;





