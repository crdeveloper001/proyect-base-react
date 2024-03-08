import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
//import ReduxCounter from '../components/08-ReduxCounters/ReduxCounter'
export const ConfigRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<ReduxCounter/>}></Route> */}
        </Routes>
    </BrowserRouter>
  )
}
