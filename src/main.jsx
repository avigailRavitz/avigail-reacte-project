import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login.jsx';
import Admin from './components/admin/Admin.jsx';
import User from './components/user/User'
import Services from './components/services/Services'
import Meeting from './components/meeting/Meeting'
import Meetings from './components/meetings/Meetings.jsx'
const router = createBrowserRouter([

  {
    path: '/',
    element: <User />,
    errorElement: <div>error App</div>,
  },
  {
    path: '/admin',
    element: <Admin/>,
    errorElement: <div>error Admin</div>,   
    children: [
        {
            path:'',
            element: <div></div>,
        },
   
      {
        path: 'meeting',
        element:<Meetings/>,
        errorElement: <div>error MeetingPopup not found</div>
      }
      ,
         {
        path: 'services',
        element: <Services/>,
        errorElement: <div>error ServicesPopup not found</div>
      }
    ]


  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)








