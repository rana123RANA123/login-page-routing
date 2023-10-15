import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
import Footer1 from '../../components/Footer/Footer1'

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

export default function Index() {
    return (
        <>
            <Navbar />
            <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            </main>
            <Footer1 />
        </>
    )
}
