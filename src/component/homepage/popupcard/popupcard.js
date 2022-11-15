import React from 'react'
import '../popupcard/popupcard.css'
import { Link } from 'gatsby'
import Closebtn from '../../../images/homepage/algohome32.svg'

const Popupcard=({closemodal})=> {
  const onClickclose=()=>{
    console.log('clickedclose',closemodal)
       closemodal(false)
  }
  return (


    typeof window !== 'undefined'? 
    window.innerWidth<768?
    <div className='popupCard'>
      <p id='popupCardText'>Home</p>
      <hr id='popuphrincard'></hr>
      <p id='popupCardText'>About us</p>
      <hr id='popuphrincard'></hr>
      <p id='popupCardText'>Contact us</p>
    <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img  src={Closebtn} alt='closeicon'></img></span></p>
    <div className='menuincards'>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/thirdparty">3rd Party Cyber Risk</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/attacksurface">Attack Surface</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDOS Hardening</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/deepdark">Deep & Dark Web</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Pentesting</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/phishing">Phishing Detection</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Deep Cyber Investigations</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/virtualhumint">Virtual Humint Operations</Link></p>
    </div>
   

 </div>
    :
    window.innerWidth>=1024?
      <div className='popupCard'>
         <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img  src={Closebtn} alt='closeicon'></img></span></p>
         <div className='menuincards'>
         <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/thirdparty">3rd Party Cyber Risk</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/attacksurface">Attack Surface</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDOS Hardening</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/deepdark">Deep & Dark Web</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Pentesting</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/phishing">Phishing Detection</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Deep Cyber Investigations</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/virtualhumint">Virtual Humint Operations</Link></p>
         </div>
        

      </div>:
           <div className='popupCard'>
           <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img  src={Closebtn} alt='closeicon'></img></span></p>
           <div className='menuincards'>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/thirdparty">3rd Party Cyber Risk</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/attacksurface">Attack Surface</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDOS Hardening</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/deepdark">Deep & Dark Web</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Pentesting</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/phishing">Phishing Detection</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Deep Cyber Investigations</Link></p>
           <hr id='popuphrincard'></hr>
           <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/virtualhumint">Virtual Humint Operations</Link></p>
           </div>
           </div>
  :''
  )
  
}

export default Popupcard