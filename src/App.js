
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Container from './components/layout/Container';

function App() {
  return (
      <Container>
        <Home />
        <Footer/>
      </Container>
  );
}

export default App;
