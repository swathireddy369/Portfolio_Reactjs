import React from 'react';
import './Componente.css';

import { Cloud } from 'react-icon-cloud';
import {
  siReact,
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siAngular,
  siNodedotjs,
  siMongodb,
  siGit,
  siGithub,
  siDocker,
  siKubernetes,
  siPostgresql,
  siMysql,
  siApachekafka,
  siSpring,
  siPython,
  siAmazonaws,
  siMicrosoftazure,
  siRedis,
  siJenkins,
  siOracle,
  siAntdesign,
} from 'simple-icons';

const tagCanvasOptions = {
  outlineColour: 'transparent',
  imageMode: 'both',
  shape: 'hcylinder',
  lock: 'x',
  imagePosition: 'top',
  initial: [0, -0.1],
  fadeIn: 3000,
  zoom: 0.9,
  wheelZoom: false,
  pinchZoom: true,
  shuffleTags: true,
  frontSelect: true,
  textHeight: 18,
  reverse: true,
  depth: 0.5,
  maxSpeed: 0.04,
  minSpeed: 0.02,
};

const JAVA_SVG = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Java</title><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.478 3.618-.478s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.891 3.776-.891M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.063.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.54 1.644-2.469 6.197-3.665 5.19-7.626M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"/></svg>';

const SPRINGBOOT_SVG = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spring Boot</title><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.492 1.424a5.38 5.38 0 0 1-.061-.065C5.255 16.13 5.07 13.94 6.553 12c1.365-1.74 4.484-3.543 7.476-2.491-2.174 1.472-2.578 3.476-2.578 3.476s3.55-1.793 6.601-4.795c1.682-1.653 3.145-4.464 3.145-4.464.508 1.79 1.01 5.17-1.598 9.193-.078.113-.155.226-.237.34.238.012.473.03.706.059 1.38.175 2.624.77 3.163 2.15l.03.067h-.001C22.7 16.62 21.487 17.001 20.205 16.392z"/></svg>';

const iconData = [
  { name: 'Java',        hex: '007396', svg: JAVA_SVG },
  { name: 'Spring Boot', hex: '6DB33F', svg: SPRINGBOOT_SVG },
  { name: 'Python',      icon: siPython },
  { name: 'React',       icon: siReact },
  { name: 'TypeScript',  icon: siTypescript },
  { name: 'Angular',     icon: siAngular },
  { name: 'HTML5',       icon: siHtml5 },
  { name: 'CSS3',        icon: siCss3 },
  { name: 'JavaScript',  icon: siJavascript },
  { name: 'Ant Design',  icon: siAntdesign },
  { name: 'Node.JS',     icon: siNodedotjs },
  { name: 'Kafka',       icon: siApachekafka },
  { name: 'Spring',      icon: siSpring },
  { name: 'Docker',      icon: siDocker },
  { name: 'Kubernetes',  icon: siKubernetes },
  { name: 'AWS',         icon: siAmazonaws },
  { name: 'Azure',       icon: siMicrosoftazure },
  { name: 'PostgreSQL',  icon: siPostgresql },
  { name: 'MySQL',       icon: siMysql },
  { name: 'MongoDB',     icon: siMongodb },
  { name: 'Redis',       icon: siRedis },
  { name: 'Oracle',      icon: siOracle },
  { name: 'Jenkins',     icon: siJenkins },
  { name: 'Git',         icon: siGit },
  { name: 'GitHub',      icon: siGithub },
];

const icons = iconData.map(({ name, icon, hex, svg }) => {
  const resolvedHex = icon ? icon.hex : hex;
  const resolvedSvg = icon ? icon.svg : svg;
  return (
    <a
      key={name}
      href="#/"
      onClick={(e) => e.preventDefault()}
      className="icon-with-label"
      title={name}
      style={{ color: `#${resolvedHex}` }}
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(resolvedSvg)}`}
        alt={name}
        className="icon-image"
      />
      <span className="icon-label">{name}</span>
    </a>
  );
});

const IconCloud = () => {
  return (
    <Cloud options={tagCanvasOptions}>
      {icons}
    </Cloud>
  );
};

export default IconCloud;
