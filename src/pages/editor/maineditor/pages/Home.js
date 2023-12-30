import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  console.log(snap, state);
  const handleCustomizeClick = () => {
    state.intro = !state.intro;
  };
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          style={{
            width: "fit-content",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            padding: "1.5rem",
            zIndex: "10",
            position: "absolute",
            // "@media (min-width: 1280px)": {
            //   height: "100%",
            //   padding: "2rem 9rem",
            //   justifyContent: "between",
            // },
            // "@media (min-width: 640px) and (max-width: 1279px)": {
            //   padding: "2rem",
            // },
            // "@media (max-width: 1279px)": {
            //   columnGap: "1rem",
            // },
          }}
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
          </motion.header>
          <motion.div
            style={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              gap: "2.5rem",
              // "@media (min-width: 1280px)": {
              //   justifyContent: "center",
              // },
              justifyContent: "start",
            }}
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1
                style={{
                  fontSize: "6rem",
                  lineHeight: "7rem",
                  fontWeight: "900",
                  color: "black",
                  // "@media (min-width: 1280px)": {
                  //   fontSize: "10rem",
                  //   lineHeight: "11rem",
                  // },
                }}
              >
                LET'S
                <br
                  style={{
                    display: "none",
                    // "@media (min-width: 1280px)": {
                    //   display: "block",
                    // },
                  }}
                />{" "}
                DO IT.
              </h1>
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
              {...headContentAnimation}
            >
              <p
                style={{
                  maxWidth: "28rem",
                  fontWeight: "normal",
                  color: "#718096",
                  fontSize: "1rem",
                }}
              >
                create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => handleCustomizeClick()}
                style={{
                  display: "inline-block",
                  padding: "0.625rem 1rem",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              ></CustomButton>
              <CustomButton />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
