import React, { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignINContainer, ButtonContainer } from "./sign-in.styles.jsx";

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
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
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
    <SignINContainer>
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
        <ButtonContainer>
          <Button type="submit">Sign Up</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google SignIn
          </Button>
        </ButtonContainer>
      </form>
    </SignINContainer>
  );
}
