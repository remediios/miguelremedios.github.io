import {
  skillImages,
  experience,
  education as educationImages,
  projectsImages,
} from '@/utils/images';

export const biography = {
  name: 'Miguel Remédios',
  roles: [
    'Software Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
  ],
  description:
    'I am a software engineer, with a passion in both machine learning and full-stack development. I specialize in tackling intricate challenges and thrive in collaborative settings. My dedication to continuous learning and problem-solving fuels my drive to deliver results across various domains.',
  github: 'https://github.com/remediios',
  resume: '',
  linkedin: 'https://www.linkedin.com/in/miguelremediioss/',
  twitter: '',
  insta: '',
  facebook: '',
};

export const skills = [
  {
    title: 'Front-End',
    skills: [
      {
        name: 'JavaScript',
        image: skillImages.frontEnd.javascript,
      },
      {
        name: 'TypeScript',
        image: skillImages.frontEnd.typescript,
      },
      {
        name: 'React',
        image: skillImages.frontEnd.react,
      },
      {
        name: 'NextJS',
        image: skillImages.frontEnd.nextJs,
      },
      {
        name: 'Redux',
        image: skillImages.frontEnd.redux,
      },
      {
        name: 'HTML',
        image: skillImages.frontEnd.html,
      },
      {
        name: 'CSS',
        image: skillImages.frontEnd.css,
      },
      {
        name: 'TailwindCSS',
        image: skillImages.frontEnd.tailwindcss,
      },
      {
        name: 'Styled-Components',
        image: skillImages.frontEnd.styledComponents,
      },
      {
        name: 'AntD',
        image: skillImages.frontEnd.antd,
      },
      {
        name: 'Material UI',
        image: skillImages.frontEnd.mui,
      },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      {
        name: 'NodeJS',
        image: skillImages.backEnd.nodejs,
      },
      {
        name: 'Python',
        image: skillImages.backEnd.python,
      },
      {
        name: 'Java',
        image: skillImages.backEnd.java,
      },
      {
        name: 'ExpressJS',
        image: skillImages.backEnd.expressJS,
      },
      {
        name: 'Fastify',
        image: skillImages.backEnd.fastify,
      },
      {
        name: 'Spring',
        image: skillImages.backEnd.spring,
      },
      {
        name: 'MySQL',
        image: skillImages.backEnd.mysql,
      },
      {
        name: 'PostgreSQL',
        image: skillImages.backEnd.postgresql,
      },
      {
        name: 'MongoDB',
        image: skillImages.backEnd.mongodb,
      },
      {
        name: 'Redis',
        image: skillImages.backEnd.redis,
      },
      {
        name: 'Firebase',
        image: skillImages.backEnd.firebase,
      },
      {
        name: 'Supabase',
        image: skillImages.backEnd.supabase,
      },
    ],
  },
  {
    title: 'AI-Machine Learning',
    skills: [
      {
        name: 'Python',
        image: skillImages.machineLearning.python,
      },
      {
        name: 'R',
        image: skillImages.machineLearning.r,
      },
      {
        name: 'Matlab',
        image: skillImages.machineLearning.matlab,
      },
      {
        name: 'TensorFlow',
        image: skillImages.machineLearning.tensorflow,
      },
      {
        name: 'PyTorch',
        image: skillImages.machineLearning.pytorch,
      },
      {
        name: 'Scikit-Learn',
        image: skillImages.machineLearning.scikitLearn,
      },
      {
        name: 'Pandas',
        image: skillImages.machineLearning.pandas,
      },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        image: skillImages.tools.git,
      },
      {
        name: 'GitHub',
        image: skillImages.tools.github,
      },
      {
        name: 'Docker',
        image: skillImages.tools.docker,
      },
      {
        name: 'AWS',
        image: skillImages.tools.aws,
      },
      {
        name: 'GCP',
        image: skillImages.tools.gcp,
      },
      {
        name: 'Azure',
        image: skillImages.tools.azure,
      },
      {
        name: 'Vercel',
        image: skillImages.tools.vercel,
      },
      {
        name: 'Postman',
        image: skillImages.tools.postman,
      },
      {
        name: 'Insomnia',
        image: skillImages.tools.insomnia,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: experience.rootkey,
    role: "Head of Research & Development",
    company: "ROOTKey",
    date: "November 2023 - Present",
    desc: "As Head of Research & Development, I lead and coordinate multidisciplinary teams to drive innovation across ROOTKey's blockchain and cybersecurity solutions. I oversee the execution of European Union-funded projects, ensuring alignment with strategic goals and compliance with international standards. Partnering closely with the CEO and CTO, I contribute to shaping the company's technological vision and long-term strategy. By fostering collaboration between R&D, product, and engineering teams, I ensure the seamless delivery of cutting-edge, secure, and scalable solutions that uphold ROOTKey’s commitment to data authenticity, integrity, and trust.",
    skills: [
      "Team Leadership",
      "Project Coordination",
      "Strategic Planning",
      "EU Project Management",
      "Collaboration with C-Suite",
      "Blockchain Innovation",
      "Cybersecurity",
      "Cross-functional Collaboration",
      "Stakeholder Engagement"
    ],
    doc: ""
  },
  {
    id: 1,
    img: experience.rootkey,
    role: 'FullStack Engineer',
    company: 'ROOTKey',
    date: 'May 2023 - Present',
    desc: "Led the development of ROOTKey's secure digital solutions, implementing innovative features across backend and frontend systems. Built scalable backend architectures using Node.js and Python, while designing intuitive client-facing interfaces with React and TypeScript. Enhanced system performance by debugging complex issues and optimizing APIs for decentralized asset management. Refined user interfaces for digital identity solutions, ensuring a seamless user experience. Collaborated with multidisciplinary teams to deliver robust, user-centric applications that align with ROOTKey’s mission of securing data integrity and authenticity.",
    skills: [
      'Python',
      'TypeScript',
      'React JS',
      'AWS',
      'Microservices',
      'Apache Kafka',
      'Node Js',
      'Git',
      'Unit/E2e Testing',
    ],
    doc: '',
  },
  {
    id: 2,
    img: experience.elecctro,
    role: 'Software Engineer Intern',
    company: 'Elecctro',
    date: 'June 2022 - August 2022',
    desc: "Drove significant improvements in the company's software infrastructure. I developed a robust client dashboard using JavaScript and Typescript, with React, replacing Redux with React Hooks and Context API for enhanced performance. Additionally, I refactored legacy code in the dashboard, improving maintainability and system performance while updating documentation for clarity. I also coordinated cross-departmental collaboration for a unified full-stack app, leveraging Tanstack Query for efficient API integration, resulting in a seamless user experience. Leading the full-stack app delivery, I utilized AWS CodeCommit for version control and YouTrack for project management, ensuring successful project outcomes.",
    skills: [
      'JavaScript',
      'TypeScript',
      'React JS',
      'AWS',
      'REST API',
      'Context API',
      'Node Js',
      'Git',
      'YouTrack',
      'Agile Development',
    ],
    doc: '',
  },
  {
    id: 3,
    img: experience.tvremedios,
    role: 'IT Assistant',
    company: 'TvRemédios Reparações',
    date: 'June 2017 - August 2019',
    desc: 'Installed and configured software and hardware in several client devices. In addition, troubleshooted client’s hardware problems and either repaired or replaced them. Configured hardware, devices and software to set up work stations for the different enterprise employees.',
    skills: [
      'Malware removal',
      'Hardware installation and replacement',
      "Workstation's setup",
    ],
    doc: '',
  },
];

export const education = [
  {
    id: 0,
    img: educationImages.masters.img,
    school: "King's College London",
    date: 'Sep 2022 - Sep 2023',
    grade: 'Pass with Merit',
    desc: "Studied an intensive year of Advanced Computing at King's College London for my Master's degree. Throughout the course, several important modules were studied from artificial intelligence to cybersecurity and software engineering subjects. A dissertation was written on the topic evidenced covering all insights and experience gained throughout the year and much more personal development.",
    degree: 'MSc Advanced Computing',
    thesis: [
      'Applying Machine Learning Naïve Bayes for Real-Time Cryptocurrency Price Prediction: An Empirical Study',
    ],
    doc: educationImages.masters.doc,
  },
  {
    id: 1,
    img: educationImages.bachelors.img,
    school: 'Brunel University London',
    date: 'Sep 2019 - Jun 2022',
    grade: '1st Class Honours (1:1)',
    desc: "Studied 3 years of Computer Science in this university for my Bachelor's degree, achieving a 1st Class Honours grade. This degree covered all important state-of-the-art topics from fundamentals to cybersecurity, software engineering and artificial intelligence. My specialisation with this degree is Software Engineering and a dissertation on the topic was written, achieving an A grade by the end.",
    degree: 'BSc (Hons) Computer Science (Software Engineering)',
    thesis: [
      'Behaviour-Based Biometrical Continuous Authentication in Web Applications',
    ],
    doc: educationImages.bachelors.doc,
  },
  {
    id: 2,
    img: educationImages.highSchool.img,
    school: 'Externato de Penafirme',
    date: 'Sep 2017 - Jun 2019',
    grade: '14/20',
    desc: 'Completed 3 years of Sciences and Technology degree at the high school.',
    degree: 'Sciences and Technology',
    thesis: '',
    doc: educationImages.highSchool.doc,
  },
];

export const projects = [
  {
    id: 0,
    title: 'Vista (Property Booking)',
    date: 'February 2024 - March 2024',
    description:
      'VISTA is a comprehensive home rental booking system application built using NextJS, Supabase, Prisma, Kinde, ShadcnUI, and TailwindCSS. This application aims to streamline the process of booking rental homes by providing a user-friendly interface and robust backend.',
    image: projectsImages.projectsImg.vista,
    tags: [
      'NextJS',
      'Typescript',
      'Prisma ORM',
      'Supabase',
      'ShadCN UI',
      'TailwindCSS',
      'Kinde',
      'Git',
    ],
    category: 'webApp',
    github: 'https://github.com/remediios/vista',
    demo: 'https://vista-woad.vercel.app/',
  },
  {
    id: 1,
    title: 'Blendr (Social Media App)',
    date: 'October 2023 - November 2023',
    description:
      'Blendr is a cutting-edge social network web application designed to bring people together through the joy of image sharing. Developed using a modern tech stack, including TypeScript, ReactJS, Appwrite, Shadcn, Tailwind CSS, and React Query, Blendr offers users an exceptional platform to connect, express their creativity, and interact with like-minded individuals in a visually captivating way. Key Features: Image Upload and Sharing, Feed and Timeline, Engaging Interactions, User Profiles, Discover and Explore, Security and Privacy, Mobile Responsive. If you wish to test the application without signing-up or logging in, here are the credentials to use: email: janedoe@gmail.com // password: janedoe123.',
    image: projectsImages.projectsImg.blendr,
    tags: [
      'React.JS',
      'Typescript',
      'Javascript',
      'Appwrite',
      'TailwindCSS',
      'ShadCN UI',
      'Tanstack Query',
      'Git',
    ],
    category: 'webApp',
    github: 'https://github.com/remediios/blendr',
    demo: '',
  },
  {
    id: 2,
    title: 'Real-Time Cryptocurrency Price Prediction',
    date: 'Sep 2022 - Aug 2023',
    description:
      "Cryptocurrencies have become a focal point of interest for investors and enthusiasts worldwide. Predicting their volatile prices is a challenge that can be addressed through machine learning. As part of my MSc in Advanced Computing at King's College London, I embarked on a research journey to develop a real-time and user-inputted cryptocurrency price prediction system using the Naive Bayes algorithm. This project is linked to a research study written for my thesis where further comparison with other machine learning models is performed to assess prediction performance.",
    image: projectsImages.projectsImg.cryptoTrading,
    tags: [
      'JavaScript',
      'React',
      'Python',
      'Jupyter Notebook',
      'ExpressJS',
      'Flask',
      'Scikit-learn',
      'PostgreSQL',
      'AI Models',
    ],
    category: 'machineLearning',
    github: 'https://github.com/remediios/cryptocurrency-trading',
    demo: '',
  },
  {
    id: 3,
    title: 'Fastify Prisma REST API',
    date: 'March 2024',
    description:
      'This project is a boilerplate codebase for building a RESTful API using Fastify, Prisma, Zod, and TypeScript. This project includes user and product management endpoints, authentication, request and response validation, and Swagger documentation.',
    image: projectsImages.projectsImg.fastifyAPI,
    tags: [
      'Fastify',
      'Typescript',
      'Prisma ORM',
      'Zod',
      'Docker',
      'PostgreSQL',
      'JWT Auth',
      'Swagger',
      'Postman',
      'Git',
    ],
    category: 'api',
    github: 'https://github.com/remediios/fastify-prisma-rest-api',
    demo: '',
  },
  {
    id: 4,
    title:
      'Behaviour-Based Biometrical Continuous Authentication in Web-Applications',
    date: 'Sep 2021 - May 2022',
    description:
      "In today's interconnected world, ensuring the security of web applications and user data is paramount. This project represents a groundbreaking initiative conceived as my final year project for the Computer Science degree at Brunel University London. This project addresses the critical need for enhancing web application security through continuous authentication. Rather than relying solely on traditional, often vulnerable methods like usernames and passwords, this project pioneers the use of biometric behavioral patterns as a more robust and user-friendly authentication mechanism. A research study is associated with this project where more details are documented on how a Logistic Regression Machine Learning model is used to perform intrusion detection.",
    image: projectsImages.projectsImg.fyp,
    tags: [
      'Java',
      'Python',
      'JavaScript',
      'React',
      'Spring Boot',
      'Flask',
      'Git',
      'Firebase',
      'MySQL',
      'NoSQL',
      'REST API',
      'AI Model',
    ],
    category: 'machineLearning',
    github: 'https://github.com/remediios/final-year-project',
    demo: '',
  },
  {
    id: 5,
    title: 'School System REST API',
    date: 'March 2024',
    description:
      ' This project is a REST API tailored for school system management. Leveraging ExpressJS, MariaDB, and Node, it facilitates student and user management, photo storage, and secure authentication. With features like database integration via Sequelize, file uploads with Multer, and deployment on Google Cloud Platform Virtual Machine using Docker, it offers a robust, scalable, and reliable solution for schools. Powered by modern technologies, it streamlines administrative tasks, ensuring efficiency and security in school operations.',
    image: projectsImages.projectsImg.expressAPI,
    tags: [
      'JavaScript',
      'ExpressJS',
      'MariaDB',
      'NodeJS',
      'Sequelize ORM',
      'JWT Auth',
      'Google Cloud Platform VPS',
      'Docker',
      'PM2',
      'Nginx',
      'Insomnia',
    ],
    category: 'api',
    github: 'https://github.com/remediios/school-rest-api',
    demo: '',
  },
  {
    id: 6,
    title: 'Pomodoro App',
    date: 'February 2024',
    description:
      'This is a Pomodoro Timer application built with React, designed to help users manage their time effectively using the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks of 5 minutes and a longer break of 15 minutes every 4 pomodoros (forming a corresponding cycle).',
    image: projectsImages.projectsImg.pomodoro,
    tags: [
      'Typescript',
      'React',
      'In-Memory Storage',
      'ContextAPI',
      'Custom Hooks',
      'AntD',
      'Git',
    ],
    category: 'webApp',
    github: 'https://github.com/remediios/pomodoro-app',
    demo: 'https://pomodortimero.netlify.app/',
  },
  {
    id: 7,
    title: 'Hono Redis REST API',
    date: 'April 2024',
    description:
      'This project is a boilerplate codebase for building a high-performance, globally distributed REST API using Cloudflare Workers, HonoJS, Redis, and NextJS. This project includes a speed search feature for country names, rate limiting, and caching mechanisms.',
    image: projectsImages.projectsImg.honoAPI,
    tags: [
      'Typescript',
      'NextJS',
      'Redis',
      'HonoJS',
      'Cloudflare Workers',
      'ShadcnUI',
      'Git',
    ],
    category: 'api',
    github: 'https://github.com/remediios/hono-redis-rest-api',
    demo: 'https://hono-redis-rest-api.vercel.app/',
  },
];
