import '../App.css'

import mern from '../assets/images/MERN/MERN.png'

const Qualification = () => {
    return (
        <main className='w-[90%] m-auto flex flex-col justify-center items-center min-h-[calc(100vh-56px)]'>
            <div className='w-[70%] md:w-[60%] lg:w-[50%] flex flex-col items-center justify-center'>
                <h1 className={`text-7xl md:text-8xl stylishFont colorfull`}>Bilal</h1>
                <h2 className={`text-lg md:text-xl lg:text-3xl colorfull`}>Full Stack/MERN Stack Developer</h2>
                <div>
                    <img className='w-44 lg:w-60' src={mern} alt='mern' />
                </div>
            </div>
        </main>
    )
}

export default Qualification;
