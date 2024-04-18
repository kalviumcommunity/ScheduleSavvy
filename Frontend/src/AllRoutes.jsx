import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Signup'
import TitlePage from './Components/TitlePage'
import Layout from './Components/Layout'
import ForgetPassword from './Components/ForgetPassword'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TitlePage/>}></Route>
            <Route path='/signup' element={<Layout><Signup/></Layout>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
        </Routes>
    </div>
  )
}
