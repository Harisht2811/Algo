import React from 'react'
import '../getdemo/getdemo.css'
import Closebtn from '../../images/homepage/algohome32.svg'

function getdemo(props) {
    return (props.trigger) ?
    (<>
    
       (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
            <img onClick={() => props.setTrigger(false)}  className='close-btn' alt='close' src={Closebtn}></img>
        </div>
    </div>
    )
    </>
    )
   :""
}

export default getdemo