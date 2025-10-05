import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "../components/Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
        World-class sports <br className="sm:block hidden" /> facilities & amenities
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience premium sports infrastructure designed for champions. 
        Red Riders Sports Club offers state-of-the-art facilities, professional-grade 
        equipment, and meticulously maintained playing surfaces across all sports disciplines.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From Olympic-sized swimming pools to professional cricket nets, football turfs, 
        and indoor courts - we provide everything you need to excel in your chosen sport 
        while ensuring safety and comfort.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="sports facilities" className="w-[90%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;