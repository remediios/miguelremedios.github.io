//Front-end Stack
import javascript from '@/images/skills/front-end/javascript.svg';
import typescript from '@/images/skills/front-end/typescript.svg';
import react from '@/images/skills/front-end/react.svg';
import nextJs from '@/images/skills/front-end/next-js.svg';
import redux from '@/images/skills/front-end/redux.svg';
import html from '@/images/skills/front-end/html.svg';
import css from '@/images/skills/front-end/css.svg';
import tailwindcss from '@/images/skills/front-end/tailwindcss.svg';
import styledComponents from '@/images/skills/front-end/styled-components.svg';
import antd from '@/images/skills/front-end/antd.svg';
import mui from '@/images/skills/front-end/mui.svg';

//Back-end Stack
import nodejs from '@/images/skills/back-end/nodejs.svg';
import python from '@/images/skills/back-end/python.svg';
import java from '@/images/skills/back-end/java.svg';
import expressJS from '@/images/skills/back-end/express.svg';
import fastify from '@/images/skills/back-end/fastify.svg';
import spring from '@/images/skills/back-end/spring.svg';
import mysql from '@/images/skills/back-end/mysql.svg';
import postgresql from '@/images/skills/back-end/postgresql.svg';
import mongodb from '@/images/skills/back-end/mongodb.svg';
import redis from '@/images/skills/back-end/redis.svg';
import firebase from '@/images/skills/back-end/firebase.svg';
import supabase from '@/images/skills/back-end/supabase.svg';

//Machine Learning Stack
import r from '@/images/skills/machineLearning/r.svg';
import matlab from '@/images/skills/machineLearning/matlab.svg';
import tensorflow from '@/images/skills/machineLearning/tensorflow.svg';
import pytorch from '@/images/skills/machineLearning/pytorch.svg';
import scikitLearn from '@/images/skills/machineLearning/scikitLearn.svg';
import pandas from '@/images/skills/machineLearning/pandas.svg';

//Tools Stack
import git from '@/images/skills/tools/git.svg';
import github from '@/images/skills/tools/github.svg';
import docker from '@/images/skills/tools/docker.svg';
import aws from '@/images/skills/tools/aws.svg';
import gcp from '@/images/skills/tools/gcp.svg';
import azure from '@/images/skills/tools/azure.svg';
import vercel from '@/images/skills/tools/vercel.svg';
import postman from '@/images/skills/tools/postman.svg';
import insomnia from '@/images/skills/tools/insomnia.svg';

//Experience
import elecctro from '@/images/experience/elecctro_logo.jpeg';
import tvremedios from '@/images/experience/tvremedios_logo.jpg';

//Education
import kcl from '@/images/education/kcl.svg';
import kcl_thesis from '@/images/education/kcl_thesis.png';
import brunel from '@/images/education/brunel.svg';
import brunel_thesis from '@/images/education/brunel_thesis.png';
import extp from '@/images/education/extp.jpg';

//Projects
//Images
import blendr from '@/images/projects/blendr.png';
import vista from '@/images/projects/vista.png';
import fastifyAPI from '@/images/projects/fastify-prisma-rest-api.png';
import expressAPI from '@/images/projects/express-rest-api.png';
import pomodoro from '@/images/projects/pomodoro.gif';
import cryptoTrading from '@/images/projects/cryptocurrency-trading.png';
import fyp from '@/images/projects/final-year-project.png';
import silentIngredient from '@/images/projects/silent-ingredient.png';
//User Images
import remediosLogo from '@/images/remedios-red-logo.png';
import profileLogo from '@/images/projects/profile.svg';

export const skillImages = {
  frontEnd: {
    javascript,
    typescript,
    react,
    nextJs,
    redux,
    html,
    css,
    tailwindcss,
    styledComponents,
    antd,
    mui,
  },
  backEnd: {
    nodejs,
    python,
    java,
    expressJS,
    fastify,
    spring,
    mysql,
    postgresql,
    mongodb,
    redis,
    firebase,
    supabase,
  },
  machineLearning: {
    python,
    r,
    matlab,
    tensorflow,
    pytorch,
    scikitLearn,
    pandas,
  },
  tools: {
    git,
    github,
    docker,
    aws,
    gcp,
    azure,
    vercel,
    postman,
    insomnia,
  },
};

export const experience = {
  elecctro,
  tvremedios,
};

export const education = {
  masters: {
    img: kcl,
    doc: kcl_thesis,
  },
  bachelors: {
    img: brunel,
    doc: brunel_thesis,
  },
  highSchool: {
    img: extp,
    doc: '',
  },
};

export const projectsImages = {
  usersImg: { remediosLogo, profileLogo },
  projectsImg: {
    vista,
    blendr,
    fastifyAPI,
    expressAPI,
    pomodoro,
    cryptoTrading,
    fyp,
    silentIngredient,
  },
};
