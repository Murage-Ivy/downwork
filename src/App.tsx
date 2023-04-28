import { Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PostPage from "./Pages/PostPage";
import SignUpPage from "./Pages/SignUpPage";
import { SignUpContextProvider } from "./contexts/UserSignupContext";
import { LoginContextProvider } from "./contexts/UserLoginContext";





const App: React.FC = () => {

  // const [user, setUser] = useState<UserType>({
  //   id: 0,
  //   username: "",
  //   email: "",
  //   image_url: "",
  // })

  // type getUserType = {
  //   getUser: () => void

  // }

  // const getUser = async () => {
  //   const response = await fetch('auto_login')
  //   const data = await response.json()
  //   if (response.ok) {
  //     setUser(data)
  //   }
  //   else {
  //     console.log(data.error)
  //   }
  // }

  // const navigate = useNavigate()

  // useEffect(() => {
  //   getUser()
  // }, [])

  // useEffect(() => {
  //   if (user && user.id !== 0) {
  //     navigate('/postpage')
  //   }
  // }, [navigate, user])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage  />} />
        <Route path="/login" element={<LoginContextProvider><LoginPage /></LoginContextProvider>} />
        <Route path="/signup" element={<SignUpContextProvider><SignUpPage /></SignUpContextProvider>} />
        <Route path="/postpage" element={<PostPage  />} />
      </Routes>

    </div>
  );
}

export default App;
