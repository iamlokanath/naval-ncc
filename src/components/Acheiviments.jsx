import React from "react";
import Navbar from "./Navbar";
import "./Acheiviments.css";

import Ashok from "../Image/Ashok.jpeg";
import NTAC from "../Image/NTAC.jpeg";
import Prabin from "../Image/prabin.jpeg";
import Akash from "../Image/Akash.jpeg";
import Swastik from "../Image/swastik.jpeg";
import Pranati from "../Image/prananti.jpg";
import Manmay from "../Image/Manmay.jpg";
import Tushar from "../Image/tushar.jpg";
const Acheiviments = () => {
  return (
    <>
      <Navbar />
      <div className="gcekacheiviements">
        <div className="gcekacheivimentscontainer">
          <div className="acheiviementsheading">
            <h2>
              Our <span>ACHIVEMENTS</span>
            </h2>
            <h4>
              Celebrating Our Accomplishments: A Showcase Of Our Achievements
            </h4>
          </div>

          <div className="acheiviements-menu">
            <div className="acheiviements-menu-container ">
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Swastik} alt="ashok" />
                  </div>
                  <div className="achheading">Cdt. Swastik Siddharth Rath</div>
                  <div className="achpara">
                    Cadet Swastik Siddharth Rath attended All India Nau Sainik
                    Camp 2024
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Pranati} alt="ashok" />
                  </div>
                  <div className="achheading">Cdt. Prananti Kaudi</div>
                  <div className="achpara">
                    Cadet Prananti Kaudi attended All India Nau Sainik Camp 2024
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Manmay} alt="ashok" />
                  </div>
                  <div className="achheading">Cdt. Manmay Panda</div>
                  <div className="achpara">
                    Cadet Manmay Panda attended All India Nau Sainik Camp 2024
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={NTAC} alt="ashok" />
                  </div>
                  <div className="achheading">NTAC 2023</div>
                  <div className="achpara">
                    10 cadets with SCC Prabin, CC Akash, POC Jagadish, LC
                    Smruti, LC Lokanath from 2024 batch attended the NTAC 2023
                    held at INS shivaji and INS Valsura.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="acheiviements-menu">
            <div className="acheiviements-menu-container ">
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Prabin} alt="ashok" />
                  </div>
                  <div className="achheading">SCC Prabin Kumar Tripathy</div>
                  <div className="achpara">
                    SCC Tripathy attended All India Nau Sainik Camp 2023.
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Akash} alt="ashok" />
                  </div>
                  <div className="achheading">CC Akash Samantaray</div>
                  <div className="achpara">
                    Cadet Captain Akash Samantaray attended Republic Day Camp
                    2023
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Tushar} alt="ashok" />
                  </div>
                  <div className="achheading">CC Tushar Ranjan Vati</div>
                  <div className="achpara">
                    Cadet Captain Tushar Ranjan Vati attended SYTC, Mumbai, 2022
                  </div>
                </div>
              </div>
              <div className="acheiviements-menu-item">
                <div className="acheiviements-item">
                  <div className="achphoto">
                    <img src={Ashok} alt="ashok" />
                  </div>
                  <div className="achheading">SCC Ashok Kumar Panda</div>
                  <div className="achpara">
                    SCC Ashok Kumar Panda attended Republic Day Camp 2022.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acheiviments;
