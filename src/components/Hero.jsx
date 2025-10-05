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
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-gray-300 bg-clip-text text-transparent font-semibold">
              Join
            </span>{" "}
            Today{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-gray-300 bg-clip-text text-transparent font-semibold">
              Get
            </span>{" "}
            10% Off
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />{" "}
            <span className="text-[#d1d5db]">Red Riders</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px] w-full">
          Sports Club
        </h1>
        <p className={`text-[#d1d5db] max-w-[470px] mt-5`}>
          Red Riders is Kolkata's premier sports club, bringing together passionate athletes 
          and sports enthusiasts. With state-of-the-art facilities and expert coaching, 
          we're building a community where champions are made and memories are forged!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={aboutImg} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />
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