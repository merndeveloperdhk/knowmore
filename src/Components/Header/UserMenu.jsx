import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

const UserMenu = () => {
  return (
    <div>
      <div className="navbar bg-base-100 gap-1">
        <div className="flex-1">
          <button className="text-2xl bg-slate-200 hover:bg-slate-300 duration-500 w-10 h-10 rounded-full flex justify-center items-center">
            <BsGrid3X3Gap />
          </button>
        </div>
        <div className="flex-1 relative">
          <button className="text-2xl bg-slate-200 hover:bg-slate-300 duration-500 w-10 h-10 rounded-full flex justify-center items-center">
            <AiOutlineMessage />
          </button>
          <div className="badge badge-secondary absolute -top-2 -right-2">+9</div>
        </div>
        <div className="flex-1">
          <button className="text-2xl bg-slate-200 hover:bg-slate-300 duration-500 w-10 h-10 rounded-full flex justify-center items-center">
            <FaBell />
          </button>
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/RbXMZbC/274546135-275891504689327-3686559119234008270-n.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
