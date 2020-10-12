import React from 'react';
import {Link} from 'react-router-dom'
const HomePage = () => {
 return (
     <div id='homepage'>
         <div id='heroimg'><img src='images/dogshelter.jpg'/></div>
         <h1>PAW PACK RESCUE</h1>
         <h3>Fostering Database</h3>
         <div id='homecards'>
         <Link to='/caretakers/new'><div className='card'><img src='images/fostertoday.jpg'/><div class='container'>Join The Fostering Team Today!</div></div></Link>
         <p>Paw Pack Rescue is an animal rescue that protects the 
             lives and the welfare of animals. We believe every animal has the 
             right to a well-balanced, socialized and fulfilled life. We take on 
             the responsibility to save, rehabilitate and place abandoned, abused 
             and stray animals.
            We provide medical, behavioral and physical support for animals despite
             their age, health and/or breed. ALIVE Rescue promotes sustainable living 
             and caregiving within our communities by building awareness, appreciation 
             and respect for all animals and the environment.</p>
         </div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/7Zxm2wcgeYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
 )
}
export default HomePage