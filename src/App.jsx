/* eslint-disable react/jsx-no-undef */

// import { useEffect, useReducer, useState } from "react"
import './App.css'

import Home from './Home'
// import Footer from './Footer'
import About from './About'
// import Header from './Header'
import Layout from './Layout'
import Profile from './Profile'
import Color from './Color'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Delete from './Delete'

function App() {
    const [profile, setProfile] = useState("")
    const [list, setList] = useState([])

    const handleUpdate = (e) => {
        setProfile(e.target.value)
    }
    const handlSubmit = () => {
        setList([...list, profile])
    }
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route index element={<Home list={list}/>}/>
                    <Route path='/about' element={<About list={list}/>}/>
                    <Route path='/profile' element={<Profile handleUpdate={handleUpdate} profile={profile} handlSubmit={handlSubmit} />}/>
                    <Route path='/color' element={<Color list={list}/>}/>
                    <Route path='/delete' element={<Delete list={list}/>}/>

                    </Route>
                </Routes>
            </Router>
        </div>
    )
}




export default App