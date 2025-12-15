import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/navgurukul.png';
const Navbar = () => {
    return (
<nav className='fixed top-0 left-0 w-full bg-white p-5 flex justify-between items-center z-[999]'>
  <div className='text-black font-bold text-2xl'>
    <Link to='/' className='no-underline'>
      <img src={logo} alt="Logo" className='h-10' />
    </Link>
  </div>
  <ul className='flex list-none m-0 p-0'>
    <li className='ml-12'><Link to="/" className='text-black hover:text-orange-300 transition-colors'>Home</Link></li>
    <li className='ml-12'><Link to="/about" className='text-black hover:text-orange-300 transition-colors'>About</Link></li>
    <li className='ml-12'><Link to="/council" className='text-black hover:text-orange-300 transition-colors'>Council</Link></li>
    <li className='ml-12'><Link to="/blog" className='text-black hover:text-orange-300 transition-colors'>Blog</Link></li>
    <li className='ml-12'><Link to="/enroll" className='text-black hover:text-orange-300 transition-colors'>Enroll</Link></li>
    <li className='ml-12'><Link to="/contact" className='text-black hover:text-orange-300 transition-colors'>Contact</Link></li>
  </ul>
</nav>

       
    );
}
export default Navbar;



