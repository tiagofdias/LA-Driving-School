"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { clone as cloneGLTF } from "three/examples/jsm/utils/SkeletonUtils.js";
import { a, useSpring } from "@react-spring/three";

// Array of car models
const models = [
  {
    name: "Lamborghini Centenario",
    path: "/models/lamborghini_centenario.glb",
    scale: [1, 1, 1],
    animation: "Animation",
  },
  {
    name: "2017 Mclaren 720",
    path: "/models/mclaren_720.glb",
    scale: [1.5, 1.5, 1.5],
    animation: "spoiler|spoilerAction",
  },
  {
    name: "2013 Lamborghini Aventador LP700-4 Roaster",
    path: "/models/lamborghini_aventador_lp700-4_.glb",
    scale: [1, 1, 1],
    animation: "Animation",
  },
  {
    name: "Bajaj Avenger Cruise 200",
    path: "/models/bajaj_avenger_cruise_200.glb",
    scale: [1.8, 1.8, 1.8],
  },
  {
    name: "Dodge Charger Daytona",
    path: "/models/dodge_charger_daytona_1969_custom_two.glb",
    scale: [1, 1, 1],
  },
];

// Component to load and display a car model with a transition effect
function CarModel({
  modelPath,
  scale,
  animationName,
}: {
  modelPath: string;
  scale: number[];
  animationName?: string;
}) {
  // Load the GLTF model
  const { scene, animations } = useGLTF(modelPath);

  // Deep clone the scene to get a fresh instance each time
  const clonedScene = useMemo(() => cloneGLTF(scene), [scene]);

  // Attach animations to the cloned scene
  const { actions } = useAnimations(animations, clonedScene);

  useEffect(() => {
    if (animationName && actions && actions[animationName]) {
      // Reset and play the animation from scratch
      actions[animationName].reset();
      actions[animationName].setLoop(THREE.LoopOnce, 1);
      actions[animationName].clampWhenFinished = true;
      actions[animationName].play();
    }
  }, [actions, animationName]);

  // Create a spring for scale transition—animates from 0 to the target scale
  const { scaleSpring } = useSpring({
    scaleSpring: scale,
    from: { scaleSpring: [0, 0, 0] },
    config: { tension: 170, friction: 26 },
  });

  return (
    <a.group scale={scaleSpring}>
      <primitive object={clonedScene} dispose={null} />
    </a.group>
  );
}

export const Vehicles = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const AUTO_SLIDE_INTERVAL = 10000; // 10 seconds for auto-slide

  // Go to next model (loops back to start)
  const handleNext = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  // Go to previous model (loops back to end)
  const handlePrev = () => {
    setCurrentModelIndex(
      (prevIndex) => (prevIndex - 1 + models.length) % models.length
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isUserInteracting) {
      const timer = setInterval(() => {
        handleNext();
      }, AUTO_SLIDE_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [isUserInteracting]);

  const currentModel = models[currentModelIndex];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
          The vehicles you'll be driving with us
        </h2>
        <br></br>
        <br></br>
        <br></br>
        {/* Model Name */}
        <div className="mb-4 text-center">
          <span className="text-xl text-white bg-[#5E15DF] px-4 py-2 rounded inline-block">
            {currentModel.name}
          </span>
        </div>

        {/* Canvas container */}
        <div
          className="w-full h-[800px] relative"
          // Pause auto-slide when user interacts
          onPointerDown={() => setIsUserInteracting(true)}
          onPointerUp={() => setIsUserInteracting(false)}
          onPointerLeave={() => setIsUserInteracting(false)}
        >
          <Canvas
            className="w-full h-full"
            shadows
            camera={{ position: [5, 3, 5], fov: 50 }}
          >
            <ambientLight intensity={1} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={1} />

            <Suspense fallback={null}>
              <CarModel
                // Use a unique key to force remount when model changes
                key={`${currentModel.path}-${currentModelIndex}`}
                modelPath={currentModel.path}
                scale={currentModel.scale}
                animationName={currentModel.animation}
              />
            </Suspense>

            <OrbitControls enablePan enableZoom={false} enableRotate />
          </Canvas>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[#5E15DF] text-white rounded-full z-10 hover:bg-[#5513C9] transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[#5E15DF] text-white rounded-full z-10 hover:bg-[#5513C9] transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
