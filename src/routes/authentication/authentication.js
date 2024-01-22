import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './authentication.styles.scss'

export default function Authentication() {
  return (
    <div className="authentication-conatiner">
      <SignIn />
      <SignUp />
    </div>
  );
}
