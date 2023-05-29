
// import './App.css'
// import Navbar from './components/Navbar';
import Signup from './components/Signup';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Service from './routes/Service';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
    {/* <Navbar> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
    {/* </Navbar> */}
   </Router>
   </>
  );
}

export default App;
