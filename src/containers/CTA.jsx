import styles from "../style";
import Button from "../components/Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>GoCloudMining is the world's leading cryptocurrency mining platform. 
        Whether your target is Bitcoin or Ethereum, you can easily explore the field of cryptocurrency mining.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA