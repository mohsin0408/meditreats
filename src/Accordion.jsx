import React,{ useState } from "react";

function Accordion(props){

  const [showpara, setShowpara] = useState(false);
  const clickHandler = () => {
    setShowpara(!showpara);
  };

    return(
        <>
<section class="section-accordion">
  <div class="container">
    <div class="common">
    <div class="accordion">
    <div className="accordion-item">
        <p className="accordion-header">
          {props.heading} <button onClick={clickHandler}>+</button>
        </p>
        {showpara && <p className="accordion-content">{props.para}</p>}
      </div>
    </div>
  </div>
  </div>
  </section>

        </>
    )
}

export default Accordion