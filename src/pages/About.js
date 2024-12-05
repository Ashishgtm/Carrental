import React from 'react'
import '../assests/css/About.css';

const About = () => {
  const imageUrl = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className='images'>
<img src={imageUrl} alt="Car 1" style={{ width: '100%', height: 'auto'}}/>
<h2>Hello its About us</h2>
</div>
  )
}

export default About