import React from "react";
import Photo from "../Image/How-to-join-Indian-Navy.jpg";
import "./Card.css";
import { Link } from "react-router-dom";
import Football from "../Image/Football.jpeg";
import Celebration from "../Image/ncc-merit-list.jpg";
const Card = () => {
  return (
    <>
      <div className="lokancard">
        <div className="lokancardcontainer">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={Photo}
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>About Us</h2>
            <p>
              GCEK Naval NCC in Bhawanipatna is a prestigious organization that
              instills the values of discipline, courage, and leadership among
              the youth. It provides ample opportunities to the students to
              participate in various activities such as drill, sailing,
              shooting,
            </p>
            <p>
              {/* <a className="btn btn-secondary" href="/" role="button">
              View details »

            </a> */}
              <Link className="btn btn-secondary lokanathbutton" to="/about">
                Know More..
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={Football}
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>Activities</h2>
            <p>
              At GCEK Naval NCC cadets involves in various activities like
              Drill, Mountain Trekking, Boat Pooling, SPORTS, Rifel Firing,
              Cultural Events,Ship Modelling,Swimming, Semaphore, Kayaking,Yoga,
              Social Awareness,Tree Plantation,
            </p>
            <p>
              {/* <a className="btn btn-secondary" href="/" role="button">
              View details »
            </a> */}

              <Link
                className="btn btn-secondary lokanathbutton"
                to="/activities"
              >
                Know More..
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={Celebration}
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>Acheiviments</h2>
            <p>
              Cadets from GCEK Naval NCC have great acheivements in both state
              and national level. We have 2 RDC return, 4 NSC return. Every year
              our cadets perform very well at National Camps and score well
              grade in both b and c certificate examination.
            </p>
            <p>
              <Link
                className="btn btn-secondary lokanathbutton"
                to="/acheiviments"
              >
                Know More..
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
