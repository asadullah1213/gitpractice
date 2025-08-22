import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHandshake } from "@fortawesome/free-solid-svg-icons";
import './service-box.css';

const icons = {
  coffee: <FontAwesomeIcon icon={faCoffee} />,
  handshake: <FontAwesomeIcon icon={faHandshake} />,
};

function Servicebox() {
  return (
    <>
      <main className="ServiceBox">
        <div className="service_heading">
          <h1>OUR SERVICES </h1>
        </div>

        <div className="service_boxes">

          {/* box 1  */}
          <div className="box1 box">
            <i>{icons.coffee}</i>
            <h1>Service 1</h1>

            <p>We offer personalized coaching sessions to enhance your skills.</p>

            <button>Order Now</button>
          </div>
           {/* box 1 end  */}


          {/* box 2 start  */}
          <div className="box2 box">
            <i>{icons.handshake}</i>

            <h1>Service 2</h1>

            <p>We provide expert consulting services to help your business grow.</p>

            <button>Order Now</button>
          </div>

           {/* box 2 end  */}
          
{/* box 3 start here  */}
          <div className="box3 box">
            <i>{icons.handshake}</i>

            <h1>Service 3</h1>
            <p>We offer personalized coaching sessions to enhance your skills.</p>
            <button>Order Now</button>
          </div>
          {/* box 3 end here  */}


          {/* box 4 start here  */}
          <div className="box4  box ">
            <i>{icons.handshake}</i>

            <h1>Service 4</h1>
            <p>We provide 24/7 customer support to assist you with any inquiries.</p>
            <button>Order Now</button>
          </div>
          {/* box 4 end here  */}
        </div>
      </main>
    </>
  );
}

export default Servicebox;
