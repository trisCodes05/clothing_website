import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";

export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}
