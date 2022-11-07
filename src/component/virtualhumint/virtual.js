import React from 'react'
import './style.css'
import arrowG from '../../images/deepdark/Arrowgreen.png'
import vectorHrline from '../../images/virtual/vectorHrline.png'
function virtual() {
    return (
        <div>
            <div className='virtual_section1'>
                <p className='virtualBtn'>Virtual Humint Operations</p>
                <div className='virtual_Title'>Active Engagement with <br/> Threat Actors</div>
                <p className="virtual_demoBtn ">Get a Demo</p>
            </div>
            <div className='virtualCardlist'>
                <div className='virtualCard'>
                    <p className='virtualCard_title'>Assess veracity and imminence of threats </p>
                    <img className='vectorHrline' src={vectorHrline} />
                    <p className='virtualCard_desc'>Gather additional information to shed light on crucial factors related to any threat–including possibly revealing the threat actor identity and providing it to law enforcement </p>
                    <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>

                </div>

            </div>
        </div>
    )
}

export default virtual