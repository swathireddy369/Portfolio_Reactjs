import React, { useState } from 'react';
import './experience.css';

import University_of_Bridgeport from '../img/University_of_Bridgeport.png';
import suraaga_logo from "../img/suraaga_logo.png";
import rubus_logo from "../img/rubus_logo.png";
import usbank_logo from "../img/usnank_logo.jpg";

const experiences = [
  {
    id: 1,
    title: "Sr. Java Full Stack Developer | GenAI & LLM Integration",
    company: "@U.S. Bank",
    website: "https://www.usbank.com/",
    // logo: usbank_logo,
    duration: "Feb 2025 - Present",
    type: "Texas, USA",
    description: [
      "Designed and maintained Java 17 and Spring Boot 3.x microservices for core banking workflows covering transaction processing, data validation, reconciliation, and secure API integrations.",
      "Integrated OpenAI GPT and Claude APIs into production Spring Boot services for financial data summarization and automated review workflows, cutting analyst reporting time by 50% and improving response accuracy by 35%.",
      "Built production RAG pipelines using LangChain, LangChain4J, Spring AI, AWS Bedrock, and Pinecone for contextual financial data retrieval, covering chunking strategies, vector indexing, and prompt construction end to end.",
      "Developed Apache Camel routes for data transformation and cross-system integration, and handled Kafka-based event processing for asynchronous banking workflows.",
      "Built React 18 and TypeScript dashboard components connected with Spring Boot APIs to display transaction insights, alerts, reconciliation status, and operational metrics.",
      "Deployed and managed containerized microservices using Docker, Kubernetes, and Red Hat OpenShift; maintained CI/CD pipelines via Azure DevOps, Jenkins, SonarQube, and Blackduck.",
    ],
    techStack: [
      { name: 'Java 17', badge: 'https://img.shields.io/badge/Java_17-007396?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'Spring Boot 3.x', badge: 'https://img.shields.io/badge/Spring%20Boot_3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
      { name: 'Spring AI', badge: 'https://img.shields.io/badge/Spring%20AI-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
      { name: 'OpenAI GPT', badge: 'https://img.shields.io/badge/OpenAI%20GPT-412991?style=for-the-badge&logo=openai&logoColor=white' },
      { name: 'LangChain', badge: 'https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white' },
      { name: 'AWS Bedrock', badge: 'https://img.shields.io/badge/AWS%20Bedrock-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white' },
      { name: 'Pinecone', badge: 'https://img.shields.io/badge/Pinecone-000000?style=for-the-badge&logoColor=white' },
      { name: 'RAG Pipelines', badge: 'https://img.shields.io/badge/RAG%20Pipelines-005571?style=for-the-badge' },
      { name: 'Apache Kafka', badge: 'https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white' },
      { name: 'React 18', badge: 'https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
      { name: 'TypeScript', badge: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
      { name: 'Azure Cosmos DB', badge: 'https://img.shields.io/badge/Azure%20Cosmos%20DB-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white' },
      { name: 'Kubernetes', badge: 'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white' },
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      { name: 'Azure DevOps', badge: 'https://img.shields.io/badge/Azure%20DevOps-0078D4?style=for-the-badge&logo=azuredevops&logoColor=white' },
      { name: 'Dynatrace', badge: 'https://img.shields.io/badge/Dynatrace-1496FF?style=for-the-badge&logo=dynatrace&logoColor=white' },
    ]
  },
  {
    id: 2,
    title: "Graduate Teaching Assistant – School of Computer Science & Engineering",
    company: "@University of Bridgeport",
    website: "https://www.bridgeport.edu/",
    // logo: University_of_Bridgeport,
    duration: "Sept 2024 - May 2025",
    type: "Bridgeport, CT",
    description: [
      "Mentored 50+ students in Natural Language Processing (NLP) and Large Language Models (LLMs), improving comprehension and project implementation.",
      "Conducted lab sessions and guided real-world project applications, contributing to a 25% increase in student project completion rates.",
      "Guided students on Java, Spring Boot, REST APIs, SQL, debugging, and foundational backend engineering concepts.",
      "Collaborated with faculty on LLM research initiatives and course material development.",
    ],
    techStack: [
      { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      { name: 'NumPy', badge: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white' },
      { name: 'PyTorch', badge: 'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white' },
      { name: 'Java', badge: 'https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
    ],
  },
  {
    id: 3,
    title: "Full Stack Java Developer",
    company: "@UnitedHealth Group",
    website: "https://www.unitedhealthgroup.com/",
    // logo: University_of_Bridgeport,
    duration: "Feb 2024 - Dec 2024",
    type: "Hartford, CT",
    description: [
      "Built and maintained Spring Boot 3.x microservices for healthcare claims workflows covering claims intake, validation, status tracking, downstream integrations, and reporting for clinical and operations teams.",
      "Developed React and TypeScript screens for claims dashboards, search views, status tracking, and operational reporting, integrated with Spring Boot REST APIs.",
      "Supported Kafka-based event processing for asynchronous claims updates, retry handling, and message-driven communication between microservices.",
      "Worked with Apache Beam Java SDK pipelines on GCP Dataflow to support claims and event data processing for downstream reporting workflows.",
      "Adopted GitHub Copilot across the claims microservices team for code generation and boilerplate reduction, cutting repetitive coding effort on REST API and service-layer work.",
      "Prototyped a RAG-based document retrieval layer using LangChain4J and FAISS for claims knowledge base search, reducing manual lookup time for the operations team.",
    ],
    techStack: [
      { name: 'Java 11', badge: 'https://img.shields.io/badge/Java_11-007396?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'Spring Boot 3.x', badge: 'https://img.shields.io/badge/Spring%20Boot_3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
      { name: 'LangChain4J', badge: 'https://img.shields.io/badge/LangChain4J-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white' },
      { name: 'FAISS', badge: 'https://img.shields.io/badge/FAISS-005571?style=for-the-badge' },
      { name: 'GitHub Copilot', badge: 'https://img.shields.io/badge/GitHub%20Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white' },
      { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
      { name: 'TypeScript', badge: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
      { name: 'Apache Kafka', badge: 'https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white' },
      { name: 'GCP Dataflow', badge: 'https://img.shields.io/badge/GCP%20Dataflow-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white' },
      { name: 'BigQuery', badge: 'https://img.shields.io/badge/BigQuery-4285F4?style=for-the-badge&logo=googlebigquery&logoColor=white' },
      { name: 'AWS ECS', badge: 'https://img.shields.io/badge/AWS%20ECS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white' },
      { name: 'Kubernetes', badge: 'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white' },
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      { name: 'Jenkins', badge: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white' },
      { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
      { name: 'Oracle', badge: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white' },
    ]
  },
  {
    id: 4,
    title: "Full Stack Java Developer, E3",
    company: "@Rubus Digital Inc / Envision Enterprise Solutions",
    website: "https://www.rubusdigital.com/",
    // logo: rubus_logo,
    duration: "July 2020 - December 2023",
    type: "Hyderabad, India",
    description: [
      "Built and maintained Java 11, Spring Boot, and Spring Cloud microservices for financial services workflows covering account operations, transaction processing, reporting, and cross-service integrations.",
      "Developed Apache Camel routes for data transformation, routing, enrichment, and integration between internal systems and external service endpoints.",
      "Developed React JS screens using JavaScript, HTML5, CSS3, and Bootstrap for financial dashboards, reporting pages, transaction views, and operational workflow screens.",
      "Owned JDBC, Hibernate ORM, and Oracle database integration including query tuning, PL/SQL updates, indexing support, and connection pool configuration.",
      "Containerized Spring Boot microservices using Docker and worked with DevOps teams on Jenkins-based CI/CD pipelines for build, test, and deployment activities.",
    ],
    techStack: [
      { name: 'Java 11', badge: 'https://img.shields.io/badge/Java_11-007396?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
      { name: 'Spring Cloud', badge: 'https://img.shields.io/badge/Spring%20Cloud-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
      { name: 'Apache Kafka', badge: 'https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white' },
      { name: 'React JS', badge: 'https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
      { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
      { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'Oracle', badge: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white' },
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      { name: 'Kubernetes', badge: 'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white' },
      { name: 'Jenkins', badge: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white' },
      { name: 'GitLab CI', badge: 'https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white' },
    ]
  },
  {
    id: 5,
    title: "Java / J2EE Developer",
    company: "@Suraaga Technologies Pvt Ltd",
    website: "https://suraaga.beyondscale.tech/",
    // logo: suraaga_logo,
    duration: "Apr 2018 - Jun 2020",
    type: "Hyderabad, India",
    description: [
      "Developed Java 8 and J2EE application modules using Spring, Hibernate ORM, JPA, and Oracle for internal business workflows and enterprise application features.",
      "Built and consumed SOAP web services using Apache CXF, WSDL, JAXB, and XML marshalling/unmarshalling for integration with external and internal systems.",
      "Developed and maintained UI components using JSF, XSLT, HTML, CSS, and JavaScript for application screens and form-based workflows.",
      "Wrote and maintained JUnit test cases for service-layer and DAO-layer components; managed builds and versioning using Maven and SVN.",
    ],
    techStack: [
      { name: 'Java 8', badge: 'https://img.shields.io/badge/Java_8-007396?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'Spring', badge: 'https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
      { name: 'Hibernate', badge: 'https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white' },
      { name: 'JPA', badge: 'https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logoColor=white' },
      { name: 'Oracle DB', badge: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white' },
      { name: 'Apache CXF', badge: 'https://img.shields.io/badge/Apache%20CXF-D22128?style=for-the-badge&logo=apache&logoColor=white' },
      { name: 'SOAP / WSDL', badge: 'https://img.shields.io/badge/SOAP%20%2F%20WSDL-005571?style=for-the-badge' },
      { name: 'JSF', badge: 'https://img.shields.io/badge/JSF-007396?style=for-the-badge&logo=java&logoColor=white' },
      { name: 'Maven', badge: 'https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white' },
      { name: 'JUnit', badge: 'https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white' },
      { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
    ]
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <p style={{margin:'3%', fontSize:'40px', fontFamily: 'Montserrat'}}>Experience</p>
      <div className='experience'>
        <div className='sidebar'>
          <ul>
            {experiences.map(experience => (
              <li key={experience.id} onClick={() => handleExperienceClick(experience)} className={selectedExperience?.id === experience.id ? 'active' : ''}>
                {experience.title}, {experience.company.split('@')[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className='details'>
          {selectedExperience && (
            <div className='card1'>
              <p className='title1'>
                {selectedExperience.title} <span className='company1'>
                  <a href={selectedExperience.website} target='_blank' rel='noopener noreferrer'>
                    {selectedExperience.company}
                    {/* <img src={selectedExperience.logo} alt={`${selectedExperience.company.split('@')[1]} logo`} className='company-logo' /> */}
                  </a>
                </span>
              </p>
              <p className='duration'>{selectedExperience.duration} | {selectedExperience.type}</p>
              <ul>
                {selectedExperience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className='tech-stack'>
                {selectedExperience.techStack.map((tech, index) => (
                  <img style={{ marginRight: '5px', padding: '5px' }} key={index} src={tech.badge} alt={tech.name} className='tech-badge' />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;