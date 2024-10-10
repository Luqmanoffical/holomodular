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
import vrpano from '../assets/vrpano.svg'
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
    imgUrl: planat6,
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: planat7,
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: planat8,
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
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
