import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const store =createStore((state=[], action)=>{
  console.log("state", state);
  if(action.type ==="ADD"){
    return [...state, action.item];
    return state;
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
