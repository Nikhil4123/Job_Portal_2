/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';

const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },{
    path:'/Jobs',
    element:<Jobs/>
  },{
    path:'/browse',
    element:<Browse/>
  },{
    path:'/profile',
    element:<Profile/>
  },{
    path:'/description/:id',
    element:<JobDescription/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
