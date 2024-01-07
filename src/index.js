import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//CSS - Pages
import './CSS/content.css'
import './CSS/Pages/Home.css'
import './CSS/Pages/Commands.css'
import './CSS/Components/Redirect.css'
import './CSS/Pages/Four04.css'
import './CSS/Pages/TOS.css'
import './CSS/Pages/PrivacyP.css'

//CSS - Components
import './CSS/Components/NavBar.css'
import './CSS/Components/InviteBanner.css'
import './CSS/Components/Footer.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



