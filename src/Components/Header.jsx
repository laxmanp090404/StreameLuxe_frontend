import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-[rgb(25,25,25)] flex items-center justify-between px-4 sticky top-0 left-0 z-10">
      <p className="logo text-white font-extrabold">STREAMLUXE</p>
      <div className="uti flex items-center gap-3">
        <div className="bg-yellow-300 size-6 flex items-center justify-center rounded-xl cursor-pointer">
          <img src="/assets/micro.png" className="size-4" />
        </div>
        <div className="searchbar relative bg-slate-700 w-[25rem] h-7 rounded-xl px-2 py-1 backdrop-blur-xl flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="bg-inherit focus:outline-none text-white w-full"
          />
          <img
            src="/assets/search.png"
            width={"20px"}
            height={"50px"}
            className="cursor-pointer"
          />
        </div>
        <div className="videoicon">
          <img
            src="/assets/camera.png"
            width={"20px"}
            height={"50px"}
            className="cursor-pointer"
          />
        </div>
        <div className="notif">
          <img
            src="/assets/notif.png"
            width={"20px"}
            height={"50px"}
            className="cursor-pointer"
          />
        </div>
        <div className="options">
          <img
            src="/assets/apps.png"
            width={"20px"}
            height={"50px"}
            className="cursor-pointer"
          />
        </div>
        <div className="profile">
          <div className="flex items-center justify-center rounded-2xl cursor-pointer">
            <img
              src="/assets/profile.png"
              className="w-[28px] h-[28px] rounded-2xl bg-yellow-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
