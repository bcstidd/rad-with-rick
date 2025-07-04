import React, { useState, useRef, useEffect } from "react";
import "./machine.css";

const ORIGINAL_WIDTH = 2965; // Replace with your SVG's original width
const ORIGINAL_HEIGHT = 2224; // Replace with your SVG's original height

const machineParts = [
  { name: "Anode", x: 1566, y: 909, description: "..." },
  { name: "Cathode", x: 1044, y: 875, description: "..." },
  // ... more parts
];

const Machine = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [imgSize, setImgSize] = useState({
    width: ORIGINAL_WIDTH,
    height: ORIGINAL_HEIGHT,
  });
  const imgRef = useRef(null);

  useEffect(() => {
    function updateSize() {
      if (imgRef.current) {
        setImgSize({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="machine-container">
      <h2>Interactive X-ray Machine</h2>
      <div className="machine-image-wrapper">
        <img
          ref={imgRef}
          src="/machine/machine-lines.svg"
          alt="X-ray Machine"
          className="machine-image"
        />
        {machineParts.map((part) => (
          <button
            key={part.name}
            className={`hotspot-button ${
              selectedPart === part.name ? "selected" : "default"
            }`}
            style={{
              top: `${(imgSize.height / ORIGINAL_HEIGHT) * part.y}px`,
              left: `${(imgSize.width / ORIGINAL_WIDTH) * part.x}px`,
            }}
            onClick={() => setSelectedPart(part.name)}
            title={part.name}
            aria-label={`Learn more about ${part.name}`}
          />
        ))}
      </div>
      {selectedPart && (
        <div className="part-info-box">
          <h3>{selectedPart}</h3>
          <p>
            {machineParts.find((part) => part.name === selectedPart)
              ?.description || "Description not found."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Machine;
