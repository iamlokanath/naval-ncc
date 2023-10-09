import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* <div classNameName="nccfooter">
        <div classNameName="nccfootercontainer">
          <div classNameName="nccfooterfirst">
            <div classNameName="nccfooterfirstleft">
              <div classNameName="nccfooterfirstcoloumn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eius rerum praesentium accusantium sed saepe aliquid. Architecto accusamus nemo similique, minima esse suscipit asperiores aspernatur quia laudantium, aut vitae.</div>
              <div classNameName="nccfootersecondcoloumn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis beatae magni numquam minus nulla. Blanditiis reiciendis consequuntur eligendi itaque suscipit hic, dolorem error laboriosam accusamus voluptatibus culpa quae repellat?</div>
              <div classNameName="nccfooterthirdcoloumn">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ipsam dolor voluptatem nulla perspiciatis sit accusamus voluptas, illum pariatur ad expedita! Consequuntur consectetur eius quas modi laudantium cumque eaque labore.</div>
            </div>
            <div classNameName="nccfooterfirstright">
              <div classNameName="nccfooterfourthcoloumn">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quo modi sapiente obcaecati, iure nobis quas eos maxime sed perferendis architecto officia quod a fugit aspernatur iste recusandae voluptate mollitia.</div>
            </div>
          </div>
          <div classNameName="nccfootersecond">bi</div>
        </div>
      </div>
    </> */}

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>GCEKNAVALNCC</h6>
              <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ratione sunt soluta sit similique ducimus quasi commodi numquam voluptatem deserunt inventore ullam, veniam excepturi. Ad fuga quia architecto ex ipsum?</p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/activities">Activities</a></li>
                <li><a href="/acheiviments">Acheiviments</a></li>
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="https://indiancc.nic.in/" target="ncc">NCC INDIA</a></li>
                <li><a href="https://nccorissa.org/" target="odisha">NCC Odisha</a></li>
                <li><a href="https://indiancc.nic.in/dg-ncc-lt-gen-gurbirpal-singh/" target="dg">DG NCC</a></li>
                <li><a href="https://gcekbpatna.ac.in/" target="GCEK">GCEK</a></li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy;GCEKNAVALNCC2023 All Rights Reserved, website is designed and developed by{" "} 
           <a href="https://lokanath.netlify.app/" target="anotherpage">Lokanath Panda</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="/"><i className="fab fa-facebook"></i></a></li>
                <li><a className="twitter" href="/"><i className="fab fa-twitter"></i></a></li>
                <li><a className="dribbble" href="/"><i className="fab fa-instagram"></i></a></li>
                <li><a className="linkedin" href="/"><i className="fab fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>

    </>
  );
};

export default Footer;
