import React from "react";
import img3 from "./img/patient.webp";

function Overview(){
    return(
        <>
        <section className="section-common">
        <div className="container">
        <div className="common">
        <div>
        <h1>Treatment Overview</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laborum libero fugiat saepe veniam a atque provident temporibus, aperiam praesentium impedit consequuntur commodi ex repellendus quae eaque sunt odit nihil!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint itaque voluptatum praesentium et deserunt earum fugit laborum facilis maxime autem? Culpa distinctio aspernatur quam ut soluta optio inventore laudantium rem.</p>
      </div>
      <div>
        <img src={img3} class="overview-img" alt="overview-img"/>
      </div>
      </div>
        </div>
        </section>
        </>
    )
}

export default Overview