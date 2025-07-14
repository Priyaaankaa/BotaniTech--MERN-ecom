import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WidgetSection from './components/WidgetSection';
import Cart from './components/Cart';
import SignupPage from './components/SignupPage';
import Login from './components/Login';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[{
      path:"/",
      element: <WidgetSection />,
  },
  {
    path:"/cart",
    element: <Cart />,
},
{
  path:"/signup",
  element: <SignupPage />,
},
{
  path:"/login",
  element: <Login />,
},
]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
