import { Routes, Route } from "react-router-dom";
import './App.css';
import { useTheme } from "./Components/Context/theme-context";
import Footer from './Components/footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const { theme } = useTheme()
  return (
    <div className="root" style={{
      background: theme === 'light' ? '#f1f5f9' : '#15141a',
      color: theme === 'light' ? "#15141a" : "white"
    }}>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
