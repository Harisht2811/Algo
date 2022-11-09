import React from 'react'
import '../popupcard/popupcard.css'
import Closebtn from '../../../images/homepage/algohome32.svg'

const Popupcard=({props})=> {
  const onClickclose=()=>{
    console.log('clickedclose',props)
       props.closemodal(false)
  }
  return (
      <div className='popupCard'>
         <p id='popupCardTitle'>Services<span className='closecardBtn'><img onClick={onClickclose} src={Closebtn}></img></span></p>
         <div className='menuincards'>
                <p id='popupCardText'>3rd Party Cyber Risk</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Attack Surface</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>DDOS Hardening</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Deep & Dark Web</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Pentesting</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Phishing Detection</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Deep Cyber Investigations</p>
                <hr id='popuphrincard'></hr>
                <p id='popupCardText'>Virtual Humint Operations</p>
         </div>
        

      </div>
  )
}

export default Popupcard