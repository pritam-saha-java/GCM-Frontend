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
      <h2 className={styles.heading2}>
      Benefits of becoming a <br className="sm:block hidden" /> CoCloudMiners Alliance Partner
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Become a partner of the GoCloudMining Alliance, share the invitation link with friends, 
      and earn commission rewards permanently. While operating your own cloud mining contract, 
      you can also get three levels of commission rewards from the platform! The first level rewards 3% 
      commission, the second level rewards 1.5% commission, and the third level rewards 0.5% commission! 
      Start making money at zero cost, and through the referral reward system, you can easily earn more than 
      10,000 US dollars a month.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="app_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144px] h-[43px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;