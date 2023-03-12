import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div>
          <div class="cunt">
            <div class="contact-box">
            <div class="left"></div>
            <div class="right">
                <h2>Contact Us</h2>
                <input type="text" class="field" placeholder="Your Name"></input>
                <input type="text" class="field" placeholder="Your Email"></input>
                <input type="text" class="field" placeholder="Phone"></input>
                <textarea placeholder="Message" class="field"></textarea>
                <button class="btn">Send</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact