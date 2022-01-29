import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'
import Topbar from '../layouts/Topbar'
import Sidebar from '../layouts/Sidebar'
import AuthLayout from '../layouts/AuthLayout.'
import '../assets/styles/Layout1.css'
import TrelloBoard from '../pages/TrelloBoard'

export default function AppRoutes() {
  return (
    <>
      {/* <Topbar /> */}
      <Routes>
        <Route path={'/'} element={<AuthLayout />}>
          {/* <Redirect exact from="/" to="/login" /> */}
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<Sidebar />}>
          {/* <Sidebar> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/trelloboard' element={<TrelloBoard />} />
          {/* </Sidebar> */}
        </Route>
      </Routes>
    </>
  )
}
