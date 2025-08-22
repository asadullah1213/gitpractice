import React from "react";
import "./img.avif";
import "./service.css";
function Service() {
  return (
    <>
      <main className="service">
        {/* heading start  */}
        <div className="heading">
          <h1>WHAT THEY WILL GET </h1>
        </div>
        {/* heading end  */}
        <div className="detail_service">
          <div className="left_side">
            <img src={require("./img.avif")} alt="" />
          </div>
          <div className="right_side">
            <h1>
              <span>|| MAINTAINED</span> INDEPENDENCE{" "}
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae, commodi! Est ut ea illum labore rerum sapiente, veniam
              delectus, enim, a laboriosam nihil esse? Doloremque? Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Laudantium
              cupiditate necessitatibus libero beatae eveniet placeat odit
              corrupti facilis cumque, id, quis magnam nobis totam vero.

              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipisicing elit.</li>
              <li>Laborum, voluptatum.</li>
              <li>Quisquam, dolorem.</li>
            </p>

            <button id='learn-btn'>Learn More</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Service;
