
import { motion } from 'framer-motion';
import start from '../../assets/get-started.png'
import styles from '../Style';
import { startingFeatures } from '../../constants';
import { StartSteps, TitleText, TypingText } from './index';
import { staggerContainer, fadeIn, planetVariants } from '../lib/motion';

const GetStarted = () => (

<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={start}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1  flex justify-center flex-col"
      >
        <TypingText className='text-xl' title="| How Holomodular Works" />
        <TitleText title={<h2 className="text-3xl" >Get started And Unlock the Future of Technology</h2>}  />
        <div className="mt-[31px] flex flex-col max-w-[570px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
