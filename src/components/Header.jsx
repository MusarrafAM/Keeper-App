import HighlightIcon from "@mui/icons-material/Highlight";
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <motion.h1
        // ?Normal Transision
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          x: { duration: 1 },
        }}
        whileHover = {{scale:1 ,originX:0, color:'#fff'}}
        // ?Spring Transision
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 0.3,
        //   ease: [0, 0.71, 0.2, 1.01],
        //   scale: {
        //     type: "spring",
        //     damping: 5,
        //     stiffness: 100,
        //     restDelta: 0.001
        //   }
        // }}
        // ?Hover Effect Unwanted for this
        // whileHover={{opacity: 0, scale: 0.9}}
      >
        <HighlightIcon />
        Keeper
      </motion.h1>
    </header>
  );
}

export default Header;
