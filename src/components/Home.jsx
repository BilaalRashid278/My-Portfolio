import React from 'react'
import Navbar from './Navbar'
import Qualification from './qualification'
import '../index.css'
import Ingrediants from './Ingrediants'
import Projects from './Projects'

const Home = () => {
   
    return (
        <React.Fragment>
            <div>
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
            </div>
        </React.Fragment>
    )
}

export default Home
