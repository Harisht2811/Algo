import React from 'react'
import '../popupcard/popupcard.css'
import Closebtn from '../../../images/homepage/algohome32.svg'

const Popupcard=({closemodal})=> {
  const onClickclose=()=>{
    console.log('clickedclose',closemodal)
       closemodal(false)
  }
  return (


    typeof window !== 'undefined'? window.innerWidth>=1024?
      <div className='popupCard'>
         <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img  src={Closebtn} alt='closeicon'></img></span></p>
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
        

      </div>:
           <div className='popupCard'>
           <p id='popupCardTitle'>Services<span onClick={onClickclose} className='closecardBtn'><img  src={Closebtn} alt='closeicon'></img></span></p>
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
                  <p id='popupCardText'>Ransome</p>
                  <hr id='popuphrincard'></hr>
                  <p id='popupCardText'>Threat Intelligence</p>
                  <hr id='popuphrincard'></hr>
                  <p id='popupCardText'>Deep Cyber Investigations</p>
                  <hr id='popuphrincard'></hr>
                  <p id='popupCardText'>Virtual Humint Operations</p>
           </div>
           </div>
  :'None')
}

export default Popupcard