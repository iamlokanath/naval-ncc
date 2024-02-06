import React from "react";
import Photo1 from "../Image/grp1.jpg";
import Photo2 from "../Image/photo5.jpg";
import Photo3 from "../Image/Photo2.jpeg";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Photo1}
              className="d-block w-100"
              alt="of the first slide"
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="home-head">NTAC, 2023</h5>
              <p>
                15 cadets from GCEK Naval NCC attended Naval Technical
                Attachment Camp, 2023 held at INS, Shivaji and INS, Valsura
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Photo2}
              className="d-block w-100"
              alt="of the second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="home-head">Naval Dockyard, Mumbai</h5>
              <p>
                The cadets after completed the training at INS Shivaji and INS valsura visited the Naval Dockyard, Mumbai
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Photo3}
              className="d-block w-100"
              alt="of the third slide"
            />
            <div className="carousel-caption d-none d-md-block text-end">
              <h5 className="home-head">AINSC</h5>
              <p>
                one cadet and three cadets attended the Nou Saink Camp in 2022 and 2023 respectively
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
