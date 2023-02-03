import React from "react";
import data from "../assets/data";
import data2 from '../assets/data2';

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data2.map((item, index) => (
          <TimelineItem
            heading={item.title}
            logo={item.logo}
            date={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, logo,date, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div className="logoBox" >
      <img className="logo" src={logo} />
      <h2>{heading}</h2>
      <p>{date}</p>
    </div>
    
  </div>
);

export default Timeline;