import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { title: "Home", path: "/Home" },
    { title: "About", path: "/About" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div>
      <div className="md:px-[70px]">
        <div className="flex justify-between h-16 items-center text-white">
          <h1 className="text-2xl md:pl-6  pl-4 font-bold">VAHAN</h1>
          <div className="hidden text-white font-bold md:flex text-lg">
            {links.map((data) => (
              <NavLink to={data.path}
              style={({isActive})=> {
                return {
                  color: isActive? '#E63946':"white"
                }
              }}
              >
                <ul className="md:flex hidden md:pr-8 pr-6 hover:cursor-pointer">
                  <li key={Math.random()}>{data.title}</li>
                </ul>
              </NavLink>
            ))}
          </div>
          <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-xl text-white cursor-pointer pr-5 z-10"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-2xl font-bold bg-zinc-950">
            {links.map((data) => (
              <NavLink to={data.path}
              style={({isActive})=> {
                return {
                  color: isActive? '#E63946':"white"
                }
              }}
              >
                <ul >
                  <li key={Math.random()}className="my-5">{data.title}</li>
                </ul>
              </NavLink>
               ))}
               </div>
             )}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
