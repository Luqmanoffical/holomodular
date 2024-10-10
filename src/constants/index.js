import planat1 from '../assets/planet-01.jpg'
import planat2 from '../assets/planet-02.webp'
import planat3 from '../assets/planet-03.webp'
import planat4 from '../assets/planet-04.webp'
import planat5 from '../assets/planet-05.png'
import planat6 from '../assets/planet-06.png'
import planat7 from '../assets/planet-07.png'
import planat8 from '../assets/planet-08.png'
import { IoMdRocket } from 'react-icons/io'; // For Driving Innovation
import { FaDatabase } from 'react-icons/fa'; // For Data Querying
import { MdBuild } from 'react-icons/md'; // For The Microservices Foundation
import { FaRegLightbulb } from 'react-icons/fa';
import bricks from '../assets/1Logo.png'
import qurey from '../assets/2Logo.png'
import len from '../assets/3Logo.png'

import headset from '../assets/headset.svg'


export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: planat1,
    title: 'Artificial Intelligence',
  },
  {
    id: 'world-2',
    imgUrl: planat2,
    title: 'Cloud Computing',
  },
  {
    id: 'world-3',
    imgUrl: planat3,
    title: 'Augmented Reality',
  },
  {
    id: 'world-4',
    imgUrl: planat4,
    title: 'Virtual Reality',
  },
  // {
  //   id: 'world-5',
  //   imgUrl: planat5,
  //   title: 'Hawkins Labs',
  // },
];

export const startingFeatures = [
  'Explore our innovative products, from microservices to augmented reality applications, designed to transform your workflow.',
  'Start using ServiceBricks to streamline your development process and deploy custom microservices tailored to your business needs.',
  'Utilize ServiceQuery to effortlessly connect to your data, whether its from SQL or NoSQL databases, and simplify your querying process.',
  'Dive into our HoloLens 2 prototype and experience the thrill of interactive environments—perfect for enhancing creativity and collaboration.'
];

export const newFeatures = [
  {
    // imgUrl: vrpano,
    icon: IoMdRocket ,
    title: 'Driving Innovation',
    subtitle:
        'We are building cutting-edge, efficient, scaleable and maintainable software.',
  },
  {
    icon: FaDatabase ,
    title: 'Data Querying ',
    subtitle:
        'ServiceQuery is a universal data querying API for polyglot data access across SQL and NoSQL databases.',
  },
  {
    icon: MdBuild ,
    title: 'The Microservices Foundation',
    subtitle:
        'ServiceBricks streamlines the creation and management of scalable, customizable microservices for your business.',
  },
  {
    icon: FaRegLightbulb ,
    title: 'Investing in Future Technologies',
    subtitle:
        'Our goal at HoloModular is to develop new and innovative technologies to compliment an augmented and virtual reality world.',
  },
];

export const insights = [
  {
    imgUrl: bricks,
    title: 'ServiceBricks',
    subtitle:
        'A powerful microservices platform that simplifies the development and maintenance of distributed systems, enabling teams to create tailored, scalable solutions.',
  },
  {
    imgUrl: qurey,
    title: 'ServiceQuery',
    subtitle:
        'A universal data querying API that provides seamless access to both relational (SQL) and document (NoSQL) databases, allowing for flexible data management.',
  },
  {
    imgUrl: len,
    title: 'HoloLens 2',
    subtitle:
        'Experience augmented reality like never before with our prototype that lets you wield superpowers shoot lasers and rockets while engaging with interactive environments using spatial recognition and realistic animations.',
  },
];

import twit from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import face from '../assets/facebook.svg'
export const socials = [
  {
    name: 'twitter',
    url: twit,
  },
  {
    name: 'linkedin',
    url: linkedin,
  },
  {
    name: 'instagram',
    url: instagram,
  },
  {
    name: 'facebook',
    url: face,
  },
];
