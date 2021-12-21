import React from 'react'

const Login = () => {
  return (
    <>
      <main id="main-container" className="login-container">


        <div className="hero-static d-flex align-items-center">

          <div className="w-100">

            <div className="bg-body-light login-container">
              <div className="content content-full">
                <div className="row g-0 justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">

                    <div className="text-center">

                      <img src="assets/IMAGES/logo@2x.png" width="70" alt="" />

                      <h1 className="h4 mb-1 text-gray">
                        Sign In
                      </h1>
                      <p className="fw-medium text-muted mb-3">
                        Wolfpack C² — Operator Console
                      </p>
                    </div>

                    <form className="js-validation-signin" action="Dashboard.html" method="POST">
                      <div className="py-3">
                        <div className="mb-4">
                          <input type="text" className="form-control form-control-lg form-control-alt" id="login-username" name="login-username" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                          <input type="password" className="form-control form-control-lg form-control-alt" id="login-password" name="login-password" placeholder="Password" />
                        </div>
                        <div className="mb-4">
                          <div className="d-md-flex align-items-md-center justify-content-md-between">
                            <div className="form-check text-gray">
                              <input className="form-check-input" type="checkbox" value="" id="login-remember" name="login-remember" />
                              <label className="form-check-label" for="login-remember">Remember Me</label>
                            </div>
                            <div className="py-2">
                              <a className="fs-sm fw-medium" href="op_auth_reminder2.html">Forgot Password?</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-xxl-5 ">
                          <button type="submit" className="btn w-100 btn-alt-primary" onclick="window.location.href ='Dashboard.html'" >
                            <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> Sign In
                          </button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>

      </main>
    </>
  )
}

export default Login
