import Logo from "../components/Logo"
import SignUp from "../components/SignupForm"

function SignUpPage() {
  return (
    <div id="signup-page">
      <div className="float-right">
        <Logo />
      </div>
      <div id="signup-form">
        <SignUp />
        <img src="../assets/images/countryside-woman-holding-plant-leaves-removebg-preview.png" alt="farmer" />
      </div>
    </div>
  )
}

export default SignUpPage