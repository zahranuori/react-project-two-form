import React from 'react'
import './header.style.css'

import information from  '../Header/img/information.jpg'
function Header(){
    return (
        <div>
    <img className='Image-header' src={information} alt="information"/>
    <h1 className='Header-text'>--------------  Part of the information -------------- </h1>
    </div>
    )
}

export default Header
