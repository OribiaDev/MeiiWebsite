//Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Componets
import NavBar from "./Components/NavBar";
import Home from './WebPages/Home';
import InviteBanner from './Components/InviteBanner';
import Footer from './Components/Footer';
import Commands from './WebPages/Commands';
import Redirect from './Components/Redirect';

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
          <Route path="/discord" element={<Redirect link="https://discord.gg/E23tPPTwSc" />} />
          <Route path="/invite" element={<Redirect link="https://discord.com/oauth2/authorize?client_id=1082401009206308945&permissions=2147773446&scope=applications.commands%20bot" />} />
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
