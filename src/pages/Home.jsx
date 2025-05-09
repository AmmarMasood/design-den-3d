import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { useEffect, useState } from "react";

const Home = () => {
  const snap = useSnapshot(state);
  const [headingColor, setHeadingColor] = useState(snap.color);

  useEffect(() => {
    setHeadingColor(snap.color);
  }, [snap.color]);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/* <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header> */}

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1
                className={`head-text`}
                style={{
                  color: headingColor,
                }}
              >
                DESIGN <br className="xl:block hidden" /> DEN.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p
                className="max-w-md font-normal  text-lg"
                style={{
                  color: headingColor,
                }}
              >
                Design your own custom t-shirts, shorts, pants and coats using
                our 3D customizer.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
