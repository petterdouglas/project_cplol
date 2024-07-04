import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/main.sass'
import MainPage from './routes/MainPage.jsx'
import Form from './routes/Form.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Awards from './components/Awards.jsx'
import Schedule from './components/Schedule.jsx'
import HowPage from './components/HowPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'form',
        element: <Form />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
