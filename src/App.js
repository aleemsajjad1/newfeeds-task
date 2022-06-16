import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './routing'

const App = () => (
  <BrowserRouter>
    <AppRouting />
  </BrowserRouter>
);

export default App;
