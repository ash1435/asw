import React from 'react'
import { Link } from "react-router-dom";


const Card = ({name, head, cont, bg}) => (
  <div class="outer">
              <div id="card1" class="card">
                  <div class={bg+ " imgbg"}></div>
                  <div class="line">
                      <h2>{head}</h2>
                      <p>{cont}</p>
                      <Link to={"/buy/"+name}><button id="btn1" class="mr">Learn More</button></Link>
                  </div>
              </div>
          </div>
);

export default Card