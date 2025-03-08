import { NavLink, useLocation } from "react-router-dom";
import { getStoredCardList, getStoredWishList } from "../../Utility/addToLs";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const NavBar = () => {
  const location = useLocation();
  const textClo = location.pathname === "/" ? "text-white bg-[#9538E2] border-none shadow-none" : "text-black bg-[#F6F6F6] border-none shadow-none";
  const {cardListCount}=useContext(StateContext)
  const {wishListCount}=useContext(StateContext)
  // const cardList = getStoredCardList();
  // const wishList = getStoredWishList();
  return (
    <div>
      <div className="navbar px-6 lg:px-20 py-12 relative z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost p-0 pr-2 lg:hidden ${textClo}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${textClo}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink>Statistics</NavLink>
              </li>
            </ul>
          </div>
          <a className={`text-2xl font-bold font-soar ${textClo}`}>Nexus</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={textClo} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} className={textClo}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"} className={textClo}>Statistics</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div className="flex">
            <button className="bg-white p-2 cursor-pointer rounded-full">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=48&id=85080&format=png"
                alt=""
              />
            </button>
            <div>
              <sup className="mt-1 -ml-1.5 text-red-500 font-semibold bg-white rounded-full p-0.5 px-2">
                {cardListCount.length}
              </sup>
            </div>
          </div>
          <div className="flex">
            <button className="bg-white p-2 flex  cursor-pointer rounded-full">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=48&id=28EfURiEUE1z&format=png"
                alt=""
              />
            </button>
            <div>
              <sup className="mt-1 -ml-1.5 text-red-500 font-semibold bg-white rounded-full p-0.5 px-2">
                {wishListCount.length}
              </sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
