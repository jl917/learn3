import React from 'react'
import { createRoot } from 'react-dom';
import App from './App';
import Left from './Left';

const root = createRoot(document.getElementById('root'));

const left = createRoot(document.getElementById('left'));

root.render(<App />)

left.render(<Left />)