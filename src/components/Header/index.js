import React from 'react';
import logo from '../../assets/facebook.png';
import { MdAccountCircle } from 'react-icons/md';
import './style.css';

function Header() {
  return (  
    <div className="header">
      <img src={logo} alt="Facebook"/>
      <div>
        <strong>Meu perfil</strong>
        <MdAccountCircle size={24} color="#fff" />
      </div>
    </div>
  )
}

export default Header;