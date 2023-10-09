import React from "react";
import "./Gallery.css";
import Rifel from "../Image/rifeldrill1.jpeg"
import Heli from "../Image/heli.jpeg"
import PMralley from "../Image/pmralley.jpeg"
import Boat1 from "../Image/boat1.jpeg"
import Thug from '../Image/thug1.jpeg'
// import Nccgallery from '../Image/How-to-join-Indian-Navy.jpg'
const Gallery = () => {
  return (
    <>
      <div className="rowgallery">
        <div className="rowcontainer">
          
          <div className="rowcontainerheading">
          <h2 className="featurette-heading">GALLERY</h2>
              <h4>Explore Our Adventures</h4>
          </div>
          <div className="rowcontainergallery">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src={Rifel}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                src={Heli}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"

                src={Thug}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"

                src={Boat1}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                
                src={PMralley}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
