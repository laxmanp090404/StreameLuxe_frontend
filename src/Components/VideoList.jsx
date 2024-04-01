import React, { useState, useEffect } from "react";

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
        <span className="absolute top-2 right-2 bg-black rounded-lg text-white px-2">
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

const VideoList = ({ searchText }) => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    fetch("https://ypapi.formz.in/api/public/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter((video) =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredVideos(filtered);
    }
  }, [searchText, videos]);

  return (
    <div className="video-list flex flex-wrap gap-10 p-[30px] bg-[rgb(25,25,25)] text-white m-0">
      {filteredVideos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
