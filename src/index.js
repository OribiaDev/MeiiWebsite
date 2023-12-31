import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Componet CSS
import './CSS/Componets/Background.css';
import './CSS/Componets/footer.css'
import './CSS/Componets/NavBar.css';
//Webpage CSS
import './CSS/home.css'
//Box's CSS
import './CSS/Boxes/Box1.css'
import './CSS/Boxes/Box2.css'
import './CSS/Boxes/Box3.css'
import './CSS/Boxes/CommandBoxes.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

