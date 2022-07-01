import React from 'react'

const Footer = () => {
  return (
    <div style={{width:"100%",backgroundColor:"black",color:"white"}}>

        <div style={{padding:"5%"}}>

        <div style={{display:"flex",flexDirection: "row", justifyContent:"space-between",marginLeft:"4%",marginRight:"4%",flexWrap:"wrap"}}>

        <div style={{display:"flex",flexDirection: "row", justifyContent:"space-between",width:"200px",marginLeft:"4%",}}><SpotifyLogo />
            <Columns />
            <Columns />
            <Columns />
            <GapMaker />
        </div>
        
        <Logos />
        
        </div>
            <div style={{display:"flex",flexDirection: "row",width:"100%", justifyContent:"space-between"}}><LeagalHeadings /> <Langs /></div></div>
    </div>
  )
}

export const LeagalHeadings = () => {
  return (
    <div style={{display:"flex",flexDirection: "row", justifyContent:"space-between",width:"180px",marginLeft:"4%",fontSize:".7vw"}}>
        <span>Leagel</span><span>Privacy Center</span>
        <span>Privacy Policy</span><span>About Ads</span>
        <span>Cookie</span>
    </div>
  )
}
export const Langs = () => {
    return (
      <div style={{display:"flex",flexDirection: "column", width:"180px",marginLeft:"4%",fontSize:".7vw"}}>
        <p>
          <span>India</span><span>(English)</span></p>
          <span>2022 Spotify AB</span>
      </div>
    )
  }

export const GapMaker = () => {
  return (
    <div style={{width:"1.5vw",height:"100px",color:"transparent"}}>dfgdfggggggggggg</div>
  )
}

export const Columns = () => {
  return (
    <div style={{textAlign:"left",flexDirection: "column",display:"flex",justifyContent:"space-between",height:"80px",marginLeft:"30px"}}>
        <span style={{fontSize:"10px"}}>Company</span>
        <span style={{fontSize:"1.4vw"}}>About</span>
        <span style={{fontSize:"1.4vw"}}>Jobs</span>
        <span style={{fontSize:"1.4vw"}}>For Records</span>
        <span style={{fontSize:"1.4vw"}}>Jobs</span>
    </div>
  )
}

export const Logos= () => {
  return (
    <div style={{textAlign:"left",flexDirection: "row",display:"flex",top:"0",flexWrap:"wrap"}}>
        <img alt='' style={{width:"2vw",height:"1.5vw",margin:"1.2vw"}} src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png'/>
        <img alt='' style={{width:"2vw",height:"1.5vw",margin:"1.2vw"}} src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png'/>
        <img alt='' style={{width:"2vw",height:"1.5vw",margin:"1.2vw"}} src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png'/>
        

    </div>
  )
}


export const SpotifyLogo = () => {
  return (
    <div><img style={{width:"10vw"}} alt='' src='data:image/png;base64,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'/></div>
  )
}

export default Footer;