import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "../components/Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Accept a vareity of<br className="sm:block hidden" /> Payment methods
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      To ensure convenience for our investors, GoCloudMining 
      provides a diverse range of payment methods for both 
      depositing funds and receiving payments.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;