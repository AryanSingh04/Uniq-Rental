import React, { useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { li } from '../constants';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
      }
    ); }, []);

  useEffect(()=>{
    document.body.classList[isOpen ? 'add' : 'remove']('overflow-hidden');
    // return ()=>{
    // document.body.classList.remove('overflow-hidden');
    // }
  },[isOpen])

  return (
    <div className="relative">
      <div className={`w-[100vw] h-[8vh] md:h-[10vh] flex items-center justify-between overflow-x-hidden`} ref={navRef}>
        <p className="text-black text-2xl font-bold ml-8">
          <Link to="/">
            UNIQ<span className="text-orange-500 font-serif">Rental</span>
          </Link>
        </p>
        <div className="lg:hidden block">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.4} className="" />
        </div>
        <ul className="mr-8 gap-5 items-center justify-center text-center hidden font-bold lg:flex">
          {li.map((e, i) => {
            return (
              <li key={i} className="mr-6 text-center cursor-pointer hover:text-orange-500 group">
                <Link key={i} to={e.path}>
                  {e.value}
                </Link>
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </li>
            );
          })}

          {/* <li className=" cursor-pointer">
            <div className="bg-black text-white py-5 px-6 rounded-full h-8 w-35 flex  border-white border-4 items-center group hover:bg-white hover:border-black hover:border-4">
              <img
                className="w-3 mr-2 mt-0.5 group-hover:invert"
                src="https://imgs.search.brave.com/t4J2Es-Uj4dEd27_sJQG6gr7GuZzqGKx6OIi2MuZbzA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/YXBwbGUtcGF5L3Ev/aW1hZ2VzL292ZXJ2/aWV3L2xvZ29fYXBw/bGVfX2NsdGxmYTd4/dmU4Ml9sYXJnZS5w/bmc"
                alt="Download App"
              />
              <p className="font-semibold group-hover:text-black md:text-sm">Download App</p>
            </div>
          </li> */}
        </ul>
      </div>

      <div
        className={`w-[100vw] h-[92vh] mt-[8vh] absolute z-20  top-0 transition-all duration-300 bg-[rgba(255,255,255,0.42)] backdrop-blur-sm ${
          isOpen ? 'left-0' : '-left-[100%]'
        } lg:hidden overflow-hidden`}
      >
        <ul className="w-full h-full flex flex-col items-center justify-center">
          {li.map((e) => {
            return (
              <li className="text-black mt-8 font-bold text-2xl group" key={e.value}>
                <Link to={e.path} onClick={() => setOpen(!isOpen)}>
                  {e.value}
                </Link>
                <div className="bg-amber-500 h-[4px] w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
