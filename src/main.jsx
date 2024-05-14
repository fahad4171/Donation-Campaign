import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './FixedLayout/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
import Donation from './Pages/Donation/Donation'
import Statistics from './Pages/Statistics/Statistics'
import DonationDetails from './Components/AllCards/DonationDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../donation.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('../donation.json')
      },
      {
        path: "/donations/:id", 
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('../donation.json')
      },
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
