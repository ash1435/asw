import React from 'react'
import './Home.scss'
import {Link } from "react-router-dom";
import Stats from "./Stats/Stats"
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
          <div className='col'>
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
          </div>
          <div className='cont'>
            <div className='sts'>
            <Stats/>
            </div>
            <div className='away'>
              <h1 className='phas'>WHO WE ARE</h1>
              <p className='lorem'>Vijay Foundations have been at the forefront of Coimbatore's 
                real estate sector for over a decade, specializing in Real
                 estate services, as well as providing end-to-end services to our 
                 clients in property management, legal documentation 
                 and liaising with relevant government departments. Vijay Foundations,
                  has redefined the standards of quality, commitment, Integrity and 
                  established itself as one of the top developers in the real estate 
                  reign. highest standard quality and peerless workmanship are the 
                  hallmarks of our architectural creations. Being backed by a skilled 
                  workforce, Vijay Foundations is managed by experts who have carved 
                  a niche for themselves in the real estate realm.</p>
              <Link to="/abtus"><a href='/abtus' className='abt'>Learn more</a></Link>
            </div>
          </div>        
      </>
      );
}

export default Home