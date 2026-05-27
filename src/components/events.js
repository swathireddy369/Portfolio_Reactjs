import React, { useState } from 'react';
import './events.css';
import {ImGithub} from "react-icons/im";
import img1 from '../img/IMG_1789.jpeg';
import img2 from '../img/IMG_1805.jpeg';
import img5 from '../img/Screenshot 2024-08-25 165802.png';
import img6 from '../img/clements.jpg';
import img7 from '../img/hack1.png';
import img8 from '../img/hack2.png';



const Events = () => {
  const events = [
    {
      title: 'OSPOs for Good 2024 - the United Nations',
      date: 'July 9-10, 2024',
      location: 'United Nations Headquarters, New York',
      description: `
        The UN OSPOs for Good 2024 conference was a significant event focused on harnessing the power of Open Source Program Offices (OSPOs) to advance Sustainable Development Goals (SDGs) globally. It brought together leading experts, innovators, and practitioners to explore how open-source technology can drive sustainable development and foster global collaboration.
      `,
      highlights: [
        '1. Focus on SDGs: The conference highlighted the role of OSPOs in advancing Sustainable Development Goals, emphasizing how open-source technology can contribute to equitable and sustainable global development.',
        '2. Insights from Industry Leaders: Verizon’s CEO Hans Vestberg delivered an inspiring keynote, discussing the importance of open-source technology in achieving SDGs and advocating for global access and effective digital tool utilization.',
        '3. Diverse Expert Panels: Panels covered a range of topics including Open Source and AI, its impact in the Global South, and its role within the UN and governments, providing valuable perspectives on the broad applications of open-source initiatives.',
        '4. Networking and Growth: The event was a dynamic platform for networking, learning, and personal growth, offering opportunities to connect with influential figures and gain inspiration from their experiences and successes in the open-source community.'],
      image: [img2, img1]
    },
    {
      title: 'Mark and Pearle Clements Internship Award',
      date: 'May 2024',
      location: 'Issued by Central Career Services, Syracuse University',
      description: `As a recipient of the Mark and Pearle Clements Internship Award, I gained valuable hands-on experience in my field through a unique, fully-funded summer internship, enhancing my skills and aligning my career goals with real-world practice.`,
      highlights: [
        `1. Awarded the Mark and Pearle Clements Internship Award: Recognized for exceptional initiative and creativity in developing a unique summer internship, aimed at bridging academic theory with practical industry experience under the mentorship of an experienced professional.`,
        `2. Secured Funding for a Self-Designed Internship: Successfully designed and executed an internship that aligned with my career goals, leveraging financial support from the award to explore innovative opportunities that would otherwise be inaccessible.`,
        `3. Enhanced Career Development: Utilized the award to gain hands-on experience in my field of interest, allowing me to apply theoretical knowledge in a real-world setting, while earning academic credit and expanding my professional network.`,
      ],
      image: [img5, img6]
    },
    {
      title: 'Wolfram Award for "Sage - an AI-Powered First Aid Bot"',
      date: 'July 2024',
      location: 'Issued by Taskformer\'s AI Chatbot Hackathon',
      description: `Developed Sage, a health chatbot using Python, LangChain, and Streamlit, which won the Wolfram Award. The project involved applying advanced skills in natural language processing, machine learning, and LLMs to diagnose injuries and provide users with timely, accurate health advice.`,
      highlights: [
        `1. Developed Sage, a Health Chatbot: Utilized Python, LangChain, and Streamlit to create a chatbot for diagnosing injuries and offering health advice.`,
        `2. Award-Winning Project: Received the Wolfram Award for innovative use of NLP and machine learning in health diagnostics.`,
        `3. Advanced NLP and ML Techniques: Leveraged natural language processing and machine learning to ensure accurate and timely health guidance.`,
        `4. Effective User Interaction: Designed Sage to provide relevant precautions and advice based on user symptoms, enhancing user experience and support.`,
      ],
      image: [img8, img7],
      githubLink: 'https://github.com/dasaribhumika/sage-health-chatbot',
    },
    
    // Add more events as needed
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === events[currentEventIndex].image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? events[currentEventIndex].image.length - 1 : prevIndex - 1
    );
  };

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <p style={{ margin: '3%', fontSize: '40px', fontFamily: 'Montserrat' }}>
        Featured 
      </p>
      <div className="events-slider-container" id='events'>
        <button className="events-slider-btn prev-btn" onClick={prevEvent}>&#10094;</button>
        <div className="events-image-slider">
          <button className="events-slider-btn prev-btn" onClick={prevImage}>&#10094;</button>
          <div
            className="events-image-slider-content"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {events[currentEventIndex].image.map((image, index) => (
              <div
                className={`events-image-slide ${index === currentImageIndex ? 'active' : ''}`}
                key={index}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="events-slider-btn next-btn" onClick={nextImage}>&#10095;</button>
        </div>
        <button className="events-slider-btn next-btn" onClick={nextEvent}>&#10095;</button>
        <div className="events-content-slider">
          <div className="events-content">
            <h2>{events[currentEventIndex].title}</h2>
            <h3>{events[currentEventIndex].date}</h3>
            <h3>{events[currentEventIndex].location}</h3>
            <p style={{ textAlign: 'left' }}>{events[currentEventIndex].description}</p>
            <ul style={{ textAlign: 'left' }}>
              {events[currentEventIndex].highlights.map((highlight, index) => (
                <li key={index}>
                  {highlight.split(': ').map((part, idx) => (
                    <React.Fragment key={idx}>
                      {idx === 0 ? (
                        <span className="highlight">{part}: </span>
                      ) : (
                        part
                      )}
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
            {events[currentEventIndex].githubLink && (
            <p>
             View Source Code - <a className="gh" href={events[currentEventIndex].githubLink}><ImGithub size={"30px"}/></a>
            </p>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
