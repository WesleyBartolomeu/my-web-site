
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container>
          <Routes>
              <Route path="/" element={<Home />}/>
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
