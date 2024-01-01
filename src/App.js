//Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Componets
import NavBar from "./Components/NavBar";
import Home from './WebPages/Home';
import InviteBanner from './Components/InviteBanner';
import Footer from './Components/Footer';
import Commands from './WebPages/Commands';

//Pages

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/commands" element={<Commands />}/>
          <Route path="/privacy-policy" element={<h1>PP</h1>} />
          <Route path="/terms-of-service" element={<h1>TOS</h1>} />
          <Route path="/discord" element={<h1>discord server</h1>} />
          <Route path="/invite" element={<h1>bot invite</h1>} />
          <Route path="*" element={<h1>404</h1>} status={404}/>
        </Routes>
        <InviteBanner />
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
