import React from 'react'
import '../popupcard/popupcard.css'
import { Link } from 'gatsby'
import Closebtn from '../../../images/homepage/algohome32.svg'

const Popupcard = ({ closemodal }) => {
  const onClickclose = () => {
    console.log('clickedclose', closemodal)
    closemodal(false)
  }
  return (


    typeof window !== 'undefined' ?
      window.innerWidth < 769 ?
        <div className='popupCard'>
          <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/">Home</Link></p>
          <hr id='popuphrincard'></hr>
          <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/aboutus">About us</Link></p>
          <hr id='popuphrincard'></hr>
          <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/contactus">Contact us</Link></p>
          <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img src={Closebtn} alt='closeicon'></img></span></p>
          <div className='menuincards'>
            <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDoS Attack Simulation & Technology Hardening</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddosincident">DDos Incident Response</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/pentesting">Pentesting</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ransomware">Ransomware</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/drp">Digital Risk Protection</Link></p>
            </div>


        </div>
        :
        window.innerWidth >= 1024 ?
          <div className='popupCard'>
            <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img src={Closebtn} alt='closeicon'></img></span></p>
            <div className='menuincards'>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDoS Attack Simulation & Technology Hardening</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddosincident">DDos Incident Response</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/pentesting">Pentesting</Link></p>
              </div>


          </div> :
          <div className='popupCard'>
            <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img src={Closebtn} alt='closeicon'></img></span></p>
            <div className='menuincards'>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddoshardening">DDoS Attack Simulation & Technology Hardening</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/ddosincident">DDos Incident Response</Link></p>
              <hr id='popuphrincard'></hr>
              <p id='popupCardText'><Link className="nav-link" activeClassName="active-link" to="/pentesting">Pentesting</Link></p>
            </div>
          </div>
      : ''
  )

}

export default Popupcard