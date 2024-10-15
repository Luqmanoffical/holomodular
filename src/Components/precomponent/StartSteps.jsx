import styles from '../Style';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter}  w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1  ml-4 lg:ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
