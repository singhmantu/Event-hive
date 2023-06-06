import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body : JSON.stringify(values), 
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      if(res.status === 200){ 
          Swal.fire({
            icon : "success",
            title: "Success",
            text: "Loged in Successfully"
          })
      }else if(res.status === 401){
        Swal.fire({
          icon : "error",
          title: "Error",
          text: "Invalid Credentials"
        })
      }

    },
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <form onSubmit={loginForm.handleSubmit}>
                  <h3 className="mb-5">Sign in</h3>
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.email}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                      className="form-control form-control-lg"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2" /> Sign in with google
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2" />
                    Sign in with facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
