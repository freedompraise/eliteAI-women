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

const App = () => (
  <>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Highlights />
          <Media />
          <ProgramDetails />
          <Team />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
