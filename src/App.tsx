import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PostPage from "./Pages/PostPage";
import SignUpPage from "./Pages/SignUpPage";
import { SignUpContextProvider } from "./contexts/UserSignupContext";
import { LoginContextProvider } from "./contexts/UserLoginContext";



const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginContextProvider><LoginPage /></LoginContextProvider>} />
        <Route path="/signup" element={<SignUpContextProvider><SignUpPage /></SignUpContextProvider>} />
        <Route  path="/postpage" element={<PostPage />} />
      </Routes>

    </div>
  );
}

export default App;
