import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
//import Main from './components/Main';
import Home from './components/Home';
import Specials from './components/Specials';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/specials" element={<Specials />} />
                <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer/>
 </>
  );
}

export default App;
