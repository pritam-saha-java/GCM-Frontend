import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "../components/Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col ml-3">
      <h4
        className={` font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}
      >
        {title}
      </h4>
      <p
        className={` font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`}
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          How to Start Cloud Mining? <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Earn cryptocurrencies easily, follow these simple steps:
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Pick a trusted cloud mining platform, sign up, and choose a mining
          plan that fits your budget. Make a payment and start earning crypto
          daily—no hardware or maintenance needed!
        </p>

        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
