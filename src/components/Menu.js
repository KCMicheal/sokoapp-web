import React from 'react';
import profilepic from '../images/profilepic.png'

const Menu = () => {
    return (
        <div>
        <div className="menu-header">
        <img src={profilepic} alt="dp"/>
                    <div className="profiledetails">
                        <h3>Target</h3>
                        <p>Cham Towers, Plot 12 Nkuruma Rd, Kampala, Ug</p>
                    </div>
                    <div className="left-menu">
                    <i class="fab fa-twitter" style={{fontSize: "15px"}}>Bag</i>
                    <i class="fab fa-twitter" style={{fontSize: "15px"}}>Orders</i>
                    </div>
        </div>
                       
        </div>
    )
}

export default Menu
