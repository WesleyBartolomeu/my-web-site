import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Projetos from './components/pages/Projetos';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';



function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Contato" element={<Contato />}/>
            <Route path="/Projetos" element={<Projetos />}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
