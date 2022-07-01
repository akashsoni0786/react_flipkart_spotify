import React from 'react'
import './App.css';
const Header = () => {
  return (
    <div><BlueHeader /><BlackHeader /></div>
  )
}


export const BlueHeader = () => {
  return (
    <div style={{backgroundColor:"blueviolet",color:"white",padding:'12%'}}>
        <h2 style={{fontSize:"3vw"}}>
Get Premium free for 1 month</h2>
<p style={{fontSize:"2vw"}}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
<div className='btnParent'>
<div  className='getStarted'>GET STARTED</div>
<div className='seOtherplan'>SEE MORE PLAN</div>
</div>
<span style={{fontSize:"1.3vw"}}><a href='#'  style={{color:"white"}}>Terms and conditions apply.</a> </span><span style={{fontSize:"1.3vw"}}>1 month free not available for users who have already tried Premium.</span>
    </div>
  )
}


export const BlackHeader = () => {
  return (
    <div style={{backgroundColor:"black",color:"white",padding:'12%'}}>
        <h2 style={{fontSize:"3vw"}}>
        Introducing Premium Mini</h2>

<p style={{fontSize:"2vw"}}>₹7 for 1 day.</p>
<p style={{fontSize:"2vw"}}>₹25 for 1 week.</p>
<div style={{justifyContent: "center",display:"flex"}}>
{/* <div className='getStarted'>GET STARTED</div> */}
<div className='getMini'>GET MINI</div>
</div>
<span style={{fontSize:"1.3vw"}}><a href='#'  style={{color:"white"}}>Terms and conditions apply.</a> </span>
    </div>
  )
}

export default Header