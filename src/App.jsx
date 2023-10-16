import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home';
import './App.css'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
