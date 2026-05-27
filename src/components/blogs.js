import React from 'react';
import './blogs.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiGit, SiGithub, SiMedium} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import blogpost1 from '../img/chrome.jpg';
import blogpost2 from '../img/gnec.png';
import blogpost3 from '../img/google.png';
import blogpost4 from "../img/taskformer's.jpg";


const Blogs = () => {
    // Dummy blog data for demonstration
    const blogs = [
        {
            title: "Google Chrome Built-in AI Challege",
            link: "https://github.com/dasaribhumika/Job-Tracker",
            icon: <FaLaptopCode />,
            image: blogpost1,
            bgColor: 'lightblue',
            description: [
                "Developed a Chrome Extension for managing job applications, including details like title, description, status, and notes."
            ]
        },
        {
            title: "GNEC Hackthon 2024 - Compete For UN",
            link: "https://github.com/dasaribhumika/learning-path-generator",
            icon: <FaLaptopCode />,
            image: blogpost2,
            bgColor: 'lightgreen',
            description: [
                "Developed an LLM to create personalized learning paths based on users educational background, skills, and goals."
            ] 
        },
        {
            title: "Google's Women Techmakers - She Builds AI",
            link: "https://github.com/dasaribhumika/learning-path-generator",
            icon: <FaLaptopCode />,
            image: blogpost3,
            bgColor: 'khaki',
            description: [
                "Developed an LLM to create personalized learning paths based on users educational background, skills, and goals."
            ]
        },
        {
            title: "Taskformer's AI",
            link: "https://github.com/dasaribhumika/sage-health-chatbot",
            icon: <FaLaptopCode />,
            image: blogpost4,
            bgColor: 'lightpink',
            description: [
                "Won Wolfram Award",
                "Developed a chatbot to provide accurate and context-specific first-aid guidance for common injuries."
            ] 
        },        
    ];

    return (
        <> <p style={{margin:'3%',fontSize:'40px', fontFamily: 'Montserrat'}}>Hackathons</p>
        <div className="q">
            <div className="blog" id='blogs'>
                
                <VerticalTimeline>
                    {blogs.map((blog, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: blog.bgColor, color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid   ${blog.bgColor}' }}
                            date={blog.date}
                            iconStyle={{ background: 'rgb(20,30,23)', color: 'aqua' }}
                            icon={blog.icon}
                        >
                            <h3 className="vertical-timeline-element-title">{blog.title}</h3>
                            <br />
                           
                            <img src={blog.image} alt="Blog" className='blog-image' />
                            <div className="blog-description">
                                    {blog.description.map((desc, i) => (
                                        <p key={i} className="description-point">{desc}</p>
                                    ))}
                                </div>
                                <br/>
                            <a className="gb" href={blog.link} style={{ marginTop: '10%', marginLeft: '40%'}}><SiGithub size={"30px"} /></a>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
        </>
    );
}

export default Blogs;
