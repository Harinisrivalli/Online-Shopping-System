import { StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const NotFound = lazy(()=>import("./components/NotFound.jsx"));
const Cart = lazy(()=>import("./components/Cart.jsx"));
const ProductDetail = lazy(()=>import("./components/ProductDetail.jsx"));
const ProductItem = lazy(()=>import("./components/ProductItem.jsx"));
const Products = lazy(()=>import("./components/Products.jsx"));
const Home = lazy(()=>import("./components/Home.jsx"));
const Login = lazy(()=>import("./components/Login.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <Suspense fallback={<div>Loading</div>}><Home/></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense fallback={<div>Loading</div>}><Cart/></Suspense>
      },
      {
        path: "/products",
        element: <Suspense fallback={<div>Loading</div>}><Products/></Suspense>
      },
      {
        path:"/products/:id",
        element: <Suspense fallback={<div>Loading</div>}><ProductDetail/></Suspense>
      },
      {
        path:"/login",
        element: <Suspense fallback={<div>Loading</div>}><Login/></Suspense>
      }
    ],
    errorElement: <NotFound/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
