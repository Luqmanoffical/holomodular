
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../lib/motion';
import { TitleText, TypingText } from './index';

import {Link} from 'react-router-dom'
const Free = () => (
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
className="flex md:flex-row flex-col gap-4"
  >

    <div className='mx-3 md:mx-16'>

        <TypingText title="        Free as in Beer
" textStyles="text-center font-bold text-xl lg:text-3xl" />

        <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative   w-full h-[550px]"
>
<p className="mt-[16px] font-normal  text-justify text-base lg:text-lg text-secondary-white">
Richard Stallman originally came up with the phrase <a href= "https://en.wikipedia.org/wiki/Gratis_versus_libre" className= "text-purple-500"
>"Free as in Beer" </a>  to describe software that is free as a matter of liberty, not price. We believe in this philosophy and have made our core software platforms free to use as well. Here is our take on it:
</p>
<p className="mt-[16px] font-normal text-justify text-base lg:text-lg text-secondary-white">
The recipe for beer is free. You can brew any type of beer you want, made from wheat, apples, honey or whatever you like. You can share your beer with your friends and family, or you can even sell the beer. The recipe for beer is free, you just have to add the water, ingredients and put in the work to follow the recipe
</p>
<p className="mt-[16px] font-normal text-justify  text-base lg:text-lg text-secondary-white">
We have developed technology that is the recipe for building microservices. You can use it to build any type of software you want with it. ServiceBricks and ServiceQuery is our brand that allow you to create microservices in seconds, instead of days or weeks. We are giving away the underlying recipe for building microservices for free, so that everyone may use it. Free as in liberty, free as in beer.
</p>
</motion.div>
    </div>
  </motion.div>
);

export default Free;

