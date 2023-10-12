import React from "react";
import Navbar from "./Navbar";
import "./Aboutus.css";
// import About1 from "../Image/Football.jpeg"
import About2 from "../Image/Gcek1.jpeg";
const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div className="gcekabout">
          <div>
            <h2>
              About <span>Us</span>
            </h2>
            <h4>GCEK Naval NCC, Bhawanipatna </h4>
          </div>

          <div className="gcekaboutcontainer">
            <div className="container">
              <div className="row m-b-n30 align-items-center">
                <div
                  className="col-lg-6 m-b-30 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="about-content mw-100">
                    <h2 className="title">
                    GCEK Naval NCC:<br/> Shaping Future Leaders through Dedication, Discipline, and Service to the Nation.
                    </h2>
                    <span></span>
                    <p>
                      GCEK Naval NCC in Bhawanipatna is a prestigious
                      organization that instills the values of discipline,
                      courage, and leadership among the youth. It provides ample
                      opportunities to the students to participate in various
                      activities such as drill, sailing, shooting, and adventure
                      sports. With its comprehensive training and guidance, GCEK
                      Naval NCC prepares the students for a successful career in
                      the armed forces and other sectors.

                     

                      
                      
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-first order-lg-last m-b-30 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="about-image service-layer-image ms-auto">
                    <img
                      className="about-image-1 img-fluid"
                      src={About2}
                      alt="About"
                    />
                    {/* <img className="about-image-2 img-fluid" src={About2} alt="About" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Aboutus;
