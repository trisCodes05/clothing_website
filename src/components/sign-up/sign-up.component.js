import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  creaUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {SignUPContainer} from './sign-up.styles.jsx'



export default function SignUp() {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFileds, setFormfFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFileds;
 

  //handles form changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfFields({ ...formFileds, [name]: value });
  };

  //to re-set the forms
  const resetFormFeilds = () => {
    setFormfFields(defaultFormFields);
  };

  //on submitting the form this method triggers
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords are not same");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await creaUserDocumentFromAuth(user, { displayName });
      
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can't use same email");
      }
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <SignUPContainer>
    <h2>Don't have an account</h2>
    <span>Sign Up with Email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          id=""
          required
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          id=""
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id=""
          required
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id=""
          required
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" >Sign Up</Button>
      </form>
    </SignUPContainer>
  );
}
