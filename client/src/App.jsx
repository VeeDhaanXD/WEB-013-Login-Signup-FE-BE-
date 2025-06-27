import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './Login';
import Home from './Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="/home" element={<Home />} />
          <Route path="*" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
