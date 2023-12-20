import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { States } from './States.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <States>
      <App />
    </States>
  </React.StrictMode>,
)
