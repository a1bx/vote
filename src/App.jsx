import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import LandingPage from './landingpage/landingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
