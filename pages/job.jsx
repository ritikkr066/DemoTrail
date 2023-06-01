import React from "react";
// import "./index.css";

export default function Job() {
  return (
    <>
    <div className="flex justify-center py-6 text-3xl">Registration </div>
    <div class="form-container my-6 flex justify-center items-center mx-auto">
      <form class="register-form  py-10">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         <input
          id="College-Roll-no."
          class="form-field"
          type="text"
          placeholder="College Roll No."
          name="RollNum"
        />
         <select class="form-field">
         
                                    <option value="">Select Job role</option>
                                    <option value="fronted">Fronted Developer</option>
                                    <option value="backend">Backend Developer</option>
                                    <option value="full_stack">Full_stack Developer</option>
                                    <option value="ui_ux">UI UX Designer</option>
                                </select>
         <input
          id="Mobile-no"
          class="form-field"
          type="Number"
          placeholder="Mobile number"
          name="MobileNo."
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field text-blue-800  cursor-pointer" type="submit">
          Register
        </button>
      </form>
    </div>
    </>
  );
}