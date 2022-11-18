import { Dropdown } from 'bootstrap'
import React, { useEffect, useState } from 'react';
import './contactus.css'
import Select from 'react-select';
const options = [  { value: '3rd Party Cyber Risk', label: '3rd Party Cyber Risk' },  
                   { value: 'Attack Surface', label: 'Attack Surface' },  
                   { value: 'DDoS Attack Simulation & Testing', label: 'DDoS Attack Simulation & Testing' },
                   { value: 'DDOS Incident Response', label: 'DDOS Incident Response' },
                   { value: 'Technology Hardening', label: 'Technology Hardening' },
                   { value: 'Deep & Dark Web', label: 'Deep & Dark Web' },
                   { value: 'Deep Cyber Investigations', label: 'Deep Cyber Investigations' },
                   { value: 'Pentesting', label: 'Pentesting' },
                   { value: 'Phishing Detection', label: 'Phishing Detection' },
                   { value: 'Virtual Humint Operations', label: 'Virtual Humint Operations' },
                   { value: 'Ransomeware', label: 'Ransomeware' }
                ]

const Contactus=()=> {
    
    // const [checkboxes,setCheckBoxes]=useState({
    //     "firstCheckBox":false,
    //     secondCheckBox:false
    // });
    // const services=["firstCheckBox","secondCheckBox"];
    // const [showDropDown,setShowDropDown]=useState(false);

    // const [selectedServices,setSelectedServices]=useState([]);

    // const selectingServiceFunction=()=>{
    //     let servicesSelected=[];
    //     for(let key in checkboxes){
    //         if(checkboxes[key]) servicesSelected.push(key)
    //     }
    //     setSelectedServices(servicesSelected);
    // }
   
    // useEffect(()=>{
    //     selectingServiceFunction();
    // },[JSON.stringify(checkboxes)])

    // const setCheckBoxSelected=(service)=>{
    //     setCheckBoxes({...checkboxes,[service]:!checkboxes[service]});
    // }

    // export interface ColourOption {
    //     readonly value: string;
    //     readonly label: string;
    //     readonly color: string;
    //     readonly isFixed?: boolean;
    //     readonly isDisabled?: boolean;
    //   }
      
    //   export const colourOptions: readonly ColourOption[] = [
    //     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    //     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    //     { value: 'purple', label: 'Purple', color: '#5243AA' },
    //     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    //     { value: 'orange', label: 'Orange', color: '#FF8B00' },
    //     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    //     { value: 'green', label: 'Green', color: '#36B37E' },
    //     { value: 'forest', label: 'Forest', color: '#00875A' },
    //     { value: 'slate', label: 'Slate', color: '#253858' },
    //     { value: 'silver', label: 'Silver', color: '#666666' },
    //   ];

    return (
        <div>
            <div className='contactBanner'>
                <p className='contactTitle1'>Get in touch with us</p>
                <p className='contactTitle2'>We will help you in testing and cyber security issues</p>
                <div className='ContactFlex'>
                    <div className='contactForm'>
                        <form className='form'>
                            <div className='formContent1'>
                                <p className='label'>
                                    <label>Name</label>
                                    <input type='text' ></input>
                                </p>
                                <p className='label'>
                                    <label className='input'>Email id</label><br></br>
                                    <input type='email' className='input' ></input>
                                </p>
                            </div>
                            <div className='formContent'>
                                <p className='label'>
                                    <label>Company Name</label><br></br>
                                    <input type='text'></input>
                                </p>
                            </div>
                            <div className='formContent'>
                                <p className='label'>
                                    <label className='input'>Service You Need?</label>
                                    <div className='selectValue'>
                                    <Select options={options} isMulti className='ContactSelect'/>
                                    </div>
                    
                                    {/* <div className='relative' onClick={()=>setShowDropDown(!showDropDown)}>
                                    <div className='checkFlex'>
                                        {
                                            selectedServices.map((service,index)=>{
                                                return(
                                                    <p className='color' key={index} style={{color:"white"}}>{service}</p>
                                                )
                                            })
                                        }
                                    </div>
                                        {showDropDown && <div className='absolute border' style={{marginTop:"10px"}}>
                                            {
                                                services.map((service,index)=>{
                                                    return(
                                                        <div key={index} className="flex">
                                                            <input type="checkbox" checked={checkboxes[service]} onChange={()=>setCheckBoxSelected(service)}/>
                                                            <p>{service}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>}
                                    </div> */}
                                </p>
                            </div>
                            <div className='formContent3'>
                                <p className='label'>
                                    <label>How Can We Help You?</label><br></br>
                                    <input type='text' className='inputMsg' ></input>
                                </p>
                            </div>
                            <button className='submitBtn'><p className='submit'>Submit</p></button>
                        </form>
                    </div>
                    <div className='ContactPara'>
                        <p className='ContactParaTitle1'>World-Class Cyber-Security services & Testings</p>
                        <p className='paraContent'>Providing cyber security advice & services over 150+ world countries. With top analysis & execution we are proud to be the one of the best cyber security service provider in USA.</p>
                        <hr></hr>
                        <p className='ContactParaTitle2'>Looking for an expert advice ?</p>
                        <p className='paraContent2'>We are here to help. Email us your needs in a brief to</p>
                        <p className='linkCont'>kelly@algoritmik.com</p>
                    </div>
                </div>
                <div className='meetourTeam'>
          <p id='ourteamText'>Meet our team</p>
          <div className='ourteamProfile'>
            <div>
            <div className='profile1'>
            </div>
              <p id='nameText'>Andrew </p>
              <p id='speccialist'>Head of Cyber Attack</p>
            </div>
            
            <div>
            <div className='profile2'>
            </div>
            <p id='nameText'>Simon </p>
              <p id='speccialist'>DDOS Expert</p>
            </div>
            <div>
            <div className='profile3'>
            </div>
            <p id='nameText'>Edwin </p>
              <p id='speccialist'>Phishing Expert</p>
            </div>
            <div>
            <div className='profile4'>
            </div>
            <p id='nameText'>Melina </p>
              <p id='speccialist'>Pentesting Head</p>
            </div>

          </div>
          </div>
            </div>
        </div>
    )
}


export default Contactus