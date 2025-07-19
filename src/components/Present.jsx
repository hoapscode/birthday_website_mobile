import React from 'react'
import SectionWrapper from './SectionWrapper'
import ReplayButton from './ReplayButton';

import "../assets/css/present.css";
function Present() {
  return (
    <SectionWrapper>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
      <ReplayButton /> 
    </div>
      <div className='mb-64'>
        <h1 className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold text-customBlue drop-shadow-lg">
          First, click the box to see your gifts!
        </h1>
      </div>
      <div className="birthday-gift">
        <input id='click' type='checkbox'/>
        <label className='gift' htmlFor='click'>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          <div id="raffle-red" className="entry raffle raffle-1">
            <div className="no-scale">
              <span className="ticket-text">Gift of<br/>Peaceful&Healing</span>
            </div>
          </div>
          <div id="raffle-red" className="entry raffle raffle-2">
            <div className="no-scale">
              <span className="ticket-text">Gift of<br/>Quite Belonging</span>
            </div>
          </div>
          <div id="raffle-red" className="entry raffle raffle-3">
            <div className="no-scale">
              <span className="ticket-text">Gift of<br/>Divine Guidance</span>
            </div>
          </div>
        </label>
      </div>



    </SectionWrapper>
  )
}

export default Present
