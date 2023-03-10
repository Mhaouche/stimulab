import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Chat } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { UserContext } from '../contexts/UserContext';

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
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked } = useStateContext();
  const {user} = useContext(UserContext);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Chat" dotColor="#30f620" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />

        {isClicked.chat && (<Chat />)}
      </div>
    </div>
  );
};

export default Navbar;
