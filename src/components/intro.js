import './intro.css';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
        <div className="cont" id='intro'>
            <div className="intro">
            <div className="name">Swathi Amaravadi</div>
            <div className="titles">Sr. Java Full Stack Developer | GenAI &amp; LLM Integration</div>
                <div className="one">
                <Typewriter
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("SR. JAVA FULL STACK DEVELOPER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("GENAI &amp; LLM INTEGRATION ENGINEER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("RAG PIPELINE &amp; MICROSERVICES SPECIALIST")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
                </div>
                <p className="resume">
                   <a href='/Swathi_A_FSJD_AI_Resume.docx' download>Download Resume</a>
                </p>
            </div>
            <div className="ima">
            </div>
        </div>
     );
}

export default Intro;