import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import React, { useState } from 'react'
import app_config from '../../config';
import { toast } from 'react-hot-toast';

const Addorganiser = () => {

    const {apiUrl} = app_config;

    const [selImage, setSelImage] = useState(null);

    const SignupSchema = Yup.object().shape({
        title: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        owner: Yup.string()
            .min(2, 'Too Short!')   
            .max(50, 'Too Long!')
            .required('Required'),
        
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        });

    const signupForm = useFormik({
        initialValues: {
            title: '',
            owner: '',
            cover: '',
            images: '',
            description: '',
            packages: '',
        },
        onSubmit: async ( values, {setSubmitting } ) => {
            // setSubmitting(true);
            console.log(values);  
              values.cover = selImage.name;

            const res = await fetch('http://localhost:5000/event/add', {
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
                title: "well done",
                text: "You have successfully registered",
              });
            }
           },
        validationSchema: SignupSchema,
    });

    const uploadImage = async (e) => {
      const file = e.target.files[0];
      setSelImage(file);
      const fd = new FormData();
      fd.append("myfile", file);
      fetch(apiUrl + "/util/uploadfile", {
        method: "POST",
        body: fd,
      }).then((res) => {
        if (res.status === 200) {
          console.log("file uploaded");
          toast.success("File Uploaded!!");
        }
      });
    }

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
                    Add Event Organizer
                  </p>
                  <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="text"
                          id="title"
                          value={signupForm.values.title}
                          onChange={signupForm.handleChange}
                          className="form-control"
                          placeholder='Title'
                        />
                       <span className='text-danger'>{signupForm.errors.title}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="text"
                          id="owner"
                          value={signupForm.values.owner}
                          onChange={signupForm.handleChange}
                          className="form-control"
                          placeholder='Owner'
                        />
                          <span className='text-danger'>{signupForm.errors.owner}</span>
                      </div>
                    </div>
                   
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="text"
                          id="description"
                          value={signupForm.values.description}
                          onChange={signupForm.handleChange}
                          className="form-control"
                          placeholder='Description'
                        />
                          <span className='text-danger'>{signupForm.errors.description}</span>
                      </div>
                    </div>

                    <input type="file" onChange={uploadImage} />
                    
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" disabled={signupForm.isSubmitting}>
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
  )
}

export default Addorganiser