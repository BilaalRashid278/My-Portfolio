import '../App.css'
import mern from '../assets/images/MERN/MERN.png'
import AddProject from './AddProject';
import { useRef } from 'react';
import {useSelector} from 'react-redux'

const Qualification = () => {
    const AddPrject = useSelector(state => state.AddProject);
    const AnimationRef = useRef(null);
    return (
        <main id='home' ref={AnimationRef} className='w-[90%] m-auto flex flex-col justify-center pt-16 items-center min-h-[calc(100vh-56px)] qualification-aimations'>
            <div onMouseOut={()=>{
            AnimationRef.current.style.transform = 'rotateY(0deg)';
            AnimationRef.current.style.transitionProperty = 'transform';
            AnimationRef.current.style.transitionDuration = '1.5s';
            console.log('mouse out')
        }} onMouseOver={() => {
            AnimationRef.current.style.transform = 'rotateY(360deg)';
            AnimationRef.current.style.transitionProperty = 'transform';
            AnimationRef.current.style.transitionDuration = '1.5s';
        }} className='w-[70%] md:w-[60%] lg:w-[50%] p-5 flex flex-col items-center justify-center'>
                <h1 className={`text-7xl md:text-8xl stylishFont colorfull`}>
                    Bilal
                </h1>
                <h2 className={`text-base sm:text-lg md:text-xl lg:text-3xl colorfull`}>Full Stack/MERN Stack Developer</h2>
                <div>
                    <img className='w-44 lg:w-60' src={mern} alt='mern' />
                </div>
            </div>
            <div className={`absolute z-30 w-[80%] md:w-[50%] lg:w-[40%] h-[400px] rounded bg-[#075985] top-10 ${AddPrject} AddProjectTransition`}>
                <AddProject/>
            </div>
        </main>
    )
}

export default Qualification;
