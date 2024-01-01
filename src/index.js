import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//CSS
import './CSS/content.css'
import './CSS/Components/NavBar.css'
import './CSS/Pages/Home.css'
import './CSS/Components/InviteBanner.css'
import './CSS/Components/Footer.css'
import './CSS/Pages/Commands.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



