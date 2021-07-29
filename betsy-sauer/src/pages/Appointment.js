import appointment from './../images/appointment.JPG';

function Appointment() {
  return(
    <div id='appointment' className='container'>
      <h4>BOOK AN APPOINTMENT TODAY</h4>
      <hr />
      <div className='container appointment'>
        <div className='text'>
          <p>Please contact either the salon or myself directly in order to schedule an appointment or FREE consultation! For a cost estimate for your upcoming appointment, please consult the pricing menu below. All services are "a la carte" and subject to change given the duration and materials used during your appointment.</p>
          <ul id='salon'>
            <strong>Amaryllis salon</strong>
            <hr />
            <li>2368 NW Thurman St<br />  Portland, OR 97210</li>
            <li>(503) 930-5231</li>
          </ul>
          <ul id='betsy-contact-info'>
            <strong>Betsy Sauer</strong>
            <hr />
            <li>(503) 715-7763</li>
            <li><a href='mailto:betsysauer49@gmail.com'>betsysauer49@gmail.com</a></li>
          </ul>
          <h4>PRICING MENU</h4>
          <hr />
          <ul id='pricing'>
            <li>Men's haircut: $35</li>
            <li>Women’s haircut: $50</li>
            <li>Gray coverage: $60</li>
            <li>All over color: $70</li>
            <li>Partial highlight: $85</li>
            <li>Full highlight: $125</li>
            <li>Balayage: $150</li>
            <li>Color correction: $200</li>
            <li>Toner/Gloss: $20</li>
            <li>Root shadow: $20</li>
            <li>Blowout: $45</li>
            <li>Dry curl: $35</li>
            <li>Consultation: FREE</li>
            <li>Payment: cash, check, or venmo</li>
          </ul>
        </div>
        <div className='appointment-image'>
          <img id='appointment-image' src={appointment} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Appointment;