import React from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
  </Provider>

);

reportWebVitals();
