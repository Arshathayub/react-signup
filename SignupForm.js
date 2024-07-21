   import React, { useState } from 'react';
   import './SignupForm.css';

   const SignupForm = () => {
     const [formData, setFormData] = useState({
       username: '',
       email: '',
       password: '',
     });

     const [formErrors, setFormErrors] = useState({
       username: '',
       email: '',
       password: '',
     });

     const validate = () => {
       let errors = {};
       if (!formData.username) {
         errors.username = 'Username is required';
       }
       if (!formData.email) {
         errors.email = 'Email is required';
       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         errors.email = 'Email address is invalid';
       }
       if (!formData.password) {
         errors.password = 'Password is required';
       } else if (formData.password.length < 6) {
         errors.password = 'Password must be at least 6 characters';
       }
       return errors;
     };

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const errors = validate();
       if (Object.keys(errors).length === 0) {
         console.log('Form Data Submitted: ', formData);
         // Add form submission logic here
       } else {
         setFormErrors(errors);
       }
     };

     return (
       <div className="container mt-5">
         <h2>Signup Form</h2>
         <form onSubmit={handleSubmit}>
           <div className="form-group">
             <label htmlFor="username">Username</label>
             <input
               type="text"
               className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
               id="username"
               name="username"
               value={formData.username}
               onChange={handleChange}
               required
             />
             {formErrors.username && <div className="invalid-feedback">{formErrors.username}</div>}
           </div>
           <div className="form-group">
             <label htmlFor="email">Email address</label>
             <input
               type="email"
               className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
             />
             {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
           </div>
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input
               type="password"
               className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               required
             />
             {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
           </div>
           <div className="form-group">
             <label htmlFor="password">Conform Password</label>
             <input
               type="password"
               className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               required
             />
             {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
           </div>
           <button type="submit" class="btn btn-primary">Sign Up</button>

           </form>
       </div>
     );
   };

   export default SignupForm;
