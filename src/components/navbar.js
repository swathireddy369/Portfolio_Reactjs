import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [color,setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY > 0){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return (
        
        <div className={color? "header header-bg": "header"}>
            <div className="navbar" id='navbar'>
                <div className="title">Swathi</div>
                <ul className="ul-list">
                <Link className="navitem" to="intro" spy={true} smooth={true} offset={300} duration={1900} > About</Link>
                <Link className="navitem" to="experience" spy={true} smooth={true} offset={-100} duration={1900} > Experience</Link>
                <Link className="navitem" to="project" spy={true} smooth={true} offset={-250} duration={1900} > Projects</Link>
                <Link className="navitem" to="contact" spy={true} smooth={true}  duration={1900} > Contact</Link>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;