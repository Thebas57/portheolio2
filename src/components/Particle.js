import React, { useCallback } from "react";
import configDark from "../particles/particlesjs-config.json";
import configLight from "../particles/particlesjs-config-light.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = ({ theme, handleTheme }) => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={theme ? configLight : configDark}
      />
    </div>
  );
};

export default Particle;
