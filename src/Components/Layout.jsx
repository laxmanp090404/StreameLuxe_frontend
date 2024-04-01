import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import VideoList from "./VideoList";
import Header from "./Header";

const Layout = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="bg-[rgb(26,26,26)]">
      <Header onSearch={handleSearch} />
      <div className="flex">
        <div className="w-[200px]  h-full sticky left-0 top-[50px]">
          <NavBar />
        </div>
        <div>
          <VideoList searchText={searchText} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
