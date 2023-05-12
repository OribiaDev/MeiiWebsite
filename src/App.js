//Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//WebPages
import Home from "./WebPages/Home";
import Four04 from "./WebPages/404";
import PrivacyPolicy from "./WebPages/privacy-policy";
import TermsOfService from "./WebPages/terms-of-service";

//Componets
import Footer from "./Componets/footer";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
            <Route path="/terms-of-service" element={<TermsOfService />} /> 
            <Route path="*" element={<Four04 />} />
          </Routes>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

