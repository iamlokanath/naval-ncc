import React from "react";
// import Photo from "../Image/Indian-Navy-Agniveer-Recruitment-2022.webp";
import Engineer from "../Image/Enginner1.jpeg"
import Gcek from '../Image/Gcek1.jpeg'
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <div className="lokanfeature">
        <div className="lokanfeaturecontainer">
          <hr />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Why to join <span className="text-muted">GCEK NAVAL NCC?</span>
              </h2>
              <p className="lead">
                GCEK Naval NCC in Bhawanipatna is a prestigious organization
                that instills the values of discipline, courage, and leadership
                among the youth. It provides ample opportunities to the students
                to participate in various activities such as drill, sailing,
                shooting, and adventure sports. With its comprehensive training
                and guidance, GCEK Naval NCC prepares the students for a
                successful career in the armed forces and other sectors.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src={Gcek}
                data-holder-rendered="true"
              />
            </div>
          </div>
          <hr />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                {" "}
                As an engineer, how will{" "}
                <span className="text-muted">GCEK Naval NCC help me?</span>
              </h2>
              <p className="lead">
              GCEK Naval NCC enriches engineering students with leadership,
                discipline, and teamwork abilities while promoting physical
                fitness. These skills enhance project management and
                problem-solving in engineering roles. Character development,
                community service, and networking further shape well-rounded
                engineers. Whether pursuing a military career or excelling in
                the engineering industry, GCEK Naval NCC equips students for
                success.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src={Engineer}
                data-holder-rendered="true"
              />
            </div>
          </div>
          <hr />
          
        </div>
      </div>
    </>
  );
};

export default Feature;
