import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
window.addEventListener('message', (event) => {
	console.log(event);
	console.log(JSON.stringify(event));
});
const root = window.document.getElementById('root');
ReactDOM.render(<App />, root);