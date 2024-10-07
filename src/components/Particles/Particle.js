import React, { useCallback } from "react";
import configDark from "../../particles/particlesjs-config.json";
import configLight from "../../particles/particlesjs-config-light.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = ({ theme, handleTheme }) => {
  const particlesInit = useCallback(async (engine) => {
    // tu peux initier l'instance tsParticles (engine) ici, ajouter des formes personnalisées ou des presets
    // cela charge le bundle du package tsparticles, c'est la méthode la plus simple pour tout préparer
    await loadSlim(engine); // on utilise loadSlim pour réduire la taille du bundle
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log du container si nécessaire
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={theme ? configLight : configDark} 
      />
    </div>
  );
};

export default Particle;
