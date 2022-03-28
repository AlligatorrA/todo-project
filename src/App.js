import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="root" style={{ background: 'white' }}>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
