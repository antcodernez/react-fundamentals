import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App/index';

const root = document.getElementById('root');
render(<App />, root);

// createRoot(document.getElementById('root')) de ReactDOM, se utiliza para crear una raíz que mostrará los componentes de React dentro de un elemento html o nodo DOM del navegador. Después de esto, nace .render(<App />) y se encargará de crear en el navegador, lo contenido en <App />. ¿De qué archivo viene <App />? Del App.js de la carpeta src.