import React from 'react'
import './Footer.scss'


function Nav() {
  return (
    <div className='footer'>
<footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> Incorporated in the year 2006, at Coimbatore, (Tamil Nadu, India), we, “Vijay Foundations - Property Developers”, are one of the leading Service Providers of Real Estate Services, Property Development Services, Property Consultancy Services, Land Development Services and Land Promoting Services.
    </p>
    <div class="icons">
      {/* <a ><i class="fa fa-facebook"></i></a>
      <a ><i class="fa fa-twitter"></i></a>
      <a ><i class="fa fa-linkedin"></i></a>
      <a ><i class="fa fa-google-plus"></i></a>
      <a ><i class="fa fa-instagram"></i></a> */}
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Company<span> logo</span></h2>
    <p class="menu">
      {/* <a > Home</a> 
      <a > About</a> 
      <a > Services</a> 
      <a > Portfolio</a> 
      <a > News</a> 
      <a > Contact</a> */}
    </p>
    <p class="name"> Company Name &copy; 2016</p>
  </div>
</footer>
    </div>
  )
}

export default Nav