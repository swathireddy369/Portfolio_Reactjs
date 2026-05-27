import IconCloud from './Componente';
import './skill.css'

const Skill = () => {
    return ( 
        <div className="skil">
            <p style={{margin:'3%',fontSize:'40px'}}>About Me</p>
            <div className='card'>
            <div className='leftCard'>
                    <p>Hello, I'm Swathi Amaravadi 👋</p>
                    <p>I'm a <strong>Sr. Java Full Stack Developer</strong> with 8+ years of experience building enterprise systems across banking, healthcare, and fintech — with recent production experience integrating LLMs directly into Spring Boot services at scale.</p>
                    <p>I currently work at <a href='https://www.usbank.com/'><u>U.S. Bank</u></a> (Texas), where I build Java 17 &amp; Spring Boot 3.x microservices for core banking workflows and integrate OpenAI GPT and Claude APIs into production services — cutting analyst reporting time by 50% and improving response accuracy by 35%.</p>
                    <p>I hold an <strong>M.S. in Computer Science</strong> from the <a href="https://www.bridgeport.edu/"><u>University of Bridgeport</u></a> (GPA 3.84) and have previously built production systems at UnitedHealth Group, Envision Enterprise Solutions (Rubus Digital), and Suraaga Technologies.</p>
                    <p>I specialize in <strong>RAG pipelines, LangChain, Spring AI, AWS Bedrock</strong>, and embedding-based search — combining deep Java backend expertise with hands-on GenAI integration across financial and healthcare data workflows.</p>
                    <p>You can check out my coding progress on <a href="https://leetcode.com/u/Swathi369/"><u>LeetCode</u></a> and connect with me on <a href="http://www.linkedin.com/in/amaravadi-swathi369"><u>LinkedIn</u></a>. 👩‍💻</p>
                </div>
                <div className='rightCard'>
                    <IconCloud />
                </div>
            </div>
        </div>

     );
}
 
export default Skill;