import React from 'react';
import images from '../images/index'
import  "./nav.css"
function Nav() {
  return (
    <div className='sidebar'>
    <div className='logo'>
     <img src={images.logo} alt="logo"/>
     <h5>Language Acad</h5>
    </div>
    <div className='nav'>
        <img src={images.charts}alt="charts"/>
        <p>Charts</p>
    </div>
    <div className='nav'>
        <img src={images.referrals} alt="Referrals"/>
        <p>Referrals</p>
    </div>
    <div className='nav'>
        <img src={images.transactions} alt="transaction"/>
        <p> Transaction</p>
    </div>
    <div className='nav'>
        <img src={images.payout} alt="payout"/>
        <p>Payout</p>
    </div>
    <div className='line'></div>
    <div className='nav'>
        <img src={images.settings} alt="setting"/>
        <p>Settings</p>
    </div>
    <div className='nav'>
        <img src={images.Home} alt="home"/>
        <p>Home</p>
    </div>
  </div>
  );
}

export default Nav;
