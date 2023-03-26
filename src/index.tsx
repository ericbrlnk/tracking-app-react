import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
// Test scripts
import test from './Test';
import addWithUnion from './TestUnionType';
import stringLiterals from './TestStringLiterals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

test();
let result = addWithUnion("4", "1");
console.log(result);
stringLiterals();