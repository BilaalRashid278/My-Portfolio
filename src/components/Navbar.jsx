import '../App.css'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../images/portfolio.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeIconsClass,changeHidden,AddProjectHidden } from '../features/reducer.js'

const Navbar = () => {
  const IconClass = useSelector(state => state.RotateIconSlice);
  const changeHiddenClass = useSelector(state => state.MenuHidden);
  const dispatch = useDispatch();
  const AddProjectFunction = () => {
    dispatch(AddProjectHidden());
    dispatch(changeHidden());
  };
  return (
    <nav className='text-emerald-950 h-[56px] relative flex justify-between w-[90%] m-auto items-center'>
      <div className="logo">
        <img src={logo} width={150} alt="Portfolio" />
      </div>
      <div>
        <ul className='hidden lg:flex gap-2 text-sm'>
          <li className='px-3 py-2 transition-all duration-1000 hover:bg-[#075985] hover:text-white rounded-sm'><a href="#ingrediants">Ingrediants</a></li>
          <li className='px-3 py-2 transition-all duration-1000 hover:bg-[#075985] hover:text-white rounded-sm'><Link to='/'>Projects</Link></li>
          <li className='px-3 py-2 transition-all duration-1000 hover:bg-[#075985] hover:text-white rounded-sm'><Link to='/'>Contact</Link></li>
          <li onClick={AddProjectFunction} className='px-4 py-2 rounded-sm transition-all duration-1000 bg-[#075985] text-white hover:bg-blue-500 cursor-pointer border-none'><Link to='/'>Add Project</Link></li>
        </ul>
        <div onClick={() => {
          dispatch(changeIconsClass());
          dispatch(changeHidden());
        }} className="menu font-bold lg:hidden hover:bg-[#075985] flex items-center hover:text-white px-3 py-1 rounded cursor-pointer">
          <h4>Menu</h4>
          <span className='mt-1 text-lg'>
            <MdOutlineKeyboardArrowUp className={`${IconClass}`} />
          </span>
        </div>
      </div>
      <div className={`w-[150px] ${changeHiddenClass} border z-50 bg-white border-black absolute right-0 top-12 rounded lg:hidden`}>
        <ul className='lg:flex gap-2 text-sm'>
          <li className='px-3 py-2 cursor-pointer transition-all duration-500 hover:bg-[#075985] hover:text-white'><Link to='/'>Ingrediants</Link></li>
          <li className='px-3 py-2 cursor-pointer transition-all duration-500 hover:bg-[#075985] hover:text-white'><Link to='/'>Projects</Link></li>
          <li className='px-3 py-2 cursor-pointer transition-all duration-500 hover:bg-[#075985] hover:text-white'><Link to='/'>Contact</Link></li>
          <li onClick={AddProjectFunction} className='px-4 cursor-pointer py-2 transition-all duration-500 bg-[#075985] text-white hover:bg-blue-500 border-none'><Link to='/'>Add Project</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
