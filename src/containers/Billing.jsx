import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-300 bg-clip-text text-transparent">
        Benefits of becoming a <br className="sm:block hidden" /> GoCloudMiners Alliance Partner
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Become a partner of the GoCloudMining Alliance, share the invitation link with friends,
        and earn commission rewards permanently. While operating your own cloud mining contract,
        you can also get three levels of commission rewards from the platform! The first level rewards 3%
        commission, the second level rewards 1.5% commission, and the third level rewards 0.5% commission!
        Start making money at zero cost, and through the referral reward system, you can easily earn more than
        10,000 US dollars a month.
      </p>
    </div>
  </section>
);

export default Billing;
