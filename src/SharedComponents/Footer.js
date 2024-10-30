import React from 'react'
import './Footer.css'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
      <div className='footer-container'>
        <div className='footer-left'>
          <h2>Let’s Connect Here</h2>

          <SocialLinks />
          <p>
            Feel free to connect with me on the above social media platforms.
            I'm here to engage, collaborate, and share exciting ideas!
          </p>
          <p className='logo'>Antony</p>
        </div>
        <div className='footer-right'>
          <div className='footer-contact'>
            <h4>Contact</h4>
            <p>
              Phone: <a href='tel:+254115423788'>+254 115 423 788</a>
            </p>
            <p>
              <a href='mailto:antonytitan96@.com'>antonytitan96@gmail.com</a>
            </p>
            <p>
              <a
                href='https:/antonykinuthia.xyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                https:/antonykinuthia.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Footer
