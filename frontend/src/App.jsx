import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
