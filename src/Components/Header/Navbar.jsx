import { FaFacebook } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiGamepadLine } from "react-icons/ri";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          {/* Logo site */}
         <div className="flex gap-2 items-center">
         <a className=" text-4xl"><FaFacebook className="text-blue-600" /></a>
          {/* search field */}
          <label className="input h-[36px] input-bordered rounded-full flex items-center gap-2">
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search Know more" />
</label>
         </div>
{/* search field end */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 gap-4 ">
            <li>
              <Link to='/layout'><button><FaHome className="text-2xl" /></button></Link>
            </li>
            <li>
              <button><MdOndemandVideo className="text-2xl" /></button>
            </li>
           
            <li>
              <button><FiShoppingBag className="text-2xl"/></button>
            </li>
            <li>
              <button><HiOutlineUserGroup  className="text-2xl"/></button>
            </li>
            <li>
              <button><RiGamepadLine  className="text-2xl"/></button>
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
          <UserMenu></UserMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
