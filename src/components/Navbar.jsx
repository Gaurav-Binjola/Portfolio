import {logo} from '../assets'
import {FaBars, FaTimes } from 'react-icons/fa'
import { navLinks,appLinks } from '../assets/constants'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

    const[toggle,setToggle] = useState(false)

    const handleToggle = () => {
        return (
            setToggle(!toggle)
        )
    }

  return (
    <div className="fixed w-full h-[80px] flex flex-1 gap-[40%] items-center px-4 bg-[#0a192f] text-gray-300 ">
        <div>
            <img  src={logo} alt="logo" width={80} />
        </div>
        
        
        <ul className="hidden md:flex ">
            {navLinks.map((link) => (
                <a href={link.href}>
                    <li className="">
                        <Link  to={link.href}  smooth={true}  duration={500}>
                            {link.label}
                        </Link>
                    </li>
                </a>
            ))}
        </ul>
        
        {/* hambergure*/}
        <div className=" md:hidden z-10 top-10 right-10 absolute"
             onClick={handleToggle}
        >
            { !toggle ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu*/}
        <ul className={` ${toggle ? 'flex flex-col justify-center items-center h-screen w-full absolute top-0 left-0 bg-[#0a192f]' : 'hidden '}`}>
            {navLinks.map((link) => (
                <a href={link.href}>
                    <li className="py-6 text-4xl  " >
                        <Link  to={link.href}  smooth={true}  duration={500}>
                            {link.label}
                        </Link>
                    </li>
                </a>
            ))}
        </ul>
        {/* social icons */}
        <div className="hidden lg:flex fixed flex-row top-[35%] left-0">
            <ul className="flex flex-col">
                {appLinks.map((link) => (
                    <li key={link.label} className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] " >
                        <a href={link.href} className="flex justify-between items-center w-full">
                            <p> {link.label} </p>
                            <img src={link.icon} width={30} height={30} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar