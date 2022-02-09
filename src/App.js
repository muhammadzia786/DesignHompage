import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home"
function App() {
  return (
    <>
    <Routes>
      <Header />
      <Sidebar />
      <Route path="/" element={<Home />} />
      
  
    </Routes>


  </>
  );
}

export default App;
