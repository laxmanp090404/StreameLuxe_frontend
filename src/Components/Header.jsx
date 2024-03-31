import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-black flex items-center justify-between">
      <p className="logo text-white font-extrabold pl-1">ANYVIEW</p>
      <div className="uti">
        <div className="bg-yellow-300 size-6 flex items-center justify-center rounded-xl cursor-pointer"><img src="/assets/notif.png" className="size-4"/></div>
           
      </div>
    </div>
  );
};

export default Header;
