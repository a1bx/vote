import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import LandingPage from './landingpage/landingpage';
import IDPhotoCapture from './ captureid/captureid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/capture" element={<IDPhotoCapture />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
