import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Notes from './pages/notes/Notes';

function App() {
  const [count, setCount] = useState(0);

  const Layout = () =>{
    return (
      <div className='app'>
        <Home />
      </div>
    )
  };
  const router = createBrowserRouter([
    {
      path: "/",
       element: <Layout />,
       Children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/notes",
          element: <Notes />,
        }
       ]
    },
    {
      path: "/notes",
       element: <Notes />,
       Children: []
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
