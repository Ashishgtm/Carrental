import React from 'react'
import '../assests/css/Home.css';

const shoot = () => {
  alert("Contact us on 9846911931 for reservation");
}
const Home = () => {
  const imageUrl = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
<div className='images'>
<img src={imageUrl} alt="Car 1" style={{ width: '100%', height: '100%'}}/>


<div className='images2'>

<figcaption>For Rent 50$ per day</figcaption>
</div>

<div className='images1'>
<figcaption>Reserved Now and Get 50% <br />
  off <i class="ri-circle-fill onlinedot"></i>
  </figcaption>
</div>
<div className='reservebutton'>
  <figcaption>
<button class="buttonclass"onClick={shoot}>Reserve Now !!!</button>
</figcaption>
</div>

</div>

   )
}

export default Home