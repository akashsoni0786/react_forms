import React from 'react'
import './App.css'
const Home = () => {
  return (
    <div className='homemain'>
    <div className="homemainup">
      <div className='drivingheading'>
      <p>Make up to $35/hr</p>
      <p>Driving your car</p>
      </div>
    
    <div className='applyformmain'>
      <h3>Apply now</h3>
      <span>Enter the info and then download the lyft app and create your driver profile.</span>
      <input className='applyformmaininput' placeholder='First name'/>
      <input className='applyformmaininput' placeholder='Last name'/>
      <input className='applyformmaininput' placeholder='Email adress'/>
      <input className='applyformmaininput' type='number' placeholder='Phone number'/>
      <input className='applyformmaininput' placeholder='Promocode (optional)'/>
      <div className='termsconditn'>
      <input className='cbox' type="checkbox"/>
      <span>I agree to Lyft trems</span>
      </div>
      <button className='applybtn'>Become a driver</button>
      
      <span><a href='#'>Already applied?</a> Check the status of your application form</span>
    </div>
    </div>
    
    <div className='level2'>
    <div className='levelcompo'>
    <h2>See How much you can make</h2>
      <h5>How many hours do you want to drive this week ?</h5>
      <div className='downform'>
        <input placeholder='Hour'/>
        <input placeholder='City'/>
        <button className='calbtn' type="button">CALCULATE</button>

      </div>
    </div>
    </div>

    </div>
  )
}

export default Home