import map from './../images/map.png';

function Home() {
  return(
    <div className='container home'>
      <div>
        <h4>I AM OPEN AND TAKING NEW CLIENTS</h4>
      </div>
      <div className='conatiner contact'>
        <div className='container map'>
          <img id='map' src={map} alt='Map of location of Amaryllis Salon in NW Portland' />
        </div>
        <div className='container contact-info'>
          <hr />
          <ul id='salon'>
            <strong>Amaryllis salon</strong>
            <hr />
            <li>2368 NW Thurman St<br />  Portland, OR 97210</li>
            <li>(503) 930-5231</li>
            <li>
              Monday	Closed<br />
              Tuesday	10AM–6PM<br />
              Wednesday	10AM–6PM<br />
              Thursday	10AM–6PM<br />
              Friday	10AM–6PM<br />
              Saturday	9AM–6PM<br />
              Sunday	Closed<br />
            </li>
          </ul>
          <hr />
          <ul id='betsy-contact-info'>
            <strong>Betsy Sauer</strong>
            <hr />
            <li>(503) 715-7763</li>
            <li><a href='mailto:betsysauer49@gmail.com'>betsysauer49@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;