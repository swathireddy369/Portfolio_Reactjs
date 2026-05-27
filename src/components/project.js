import "./project.css"
import ProjectCard from "./ProjectCard";
const Project = () => {
    const data = [
        {
            title: ' Movies Review and Trailer Application',
            color: 'rgb(149, 125, 173)',
            border: 'rgb(118, 98, 156)',
            description: [
                'Architected a movie review platform utilizing REST APIs for CRUD operations and third-party trailer integrations.',
                'achieved a 99.9% uptime and processed over 100,000+ reviews with no downtime.'
            ],
            tech: [
                { name: 'ReactJs', badge: "https://img.shields.io/badge/ReactJS-E23237?style=for-the-badge&logo=react&logoColor=white" },
                { name: 'SpringBoot', badge: 'https://img.shields.io/badge/springboot-F37626?style=for-the-badge&logo=springboot&logoColor=white' },
                { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
                { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
                { name: 'netlify', badge: 'https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
                { name: 'render', badge: 'https://img.shields.io/badge/render-0066B2?style=for-the-badge&logo=render&logoColor=white' },
                  ],
            git: 'https://github.com/swathireddy369/MoviesReview_Reactjs_Client',
            demo: 'https://authmoviewreviews.netlify.app/login'
        },
        {
            title: 'Rubus (Product)',
            color: 'rgb(210, 145, 188)',
            border: 'rgb(152, 45, 120)',
            description: [
                'Designed interactive dashboards and trends for real-time data visualization in Rubus Industrial 4.0 IIoT platform.',
                'Developed HMI using SVG, downtime logs, and scheduled jobs for efficient equipment monitoring andreporting.',
                'Preemptively identified fault ranges and triggered timely alerts to reduce maintenance downtime.'
            ],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'Redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white" },
                { name: 'apacheecharts', badge: "https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white" },
                { name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white" },
            ],


        },
        {
            title: ' RAK Ceramics',
            color: ' rgb(146, 185, 189)',
            border: ' rgb(1, 134, 103)',
            description: [
                'Built an Energy Management System (EMS) for RAK Ceramics, incorporating E-Log Books, Trend Analysis',
                'Downtime Logs, and Process Module Reports. Enhanced operational efficiency, optimized energy consumption and improved performance through real-time data monitoring, analytics, and reporting.'],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'Redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white" },
                { name: 'apacheecharts', badge: "https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white" },
                { name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white" },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],

        },
        {
            title: ' RAK Ports',
            color: ' rgb(245, 135, 165)',
            border: ' rgb(221, 102, 102)',
            description: [
                'Developed interactive dashboards and HMI interfaces for real-time monitoring and performance tracking of cranes.',
                'Implemented equipment overviews and a Mobile Harbor Crane Management System to reduce breakdowns and improve productivity through continuous monitoring and performance analysis.'],
            tech: [
                { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white" },
                { name: 'apacheecharts', badge: "https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white" },
                { name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white" },
                { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
        },
        {
            title: 'Tic Tac Toe-vanilla-js',
            color: 'rgb(126, 178, 223)',
            border: ' rgb(13, 184, 197)',
            description: [
                'Implemented interactive Tic-Tac-Toe game using Vanilla-js',
            ],
            tech: [
                { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
                { name: 'netlify', badge: 'https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
           
           
            ],
            git: 'https://github.com/swathireddy369/Tictactoe-vanilla-js',
            demo: 'https://tic-tac-toe-vanillajsfinal.netlify.app/',
        },
        {
            title: 'Tic Tac Toe-Reactjs',
            color: 'rgb(255, 145, 128)',
            border: 'rgb(285, 119, 119)',
            description: ['Implemented interactive Tic-Tac-Toe game using Reactjs'],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
                { name: 'netlify', badge: 'https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
           
           
            ],
            git: 'https://github.com/swathireddy369/tictactoe_reactjs',
            demo: 'https://tictactoereactjsfinal.netlify.app/',
        },
        {
            title: 'Snake-Game-Vanilla-Js',
            color: 'rgb(254, 229, 81)',
            border: 'rgb(230, 188, 5)',
            description: ['Coded and deployed Snake-Game with Vanilla-Js'],
            tech: [
                { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
                { name: 'netlify', badge: 'https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
           
           
            ],
            git: 'https://github.com/swathireddy369/Snake-Game-Vanilla-Js',
            demo: 'https://snakegame-vanilla-js.netlify.app/'
        },
        {
            title: 'Snake-Game-Reactjs',
            color: 'rgb(190, 245, 116)',
            border: 'rgb(156, 207, 85)',

            description: ['Coded and deployed Snake-Game with React-Js'],
            tech: [
                { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
                { name: 'netlify', badge: 'https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
           
            ],
            git: 'https://github.com/swathireddy369/React_SnakeGame',
            demo: 'https://snakegamereactfinal.netlify.app/'
        }
    ]

    return(
        <div className='projects'>
            <p style={{margin:'3%',fontSize:'40px', fontFamily: 'Montserrat'}}>Projects</p>
            <ProjectCard  data={data}/>
        </div>
    );
}

export default Project;