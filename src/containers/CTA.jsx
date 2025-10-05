import styles from "../style";
import Button from "../components/Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-red-500 via-red-400 to-gray-300 bg-clip-text text-transparent">
        Join Red Riders Today!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ready to begin your sports journey? Become part of Kolkata's premier sports community 
        and unlock your athletic potential with world-class facilities and expert coaching.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
        Don't wait to achieve your fitness goals. Join now and experience the Red Riders difference!
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;