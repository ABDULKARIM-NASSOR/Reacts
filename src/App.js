import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Helps from './Helps';
import Home from './Home';
import Login from './Login';
 
import SignupPage from './SignupPage';
import Votes from './Votes';
import Navbar from './Navbar';
import Message from './Message';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Assuming Navbar is part of the layout and not a route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/helps" element={<Helps />} />
           
          <Route path="/votes" element={<Votes />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
