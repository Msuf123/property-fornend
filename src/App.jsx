import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './Routes/Home/Home'
import PropertyDetailPage from './Routes/Details/Details'
import SignUpPage from './Routes/Sign-up/Sign-up'
import LoginPage from './Routes/Login/Login'
import ProfilePage from './Routes/Profile/Profile'

function App() {
 const route=createBrowserRouter(createRoutesFromElements(
   <>
     <Route path="/" element={<HomePage />} />
     <Route path="/property/:id" element={<PropertyDetailPage />} />
     <Route path="/signup" element={<SignUpPage />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/profile" element={<ProfilePage />} />
   </>
 ))

   return < RouterProvider router = { route } />
}

export default App
