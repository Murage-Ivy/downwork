import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";


const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </div>
  );
}

export default App;
