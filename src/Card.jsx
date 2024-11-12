import React from "react";


function Card(props){
    return(
        <>
            <section className="section-common">
                <div className="container">
                 <div className="common_para">
                    <h1>{props.h1}</h1>                 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis totam nisi ducimus obcaecati libero. Magnam architecto veritatis enim exercitationem officia velit reprehenderit impedit a? Suscipit est ex consequatur voluptate.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus voluptatum sed reiciendis quia, culpa saepe hic totam harum vitae. Excepturi officia inventore delectus doloribus aut, cumque dignissimos repellat iste!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident obcaecati at libero quibusdam. Quaerat doloremque repudiandae earum voluptas dignissimos,
              </li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident obcaecati at libero quibusdam. Quaerat doloremque repudiandae earum voluptas dignissimos,
              </li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident obcaecati at libero quibusdam.</li>
            </ul>
                 </div>
                </div>
            </section>
        </>
    )
}

export default Card