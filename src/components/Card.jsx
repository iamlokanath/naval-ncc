import React from "react";
import Photo from "../Image/How-to-join-Indian-Navy.jpg";
import "./Card.css";
import { Link } from "react-router-dom";
import Football from '../Image/Football.jpeg'
import Celebration from "../Image/ncc-merit-list.jpg"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos odio sint blanditiis doloremque distinctio pariatur. Odit optio facere assumenda, similique esse est ullam voluptas quis dolor? Voluptate, exercitationem cumque.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="/" role="button">
              View details »

            </a> */}
            <Link className="btn btn-secondary lokanathbutton" to="/about">Know More..</Link>

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis tempore aliquam ratione omnis rem molestiae cumque molestias, ipsam suscipit? Eaque illo doloremque quo et assumenda? Odit tempore magni unde!
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="/" role="button">
              View details »
            </a> */}

            
            <Link className="btn btn-secondary lokanathbutton" to="/activities">Know More..</Link>

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
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam possimus officia provident accusamus? Deleniti accusamus illo facilis consectetur recusandae sint ea in dolores est veritatis quaerat quis, voluptas consequatur!
          </p>
          <p>
          <Link className="btn btn-secondary lokanathbutton" to="/acheiviments">Know More..</Link>
          </p>
        </div>

      </div>
    </div>
    </>
  );
};

export default Card;
