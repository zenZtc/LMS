import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import {store} from "./utils/store.js"
// import bookre

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
    
)
