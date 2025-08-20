import React from 'react';
import './body.css';
import './img/Frame.png'

const Body = () => {
  return (
    <>
      <main>

        <div className="body_container">
          <div className="left_side">
            <div className="heading_box">

              <h1>OLD  IS A PRECIOUS  <span>GOLD</span></h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi.</p> */}
              <button type="button">learn more</button>

            </div>

          </div>
          <div className="right_side">


            <div className="img_section">
              <img src={require('./img/Frame.png')} alt="Frame" />
            </div>
            
          </div>

        </div>


      </main>
    </>
  );
};

export default Body;