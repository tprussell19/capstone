import React from 'react';
import betsy from './../images/betsy.jpeg';

function About() {
  return(
    <div className='container'>
      <img src={betsy} alt='Betsy working with a client' />
      <div>I’m Betsy Sauer and I was born and raised here in Portland. I graduated in 2013 from the Aveda Institute Portland, known to be one of the best cosmetology schools in Oregon. Although I’m licensed in other fields of the beauty industry, I have focused my career on hair. Most stylists may say that they have a specialty service, however I take pride in my confidence as an all around stylist. I provide haircuts and color for men, women, and children. I also love styling for special events. My main goal as a stylist is to make sure all of my clients leave my chair feeling their absolute best. My favorite part of this industry is that I can put myself aside, and simply take care of you. I’ve worked in a major salon in the past, but now I work independently with my own clientele. I feel this provides the best personalized service, which allows the client to receive exactly what they are looking for, rather than conforming to a specific “salon standard”. I look forward to seeing as many clients as I can in my chair, because when a client leaves happy, it keeps me motivated to continue my passion in this industry. </div>
    </div>
  )
}

export default About;