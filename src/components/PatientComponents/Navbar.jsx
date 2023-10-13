import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
//import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../../data/PatientData/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "../PatientComponents"
import { useStateContext } from "../../contexts/PatientContext/ContextProvider";
import './Navbar.css';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    
        
        
      <div className="navbar-bg">
     
      <div className="navbar-upper container mx-auto flex flex-row justify-start gap-32">
      <NavButton
      title="Menu"
      customFunc={handleActiveMenu}
      color={currentColor}
      icon={<AiOutlineMenu />}
    />
        <div className="nav-links flex-1 flex flex-row gap-32 text-center text-16">
          <div className="link">
            <div className="text">Find Doctors</div>
          </div>
          <div className="link1">
            <div className="text">Video Consult</div>
          </div>
          <div className="link1">
            <div className="text">Medicines</div>
          </div>
          <div className="link1">
            <div className="text">Lab Tests</div>
          </div>
          <div className="link1">
            <div className="text">Surgeries</div>
          </div>
        </div>
        <div className="cta flex items-center justify-start gap-16 text-14">
          <div className="text">Log In</div>
          <div className="button flex items-center">
            <img className="cart-plus-icon relative w-20 h-20 overflow-hidden flex-shrink-0" alt="" src="/cartplus.svg" />
            <div className="text">Sign up</div>
            <img className="cart-plus-icon relative w-20 h-20 overflow-hidden flex-shrink-0" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
    </div>
      

        
        
      
  );
};

export default Navbar;
