import { motion } from "framer-motion";
import {
  Hero,
  Stats,
  Highlights,
  Media,
  ProgramDetails,
  Team,
  CommunityGallery,
  Clients,
  CTA,
  VideoStories,
  SuccessStories,
} from "../components";
import styles from "../style";

const animations = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const staggerAnimations = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
  viewport: { once: true, amount: 0.3 },
};

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
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
      </div>
    </div>
  </div>
);

export default Home;
