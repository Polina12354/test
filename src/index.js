import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        
      }
    ]
  },
{
  path: '/about',
  element:<About/>
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

