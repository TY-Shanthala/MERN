import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import AboutUs from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import Body from './component/Body';
import InfoPage from './pages/InfoPage';
import ShimmerCard from './commonComponents/ShimmerCard';
// import Cart from './pages/Cart';
const Cart = lazy(() => import("./pages/Cart"))
const AboutUs = lazy(() => import("./pages/AboutUs"))

const root = ReactDOM.createRoot(document.getElementById('root'));
const reactRout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<ShimmerCard />}  ><AboutUs /></Suspense>
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/infoPage/:id",
        element: <InfoPage />
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Cart /></Suspense >
      }
    ]
  },

])

root.render(
  // <React.StrictMode>
  <RouterProvider router={reactRout} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
