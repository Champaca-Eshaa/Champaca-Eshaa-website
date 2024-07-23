import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

// Reusable Circle component
const Circle = ({ size, left, top, rotate, mounted }) => (
  <div
    className={`absolute w-${size} h-${size} -ml-${size / 2} -mt-${size / 2} transform rotate-${rotate} ${
      mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{
      left: `${left}%`,
      top: `${top}%`,
    }}
  >
    <div className="w-full h-full bg-gradient-to-b from-yellow-200 to-yellow-700 rounded-full" />
  </div>
);

// Circlesbg component
const Circlesbg = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const circles = [
    { id: 1, size: 6, left: 25, top: 25, rotate: 46 },
    { id: 2, size: 8, left: 75, top: 10, rotate: -56 },
    { id: 3, size: 8, left: 15, top: 50, rotate: 54 },
    { id: 4, size: 7, left: 85, top: 80, rotate: -65 },
    { id: 5, size: 12, left: 50, top: 30, rotate: -85 },
    { id: 6, size: 12, left: 30, top: 70, rotate: 70 },
    { id: 7, size: 10, left: 70, top: 60, rotate: 30 },
    { id: 8, size: 9, left: 40, top: 20, rotate: -45 },
    { id: 9, size: 8, left: 60, top: 90, rotate: 60 },
    { id: 10, size: 14, left: 80, top: 40, rotate: -20 },
  ];

  return (
    <div className="absolute w-full h-screen overflow-hidden -z-20">
      <MouseParallax strength={0.07}>
        {circles.map((circle) => (
          <Circle
            key={circle.id}
            size={circle.size}
            left={circle.left}
            top={circle.top}
            rotate={circle.rotate}
            mounted={mounted}
          />
        ))}
      </MouseParallax>
    </div>
  );
};

export default Circlesbg;
