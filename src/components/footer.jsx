import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-[100%] bg-black">
      <div className=' text-white flex justify-around flex-col lg:flex-row items-center gap-2  py-4'>
        <div className=" w-[100%] text-center lg:text-start lg:w-[25%]">
          <h1 className="joiningFont font-extrabold text-3xl mb-3">Bilal Rashid</h1>
          <hr className=" w-[80%] m-auto lg:m-0 md:w-[70%]" />
          <h3 className="joiningFont font-bold text-lg mb-3">Contact Infromation</h3>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>
        <div className="w-[100%] my-5 lg:w-[15%] flex lg:flex-col flex-wrap lg:flex-nowrap gap-5 lg:gap-0 justify-center text-xs">
          <div>
            <h1 className="mb-3 cursor-pointer lg:text-lg">Site Map</h1>
          </div>
          <div>
            <h5 className="cursor-pointer">My Bussiness</h5>
          </div>
          <div>
            <h5 className="cursor-pointer">My Products</h5>
          </div>
          <div>
            <h5 className="cursor-pointer">My Services</h5>
          </div>
          <div>
            <h5 className="cursor-pointer">Gallery</h5>
          </div>
          <div>
            <h5 className="cursor-pointer">Contact</h5>
          </div>
          <div>
            <h5 className="cursor-pointer">Support</h5>
          </div>
        </div>
        <div className="w-[25%] flex flex-col">
          <div className="w-[100%] flex justify-center m-auto ">
            <input className="w-[100%] min-w-[200px] rounded-sm text-black outline-none border-none px-3" type="text" placeholder="Enter Address" />
          </div>
          <div>
            <button className="px-5 py-1 rounded-sm font-bold bg-white text-black my-3">Subscribe</button>
          </div>
          <div className="icon text-white flex gap-3">
            <button className='rounded-full text-xl'>
              <BsFacebook />
            </button>
            <button className='rounded-full text-xl'>
              <BsYoutube />
            </button>
            <button className='rounded-full text-xl'>
              <AiFillTwitterCircle />
            </button>
            <button className='rounded-full text-xl'>
              <MdEmail />
            </button>
          </div>
        </div>
      </div>
      <div className='text-white text-center'>
        <h1>Copyright &copy; 2023</h1>
      </div>
    </footer>
  )
}

export default Footer
