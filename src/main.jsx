import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './home.jsx'
import Projects from "./projects.jsx"
import Resume from './Resume.jsx'
import Aboutme from './aboutme.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
      <Route path="/aboutme" element={<Aboutme/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
