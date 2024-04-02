import { videoFail, videoRequest, videoSuccess } from "../Slices/VideoSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const VideoList = ({ searchText }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.videoState);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    dispatch(videoRequest());
    fetch("https://ypapi.formz.in/api/public/videos")
      .then((response) => response.json())
      .then((data) => {
        dispatch(videoSuccess({ videos: data }));
      })
      .catch((error) => {
        dispatch(videoFail(error));
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    const filterVideos = () => {
      let filtered = videos;
      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (video) =>
            video.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      if (searchText.trim() !== "") {
        filtered = filtered.filter((video) =>
          video.title.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      setFilteredVideos(filtered);
    };

    filterVideos();
  }, [selectedCategory, searchText, videos]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const VideoCard = ({
    title,
    thumbnail,
    channelPicture,
    channelName,
    category,
    duration,
    views,
    uploadedDateTime,
  }) => {
    return (
      <div className="video-card bg-inherit">
        <div className="thumbnail relative w-[20rem] h-[12rem] mb-14">
          <img
            src={thumbnail}
            alt={title}
            title={title}
            className="w-[20rem] h-[12rem] rounded-xl "
          />
          <p className="p-2">{title}</p>
          <span className="absolute top-2 right-2 bg-[rgb(26,26,26)] rounded-lg text-white px-2">
            {duration}
          </span>
        </div>

        <div className="video-info flex flex-col gap-1 mt-1">
          <div className="channel-info flex items-center gap-1">
            <img
              src={channelPicture}
              alt={channelName}
              title={channelName}
              className="w-[48px] h-[48px] rounded-3xl"
            />
            <div className="videoinnerdetails">
              <span className="channel-name text-[10px]">{channelName}</span>
              <div className="text-[5px] flex gap-2">
                <span>{views}</span>
                <span>{new Date(uploadedDateTime).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex w-[300px] justify-between ml-10">
        <button
          className={` ${
            selectedCategory === "All"
              ? "bg-yellow-300 text-[rgb(0,0,0)] rounded-lg px-[10px] py-1"
              : "bg-rgb(26,26,26) text-white"
          }`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        <button
          className={` ${
            selectedCategory === "gaming"
              ? "bg-yellow-300 text-[rgb(0,0,0)] rounded-lg p-1"
              : "bg-[rgb(26,26,26)] text-white"
          }`}
          onClick={() => handleCategoryChange("gaming")}
        >
          Gaming
        </button>
        <button
          className={` ${
            selectedCategory === "music"
              ? "bg-yellow-300 text-[rgb(0,0,0)] rounded-lg p-1"
              : "bg-[rgb(26,26,26)] text-white"
          }`}
          onClick={() => handleCategoryChange("music")}
        >
          Music
        </button>
        <button
          className={` ${
            selectedCategory === "tech"
              ? "bg-yellow-300 text-[rgb(0,0,0)] rounded-lg p-1"
              : "bg-rgb(26,26,26) text-white"
          }`}
          onClick={() => handleCategoryChange("tech")}
        >
          Tech
        </button>
      </div>
      {loading ? (
        <div className="video-list flex flex-wrap gap-10 p-[30px] bg-[rgb(26,26,26)] text-white m-0">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      ) : (
        <div className="video-list flex flex-wrap gap-10 p-[30px] bg-[rgb(26,26,26)] text-white m-0">
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      )}
    </>
  );
};

export default VideoList;
