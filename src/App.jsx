import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Highlights,
  Media,
  ProgramDetails,
  Team,
  CommunityGallery,
  Clients,
  CTA,
  Footer,
  VideoStories,
  SuccessStories,
} from "./components";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }, // Trigger once, when 30% of section is in view
};

const staggerAnimations = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    ease: "easeOut",
    staggerChildren: 0.3, // Delay between child animations
  },
  viewport: { once: true, amount: 0.3 },
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
          <motion.div {...staggerAnimations}>
            <Highlights />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <Media />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <VideoStories />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <SuccessStories />
          </motion.div>

          <motion.div {...staggerAnimations}>
            <CommunityGallery />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <Team />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <ProgramDetails />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <Clients />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <CTA />
          </motion.div>
          <motion.div {...staggerAnimations}>
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default App;
