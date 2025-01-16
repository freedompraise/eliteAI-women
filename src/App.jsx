import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Highlights,
  Media,
  ProgramDetails,
  Team,
  Clients,
  CTA,
  Footer,
} from "./components";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const App = () => (
  <>
    {/* Navbar */}
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero Section */}
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Remaining Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Animated Sections */}
          <motion.div {...animations}>
            <Stats />
          </motion.div>
          <motion.div {...animations}>
            <Highlights />
          </motion.div>
          <motion.div {...animations}>
            <Media />
          </motion.div>
          <motion.div {...animations}>
            <ProgramDetails />
          </motion.div>
          <motion.div {...animations}>
            <Team />
          </motion.div>
          <motion.div {...animations}>
            <Clients />
          </motion.div>
          <motion.div {...animations}>
            <CTA />
          </motion.div>
          <motion.div {...animations}>
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default App;
