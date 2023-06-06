import { useFormik, validateYupSchema } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Signup = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords doesn't match")
      .required("Confirm Your Password"),
  });

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      // setSubmitting(true);
      console.log(values);

      // making a request to backend
      // 1. URL
      // 2. request method
      // 3. data 
      // 4. data format

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : "success",
          title: "Well done",
          text: "You have successfully registered",
        });
      }

    },
    validationSchema: SignupSchema,
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={signupForm.handleSubmit}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            value={signupForm.values.name}
                            onChange={signupForm.handleChange}
                            className="form-control"
                            placeholder="Your Name"
                          />
                          <span className="text-danger">
                            {signupForm.errors.name}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            value={signupForm.values.email}
                            onChange={signupForm.handleChange}
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <span className="text-danger">
                            {signupForm.errors.email}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            value={signupForm.values.password}
                            onChange={signupForm.handleChange}
                            className="form-control"
                            placeholder="Password"
                          />
                          <span className="text-danger">
                            {signupForm.errors.password}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <input
                            type="password"
                            id="cPassword"
                            value={signupForm.values.cPassword}
                            onChange={signupForm.handleChange}
                            className="form-control"
                            placeholder="Repeat your password"
                          />
                          <span className="text-danger">
                            {signupForm.errors.cPassword}
                          </span>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={signupForm.isSubmitting}
                        >
                          { signupForm.isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : '' }
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
