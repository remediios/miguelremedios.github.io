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
    img: experience.elecctro,
    role: 'Software Engineer Intern',
    company: 'Elecctro',
    date: 'June 2022 - August 2022',
    desc: "Developing a client dashboard for the company's vending machines application interface. Ensured clean code practices and refactored te previous legacy and outdated code for the company's dashboard. Worked with several departments to combine the progress of all into a full-stack application to deliver pertinent statistical information for the client.",
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
    id: 1,
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
    date: 'October 2023 - November 2023',
    description:
      'VISTA is a comprehensive home rental booking system application built using NextJS, Supabase, Prisma, Kinde, ShadcnUI, and TailwindCSS. This application aims to streamline the process of booking rental homes by providing a user-friendly interface and robust backend.',
    image: projectsImages.vista,
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
    image: projectsImages.blendr,
    tags: [
      'React.JS',
      'Typescript',
      'Appwrite',
      'TailwindCSS',
      'ShadCN UI',
      'React Query',
      'Git',
      'Javascript',
      'CRUD Operations',
    ],
    category: 'webApp',
    github: 'https://github.com/remediios/blendr',
    demo: '',
  },
];
