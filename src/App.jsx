import { Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import LandingPage from './components/landingpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Login></Login> */}
      {/* <LandingPage></LandingPage>
      <Signup></Signup> */}
    </div>
  );
}

export default App;
