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
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
          How to Join Our Club? <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Become a champion with these simple steps:
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Choose your favorite sport, complete the registration process, and start your training journey with our expert coaches. Access world-class facilities and join our vibrant sports community today!
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