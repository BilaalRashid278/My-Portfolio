import '../App.css'
import mern from '../assets/images/MERN/MERN.png'
import AddProject from './AddProject';
import {useSelector} from 'react-redux'

const Qualification = () => {
    const AddPrject = useSelector(state => state.AddProject);
    return (
        <main className='w-[90%] m-auto flex flex-col justify-center pt-16 items-center min-h-[calc(100vh-56px)]'>
            <div className='w-[70%] md:w-[60%] lg:w-[50%] p-5 flex flex-col items-center justify-center'>
                <h1 className={`text-7xl md:text-8xl stylishFont colorfull`}>Bilal</h1>
                <h2 className={`text-base sm:text-lg md:text-xl lg:text-3xl colorfull`}>Full Stack/MERN Stack Developer</h2>
                <div>
                    <img className='w-44 lg:w-60' src={mern} alt='mern' />
                </div>
            </div>
            <div className={`absolute z-30 w-[80%] md:w-[50%] lg:w-[40%] h-[400px] rounded bg-[#075985] top-5 ${AddPrject} AddProjectTransition`}>
                <AddProject/>
            </div>
        </main>
    )
}

export default Qualification;
