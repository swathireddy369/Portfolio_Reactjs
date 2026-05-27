
import { ImLinkedin,ImGithub} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import './contact.css'
const Contact = () => {
    return ( 
        <div className="contact" id="contact">
        <div className="item">
            {/* <a className="gm" href="https://mail.google.com/mail/u/0/?fs=1&to=bhumikadasari0@gmail.com&tf=cm"><SiGmail size={"30px"}/></a> */}
            <a className="gm" href="mailto:swathi.tech369@gmail.com"><SiGmail size={"30px"}/></a>
            <a className="li" href="https://www.linkedin.com/in/swathi369/"><ImLinkedin size={"30px"}/></a>
            <a className="gb" href="https://github.com/swathireddy369"><ImGithub size={"30px"}/></a>
            {/* <a className="wp" href="https://dasaribhumika.blogspot.com/"><SiBlogger size={"30px"}/></a> */}
        </div>
    {/* <p className="source"><a href="https://github.com/dasaribhumika/Portfolio"><u>View Source Code</u></a></p> */}
    <p style={{margin:'2%'}}>  COPYRIGHT © 2025 kodakandla Swathi </p>
    </div>
     );
}
 
export default Contact;