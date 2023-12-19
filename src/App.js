
import './App.css';
import About from './Components/About/About';
import { Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (

    <div className='App'>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />


  </Routes>
  </div>
  );
}

export default App;
