import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './components/Header'
import Body from './components/Body'
import { db } from "./mock/products.mock"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header />
   <Body data={ db } key={db.id}/>
  </React.StrictMode>,
)
