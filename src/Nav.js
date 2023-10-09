import React, { useState ,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar =() =>{
    if(window.scrollY>100){
        handleShow(true );
    }
    else handleShow(false);
};

useEffect(() =>{
    window.addEventListener("scroll",transitionNavbar);
    return () => window.removeEventListener("scroll",transitionNavbar);
},[]);


  return (
    <div className={`nav ${show && "nav_black "}`}>
     <div className='nav_contents'>
      <img className='nav_logo'
      onClick = {()=> navigate("/")}
      src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1200x630.v1582751026.png" alt="/"/> 
      <img className='nav_avatar'
      onClick={()=> navigate('/profile')}
      src ="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
     </div>
    </div>
  );
}

export default Nav;