import React from 'react'
import Navbar from './Navbar'
import Qualification from './qualification'
import '../index.css'
import Ingrediants from './Ingrediants'
import Projects from './Projects'
import Contactus from './Contactus'
import Footer from './footer'

const Home = () => {

    return (
        <React.Fragment>
            <div className='main-div-scroll'>
                <div className='nav-wrapper z-10 fixed w-[100%] bg-white'>
                    <Navbar />
                </div>
                <div className="qualification-wrapper translate-y-14">
                    <Qualification />
                </div>
                <div className="ingrediants translate-y-14">
                    <Ingrediants/>
                </div>
                <div className='projects translate-y-14'>
                    <Projects/>
                </div>
                <div className='translate-y-14'>
                    <Contactus/>
                </div>
                <div className='translate-y-14'>
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
