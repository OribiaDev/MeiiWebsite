import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Componet CSS
import './CSS/Componets/Background.css';
import './CSS/Componets/footer.css'
import './CSS/Componets/NavBar.css';
//Webpage CSS
import './CSS/home.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

