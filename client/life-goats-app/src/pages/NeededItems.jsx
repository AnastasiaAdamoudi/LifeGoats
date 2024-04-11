import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import { neededItemsBG } from "../assets";

const NeededItems = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      <img
        src={neededItemsBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      />
      <motion.div className="bg-background rounded-2xl drop-shadow-xl opacity-80 relative top-[100px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
            List of Needed Items
          </motion.h1>
          <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
            for a comfortable hike
          </motion.h2>
        </motion.div>
        <motion.div className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]" variants={fadeIn} initial="initial" whileInView="animate">
          <p>Here is a list of items you will need for a comfortable hike:</p>
          <br />
          <p>1. Water</p>
          <br />
          <p>2. Snacks</p>
          <br />
          <p>3. Sunscreen</p>
          <br />
          <p>4. Hat</p>
          <br />
          <p>5. Sunglasses</p>
          <br />
          <p>6. Comfortable shoes</p>
          <br />
          <p>7. Backpack</p>
          <br />
          <p>8. Camera</p>
          <br />
          <p>9. First aid kit</p>
          <br />
          <p>10. Map</p>
        </motion.div>
      </motion.div>
      <div className="relative z-20 w-[80%] lg:w-[70%] mx-auto pt-10 pb-8 font-body lg:text-lg text-md">
        <motion.p className="font-bold pt-14 pb-4 text-center" variants={fadeIn} initial="initial" whileInView="animate">
          Let's get ready and pack our bags!
        </motion.p>
        <motion.div className="w-[90%] mx-auto" variants={fadeIn} initial="initial" whileInView="animate">
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NeededItems;
