import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './pages/Home/home.tsx'
import Pagina1 from './pages/Pagina1/pagina1.tsx'
import './index.css'

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/Pagina1",
    element: <Pagina1/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
