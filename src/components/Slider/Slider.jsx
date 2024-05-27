import React from "react";
import { useState,useEffect } from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rigthChevron from "../../assets/right-arrow.svg";
import "./Slider.css";
import SliderData from "../../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toogleImage(indexPayload){
    let newState
    if(indexPayload + sliderIndex > SliderData.length){
      newState = 1
    }
    else if(indexPayload + sliderIndex < 1) {
      newState = SliderData.length
    }
    else {
      newState = indexPayload + sliderIndex
    }
    setSliderIndex(newState)

  }
  useEffect(()=> {
    const intervalID = setInterval(()=> toogleImage(1),2000)

    return () => clearInterval(intervalID)

  },[sliderIndex])
  return (
    <>
      <p className="index-info">
        {sliderIndex} / {SliderData.length}{" "}
      </p>
      <div className="slider">
        <p className="image-info">
          {SliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-image"
        />
        <button
        onClick={()=>toogleImage(-1)}
        className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button 
        onClick={()=>toogleImage(1)}
        className="navigation-button next-button">
          <img src={rigthChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
