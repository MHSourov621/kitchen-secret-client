import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header.jsx';
import Main from './component/Main/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <h1>This is banner</h1>
      },
      {
        path: "/blog",
        element: <h1>This is blog</h1>
      },
      {
        path: "/login",
        element: <h1>This is login</h1>
      },
      {
        path: "/register",
        element: <h1>This is register</h1>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
