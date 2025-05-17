import styles from "../style";
import { discount, aboutImg } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`ml-2 text-[#d1d5db]`}>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-300 bg-clip-text text-transparent font-semibold">
              Get
            </span>{" "}
            10 USD{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-300 bg-clip-text text-transparent font-semibold">
              On First
            </span>{" "}
            Register
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-300 bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />{" "}
            <span className="text-[#d1d5db]">GoCloudMining</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-300 bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px] w-full">
          Achieve wealth
        </h1>
        <p className={`text-[#d1d5db] max-w-[470px] mt-5`}>
          GoCloudMining is the world's leading cloud mining company,
          providing users with a simple and convenient way to mine; 
          it is trusted by users in more than 180 countries! Join us and make money instantly!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={aboutImg} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
