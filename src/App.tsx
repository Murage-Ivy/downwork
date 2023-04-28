import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PostPage from "./Pages/PostPage";
import SignUpPage from "./Pages/SignUpPage";
import { SignUpContextProvider } from "./contexts/UserSignupContext";
import { LoginContextProvider } from "./contexts/UserLoginContext";
import { useEffect, useState } from "react";
import { UserType } from "./types";





const App: React.FC = () => {

  const [user, setUser] = useState<UserType>({
    id: 0,
    username: "",
    email: "",
    image_url: "",
  })

  type getUserType = {
    getUser: () => void

  }

  const getUser = async () => {
    const response = await fetch('auto_login')
    const data = await response.json()
    if (response.ok) {
      localStorage.setItem("user", data)
    }
    else {
      console.log(data.error)
    }
  }


  useEffect(() => {
    getUser()
    const user = JSON.stringify(localStorage.getItem("user"))
    if (user) {
      const loggedUser = JSON.parse(user)
      setUser(loggedUser)
    }
  }, [])

  const autoLogin = () => {
    if (user) {
      return <Route path="/postpage" element={<PostPage />} />
    }
  }


  return (
    <div className="App">

      <Routes>
        {user ? <Route path="/postpage" element={<PostPage />} /> : null}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginContextProvider><LoginPage /></LoginContextProvider>} />
        <Route path="/signup" element={<SignUpContextProvider><SignUpPage /></SignUpContextProvider>} />
        <Route path="/postpage" element={<PostPage />} />
      </Routes>

    </div>
  );
}

export default App;
