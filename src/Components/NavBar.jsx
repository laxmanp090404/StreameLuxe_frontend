import React, { useState } from "react";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? selectedItem : index);
  };

  return (
    <div className="m-0">
      <ul className="text-white bg-[rgb(26,26,26)] w-[200px] h-[680px]">
        <li
          className={`${
            selectedItem === 0 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(0)}
        >
          <span>
            <img
              src={
                selectedItem === 0
                  ? "/assets/homeblack.png"
                  : "/assets/homewhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Home</span>
        </li>
        <li
          className={`${
            selectedItem === 1 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(1)}
        >
          <span>
            <img
              src={
                selectedItem === 1
                  ? "/assets/exploreblack.png"
                  : "/assets/explorewhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Explore</span>
        </li>
        <li
          className={`${
            selectedItem === 2 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(2)}
        >
          <span>
            <img
              src={
                selectedItem === 2
                  ? "/assets/watchblack.png"
                  : "/assets/watchwhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Watch Later</span>
        </li>
        <li
          className={`${
            selectedItem === 3 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(3)}
        >
          <span>
            <img
              src={
                selectedItem === 3
                  ? "/assets/libraryblack.png"
                  : "/assets/librarywhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Library</span>
        </li>
        <li
          className={`${
            selectedItem === 4 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(4)}
        >
          <span>
            <img
              src={
                selectedItem === 4
                  ? "/assets/historyblack.png"
                  : "/assets/historywhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>History</span>
        </li>
        <li
          className={`${
            selectedItem === 5 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(5)}
        >
          <span>
            <img
              src={
                selectedItem === 5
                  ? "/assets/settingsblack.png"
                  : "/assets/settingswhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Settings</span>
        </li>
        <li
          className={`${
            selectedItem === 6 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(6)}
        >
          <span>
            <img
              src={
                selectedItem === 6
                  ? "/assets/reportblack.png"
                  : "/assets/reportwhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Report History</span>
        </li>
        <li
          className={`${
            selectedItem === 7 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(7)}
        >
          <span>
            <img
              src={
                selectedItem === 7
                  ? "/assets/helpblack.png"
                  : "/assets/helpwhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Help</span>
        </li>
        <li
          className={`${
            selectedItem === 8 ? "bg-yellow-400 text-black" : ""
          }  duration-300 cursor-pointer rounded-e-lg w-full flex items-center gap-2`}
          onClick={() => handleItemClick(8)}
        >
          <span>
            <img
              src={
                selectedItem === 8
                  ? "/assets/feedbackblack.png"
                  : "/assets/feedbackwhite.png"
              }
              width={"18px"}
              height={"18px"}
              className="m-2"
            />
          </span>
          <span>Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
