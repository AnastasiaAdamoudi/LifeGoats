import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
// import { historyBG } from "../assets";
import { upcomingEvents } from "../assets";

const UpcomingEvents = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      {/* <img
        src={historyBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      /> */}
      <motion.div className="bg-background relative top-[50px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto my-10 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
            Upcoming Events
          </motion.h1>
        </motion.div>
        <motion.img src={upcomingEvents} alt="hikers on Muses Plateau" className="flex mx-auto rounded-2xl shadow-lg w-[90%] md:w-[70%] lg:w-[60%] xl:[40%] h-auto" />
        <motion.div className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]" variants={fadeIn} initial="initial" whileInView="animate">
        <motion.p className="font-bold mt-0 pb-4 text-center" variants={fadeIn} initial="initial" whileInView="animate">
          More retreats and events coming soon. Stay tuned!
        </motion.p>
        <motion.div className="w-[90%] mx-auto" variants={fadeIn} initial="initial" whileInView="animate">
          <GoatPrintsWalking />
        </motion.div>
                </motion.div>
      </motion.div>
    </motion.div>
  );
};


export default UpcomingEvents;
