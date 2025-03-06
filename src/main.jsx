import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import { ContextProvider } from './context/StateContext.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/gadgetDetails/:productId',
        element:<GadgetDetails></GadgetDetails>,
        loader:()=>fetch('/gadgets.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=>fetch('/gadgets.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

     <RouterProvider router={router} />
     <ToastContainer 
      autoClose={1000}
     />
    </ContextProvider>
  </StrictMode>,
)
