import React from "react";
import NavBar from "./NavBar";
import VideoList from "./VideoList";
const Layout = () => {
  return (
    <div className="flex">
      <div className="w-[400px] bg-red-50 h-full sticky left-0 top-[50px]">
        <NavBar />
      </div>
      <div>
        <VideoList />
      </div>
    </div>
  );
};

export default Layout;
