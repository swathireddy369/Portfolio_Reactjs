import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            {props.data.map((item, i) => {
                return(
                <div key={i} className="project" style={{ backgroundColor: item.color, borderColor: item.border}}>
                    <div className="head">
                        <h2>{item.title}{' '}
                        <span className="logo">
                                    <a href={item.git} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </span>
                                {item.demo && (
                                <span className="logo">
                                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                </span>)}
                        </h2>
                    </div>
                    <ul>
                        {item.description.map((point, j)=>{
                            return(
                                <li key={j}>{point}</li>
                            );
                        })}
                    </ul>
                    <p style={{fontSize: 'large'}}><i>
                    {Array.isArray(item.tech) &&
                                    item.tech.every((techItem) => typeof techItem === 'object' && 'name' in techItem && 'badge' in techItem) &&
                                    item.tech.map((techItem, k) => (
                                        <img
                                            key={k}
                                            src={techItem.badge}
                                            alt={techItem.name}
                                            style={{ marginRight: '5px', padding: '5px' }}
                                        />
                                    ))}
                    </i></p>
                </div>
                );
                
            })}
        </div>
       
    );
   
}

export default ProjectCard;