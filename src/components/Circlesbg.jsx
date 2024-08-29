import React, { useEffect, useState, useMemo } from "react";

const generateRandomParticles = (numParticles) => {
  const particles = [];
  for (let i = 0; i < numParticles; i++) {
    const top = Math.random() * 100 + "%";
    const left = Math.random() * 100 + "%";
    const size = Math.random() * 1.5 + 0.5 + "rem"; // Size between 0.5rem and 2rem
    particles.push({
      id: i,
      top,
      left,
      size,
      xOffset: Math.random() * 2 - 1, // Random initial offset
      yOffset: Math.random() * 2 - 1, // Random initial offset
      delay: Math.random() * 2, // Random delay between 0s and 2s
    });
  }
  return particles;
};

const Circlesbg = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const particles = useMemo(() => generateRandomParticles(50), []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute w-full h-screen overflow-hidden -z-20">
      {particles.map((particle) => {
        // Calculate particle's current position
        const particleCenter = {
          x: (parseFloat(particle.left) / 100) * window.innerWidth + particle.xOffset,
          y: (parseFloat(particle.top) / 100) * window.innerHeight + particle.yOffset,
        };

        // Calculate distance from cursor
        const dx = cursorPos.x - particleCenter.x;
        const dy = cursorPos.y - particleCenter.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate force based on distance
        const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
        const force = Math.max((1 - distance / maxDistance) * 2, 0.5); // Adjust intensity

        // Calculate new position
        const newLeft = Math.min(
          Math.max(
            (parseFloat(particle.left) / 100) * window.innerWidth - dx / distance * force,
            0
          ),
          window.innerWidth
        );
        const newTop = Math.min(
          Math.max(
            (parseFloat(particle.top) / 100) * window.innerHeight - dy / distance * force,
            0
          ),
          window.innerHeight
        );

        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              top: `${(newTop / window.innerHeight) * 100}%`,
              left: `${(newLeft / window.innerWidth) * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div
              className={`bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full transition-transform duration-500 ease-out`}
              style={{
                width: particle.size,
                height: particle.size,
                filter: `blur(${calculateBlur(particle)}px)`,
                animation: `twinkle 1s infinite alternate`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          </div>
        );
      })}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );

  function calculateBlur(particle) {
    const particleCenter = {
      x: (parseFloat(particle.left) / 100) * window.innerWidth,
      y: (parseFloat(particle.top) / 100) * window.innerHeight,
    };

    const distance = Math.sqrt(
      Math.pow(cursorPos.x - particleCenter.x, 2) +
      Math.pow(cursorPos.y - particleCenter.y, 2)
    );

    // Reduce overall blur amount and decrease unblur radius around the cursor
    const maxDistance = Math.sqrt(
      Math.pow(window.innerWidth, 2) +
      Math.pow(window.innerHeight, 2)
    );

    const blurAmount = 30; // Reduced overall blur amount
    const blurRadius = 30; // Radius around cursor where particles are less blurred

    return distance < blurRadius
      ? 0 // Less blur if within blur radius
      : Math.min((distance / maxDistance) * blurAmount, blurAmount); // Gradual blur outside radius
  }
};

export default Circlesbg;
