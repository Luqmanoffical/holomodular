

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../Style';
import { exploreWorlds } from '../../constants/index';
import { staggerContainer } from '../lib/motion';
import { ExploreCard, TitleText, TypingText } from './index';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Explore New Realities" textStyles="text-center text-xl" />
        <TitleText
          title={<>Unleash your imagination with  <br className="md:block hidden " /> cutting-edge technology</>}
          textStyles="text-center text-5xl"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
