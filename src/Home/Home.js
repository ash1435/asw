import React from 'react'
import './Home.scss'
import Stats from './Stats/Stats';
import {Link } from "react-router-dom";

import Typewriter from 'typewriter-effect';

function Home() {
    return (
      <>
        
        <div className='int'>
            <h1 className='phrase'>
            <Typewriter
              options={{
                autoStart: true,
                delay: 20,
                cursor: ' '
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Discover your sanctuary <br/> Your dream home is just a click away.')
                  .start();
              }}
            />
            </h1>
            <Link to="/abtus"><a href='/abtus' className='abt'>Learn more</a></Link>
          </div>
          <div className='options'>
            <h1 className='phrase'>WHAT WE OFFER</h1>
            <div className='buy'>
              <Link to='/buy' className='hover'>ON SALE</Link>
            </div>
            <div className='buy'>
            <Link to='buy' className='hover'>FEATURED</Link>
            </div>
            <div className='buy'>
            <Link to='buy' className='hover'>PLOTS</Link>
            </div>
          </div>
        
        
      </>
      );
}

export default Home