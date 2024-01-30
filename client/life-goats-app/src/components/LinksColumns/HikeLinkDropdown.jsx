import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { downArrow, downArrowHover } from "../../assets";
import { useState } from "react";

const HikeLinkDropdown = ({ active, setActive, handleLinkClick, hikeLinks }) => {

  const [arrowHovered, setArrowHovered] = useState(false);

  const handleMouseEnter = () => {
    setArrowHovered(true);
  };

  const handleMouseLeave = () => {
    setArrowHovered(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
          onClick={() => setActive(active === "Hike" ? null : "Hike")}
          onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        <div className="flex flex-row items-center justify-center gap-2">
          <p>The Hike</p>
          {arrowHovered ? (
            <img src={downArrowHover} alt="down arrow" className="h-[20px] w-auto" />
            ) : (
            <img src={downArrow} alt="down arrow" className="h-[16px] w-auto" />
            )}
            </div>
        </button>
      </div>
      {active === "Hike" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md drop-shadow-lg bg-background ring-1 ring-primary ring-opacity-10 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {hikeLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="bg-background block px-4 py-2 text-lg font-links font-bold text-primary hover:bg-secondary hover:text-background"
                onClick={() => {
                  handleLinkClick(link);
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HikeLinkDropdown;
