import React, { useState } from "react";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div className="m-0">
      <ul className="text-white bg-[rgb(26,26,26)] w-[200px] h-[680px]">
        <li
          className={`${
            selectedItem === 0 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(0)}
        >
          <span></span>
          <span>Home</span>
        </li>
        <li
          className={`${
            selectedItem === 1 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(1)}
        >
          <span></span>
          <span>Explore</span>
        </li>
        <li
          className={`${
            selectedItem === 2 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(2)}
        >
          <span></span>
          <span>Watch Later</span>
        </li>
        <li
          className={`${
            selectedItem === 3 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(3)}
        >
          <span></span>
          <span>Library</span>
        </li>
        <li
          className={`${
            selectedItem === 4 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(4)}
        >
          <span></span>
          <span>History</span>
        </li>
        <li
          className={`${
            selectedItem === 5 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(5)}
        >
          <span></span>
          <span>Settings</span>
        </li>
        <li
          className={`${
            selectedItem === 6 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(6)}
        >
          <span></span>
          <span>Report History</span>
        </li>
        <li
          className={`${
            selectedItem === 7 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(7)}
        >
          <span></span>
          <span>Help</span>
        </li>
        <li
          className={`${
            selectedItem === 8 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full`}
          onClick={() => handleItemClick(8)}
        >
          <span></span>
          <span>Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
