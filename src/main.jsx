import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main.jsx';
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Recipe from './component/Recipe/Recipe.jsx';
import PrivateRout from './component/PrivateRout/PrivateRout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <h1>This is blog</h1>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/recipe/:id",
        element: <PrivateRout><Recipe></Recipe></PrivateRout>,
        loader: ({params}) => fetch(`https://server-mu-dun.vercel.app/allData/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
