
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Projetos from './components/pages/Projetos';
import Container from './components/layout/Container';



function App() {
  return (
    <Router>
      <NavBar/>
      <Container>
          <Routes>
              <Route path="/Projetos" element={<Projetos />}/>
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
