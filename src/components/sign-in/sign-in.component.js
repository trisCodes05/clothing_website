import React, { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  creaUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss";


export default function SignIn() {
  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
  };

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFileds, setFormfFields] = useState(defaultFormFields);
  const { email, password } = formFileds;

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfFields({ ...formFileds, [name]: value });
  };

  const resetFormFeilds = () => {
    setFormfFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFeilds();
    } catch (error) {
      switch(error.code){
        case "auth/wrong-password" :
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
      default:
        console.log("user login encountered an error", error);
      } 
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
          <Button  buttonType="google" type="button" onClick={signInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
}
