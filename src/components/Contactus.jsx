import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react'
const Contactus = () => {
  const getElementIDRef = useRef(null);
  return (
    <div ref={getElementIDRef} id='contact'>
      <section className='w-[90%] m-auto'>
        <div>
            <div className='my-2'><h1 className='font-bold text-2xl'>Contact</h1></div>
            <div>
                <button className='border px-3 my-2 flex justify-around items-center hover:bg-pink-100 transition-all duration-1000'>
                    <AiFillGithub className='text-4xl inline-block text-start'/>
                    <h3 className='inline-block font-semibold'>GitHub</h3>
                </button>
                <button className='border px-3 my-3 flex justify-around items-center hover:bg-pink-100 transition-all duration-1000'>
                    <AiFillLinkedin className='text-4xl inline-block text-start'/>
                    <h3 className='inline-block font-semibold'>Linkedin</h3>
                </button>
                <button className='border px-3 my-3 flex justify-around items-center hover:bg-pink-100 transition-all duration-1000'>
                    <MdEmail className='text-4xl inline-block text-start'/>
                    <h3 className='inline-block font-semibold'>bilaalrashid5566@gmail.com</h3>
                </button>
            </div>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Contactus
