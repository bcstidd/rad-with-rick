import React, { useState, useRef, useEffect } from "react";
import "./machine.css";

const ORIGINAL_WIDTH = 2965; 
const ORIGINAL_HEIGHT = 2224; 

const machineParts = [
  {
    name: "Anode",
    x: 1566,
    y: 909,
    description:
      "The anode is the positive electrode in an X-ray tube. It is made of tungsten and is responsible for producing X-rays. When high-energy electrons strike the anode, X-rays are emitted. The anode is also cooled by a water jacket to prevent it from overheating.",
  },
  {
    name: "Cathode",
    x: 1044,
    y: 875,
    description:
      "The cathode is the negative electrode in an X-ray tube. It is made of tungsten and is responsible for producing electrons. When heated, the cathode emits electrons that are accelerated towards the anode. It works in conjunction with the filament. The electrons are produced by thermionic emission and are accelerated by the high voltage applied between the cathode and the anode.",
  },

  {
    name: "X-ray tube",
    x: 1298,
    y: 794,
    description:
      "The x-ray tube is the main component of an X-ray machine. It is responsible for producing X-rays. Inside are the anode, cathode, and filament.",
  },
  { 
    name: "Metal housing", 
    x: 2328, 
    y: 413, 
    description:"The metal housing is the outer casing of the tubehead. It protects internal components and absorbs stray radiation, ensuring operator safety."
 },
  { 
    name: "Insulating oil", 
    x: 2070, 
    y: 1044, 
    description:"Insulating oil surrounds the x-ray tube. It absorbs heat and prevents electrical shock by insulating high-voltage components."
 },
  { 
    name: "Unleaded window", 
    x: 1381, 
    y: 1112, 
    description:"The unleaded glass window is the only part of the x-ray tube that allows x-rays to pass through. It directs the primary beam out of the machine."
},
  { name: "Collimator", 
    x: 1517, 
    y: 1342, 
    description:"The collimator is a lead disk that narrows the x-ray beam. It limits radiation exposure by shaping the beam to match the size of the image receptor."
 },
  { 
    name: "Position indicating device", x: 1337, y: 1811, description:"Also called the PID, this tube guides and aims the x-ray beam toward the image receptor. It helps direct the beam accurately and reduces scatter radiation."
 },
  { name: "Aluminum disks", x: 1355, y: 1379, description:"Aluminum disks filter out low-energy x-rays that would increase patient exposure without improving image quality. They improve beam safety and clarity."
 },
  {
  name: "Tubehead seal",
  x: 1344,
  y: 1250,
  description:
    "The tubehead seal is made of plastic or leaded glass. It keeps the insulating oil contained and allows the x-ray beam to exit the tubehead safely."
},
{
  name: "Tungsten filament",
  x: 1103,
  y: 930,
  description:
    "The tungsten filament is located in the cathode. When heated, it releases electrons through thermionic emission."
},
{
  name: "Step up transformer",
  x: 723,
  y: 453,
  description:
    "The step-up transformer increases voltage to propel electrons from the cathode to the anode. It provides the high energy needed to generate x-rays."
},
{
  name: "Step down transformer",
  x: 1628,
  y: 450,
  description:
    "The step-down transformer reduces voltage so the filament can safely heat up and release electrons without burning out."
},
{
  name: "Tungsten target",
  x: 1483,
  y: 940,
  description:
    "The tungsten target is embedded in the anode. When electrons strike it at high speed, x-rays are produced at the point of impact."
}

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
      <h2>The X-ray Machine</h2>
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
