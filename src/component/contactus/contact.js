import React, { useEffect, useState } from 'react';
import './contact.css'
import Select from 'react-select';
import './laptop.css'
import './tab.css'
import './mob.css'
import './mobile.css'





const Contactus = () => {

    const options = [{ value: '3rd Party Cyber Risk', label: '3rd Party Cyber Risk' },
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
                                    <label>Your Name*</label>
                                    <input type='text' className='input1'></input>
                                </p>
                                <p className='label'>
                                    <label className='email'>Your Email*</label>
                                    <input type='email' className='input2' ></input>
                                </p>
                            </div>
                            <div className='formContent'>
                                <p className='label'>
                                    <label>Company Name</label>
                                    <input type='text' className='input3'></input>
                                </p>
                            </div>
                            <div className='formContent'>
                                <p className='label'>
                                    <label className='serviceNeed'>Services You Need?</label>
                                    <div className='selectValue'>
                                        <Select options={options} isMulti className='ContactSelect' placeholder='sevices' />
                                    </div>
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
                        <hr className='ContactHr'></hr>
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