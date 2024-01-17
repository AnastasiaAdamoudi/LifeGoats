import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../motion/home-sections";
import GoatPrintsWalking from "../../Loaders/GoatPrintsWalking";
import {
  program,
  program2,
  pricing,
  pricing2,
} from "../../../assets/index.js";

const Program = ({
  isSmallScreen,
  programIsHovered,
  setProgramIsHovered,
  pricingIsHovered,
  setPricingIsHovered,
  handleProgramMouseEnter,
  handleProgramMouseLeave,
  handlePricingMouseEnter,
  handlePricingMouseLeave,
}) => {  
  
  return (
    <section
      id="program"
      className="bg-background
      relative bg-cover w-screen h-screen inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden pt-2 pb-12 z-10"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Details about the
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Program & Accommodation
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center mx-auto py-4 bg-background rounded-2xl drop-shadow-xl text-primary
        font-body md:text-[16px] text-[14px] w-[80%] lg:w-[45%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
        <a
              href="/Life Goats The Program.pdf"
              download="Life Goats The Program.pdf"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handleProgramMouseEnter}
              // onMouseLeave={handleProgramMouseLeave}
            >
              {/* <img
                src={programIsHovered ? program2 : program}
                alt="resume"
                className="w-[40px] h-[40px] object-contain shadow-lg mt-4"
              /> */}
              <p className="pb-2 text-center text-bold cursor-pointer underline text-earth hover:text-tertiary text-lg">Click here to download the program</p>
            </a>
            <a
              href="/Life Goats Cost Analysis.pdf"
              download="Life Goats Cost Analysis.pdf"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handlePricingMouseEnter}
              // onMouseLeave={handlePricingMouseLeave}
            >
              {/* <img
                src={pricingIsHovered ? pricing2 : pricing}
                alt="resume"
                className="w-[40px] h-[40px] object-contain shadow-lg mt-4"
              /> */}
              <p className="pb-10 text-center text-bold cursor-pointer underline text-earth hover:text-tertiary text-lg">Click here to download the accommodation options</p>
            </a>
        <p className="pb-2"> Stay tuned to find out more about: </p>
        <ul className="list-disc list-inside text-center">
        <li> Hiking information </li>
        <li> Opportunities to contribute creatively to the program </li>
        </ul>
        <p className="pt-2"> And more! </p>
        <p className="flex flex-wrap justify-center text-center mx-auto pt-10 font-bold uppercase font-subtitle md:text-[20px] text-[16px]">
          More information coming soon
        </p>

        <motion.div className="w-[90%]">
          <GoatPrintsWalking isSmallScreen={isSmallScreen} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Program;
