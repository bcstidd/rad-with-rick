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
    x: 964,
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
    description:
      "The metal housing is the outer casing of the tubehead. It protects internal components and absorbs stray radiation, ensuring operator safety.",
  },
  {
    name: "Insulating oil",
    x: 2070,
    y: 1044,
    description:
      "Insulating oil surrounds the x-ray tube. It absorbs heat and prevents electrical shock by insulating high-voltage components.",
  },
  {
    name: "Unleaded window",
    x: 1381,
    y: 1112,
    description:
      "The unleaded glass window is the only part of the x-ray tube that allows x-rays to pass through. It directs the primary beam out of the machine.",
  },
  {
    name: "Collimator",
    x: 1517,
    y: 1342,
    description:
      "The collimator is a lead disk that narrows the x-ray beam. It limits radiation exposure by shaping the beam to match the size of the image receptor.",
  },
  {
    name: "Position indicating device",
    x: 1337,
    y: 1811,
    description:
      "Also called the PID, this tube guides and aims the x-ray beam toward the image receptor. It helps direct the beam accurately and reduces scatter radiation.",
  },
  {
    name: "Aluminum disks",
    x: 1355,
    y: 1379,
    description:
      "Aluminum disks filter out low-energy x-rays that would increase patient exposure without improving image quality. They improve beam safety and clarity.",
  },
  {
    name: "Tubehead seal",
    x: 1344,
    y: 1215,
    description:
      "The tubehead seal is made of plastic or leaded glass. It keeps the insulating oil contained and allows the x-ray beam to exit the tubehead safely.",
  },
  {
    name: "Tungsten filament",
    x: 1103,
    y: 930,
    description:
      "The tungsten filament is located in the cathode. When heated, it releases electrons through thermionic emission.",
  },
  {
    name: "Step up transformer",
    x: 723,
    y: 453,
    description:
      "The step-up transformer increases voltage to propel electrons from the cathode to the anode. It provides the high energy needed to generate x-rays.",
  },
  {
    name: "Step down transformer",
    x: 1628,
    y: 450,
    description:
      "The step-down transformer reduces voltage so the filament can safely heat up and release electrons without burning out.",
  },
  {
    name: "Tungsten target",
    x: 1383,
    y: 920,
    description:
      "The tungsten target is embedded in the anode. When electrons strike it at high speed, x-rays are produced at the point of impact.",
  },
];

function getRandomPart(parts, excludeName = null) {
  const filtered = excludeName
    ? parts.filter((p) => p.name !== excludeName)
    : parts;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

const Machine = () => {
  const [mode, setMode] = useState("learn"); // "learn" or "quiz"
  const [selectedPart, setSelectedPart] = useState(null);
  const [quizPart, setQuizPart] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(""); // "correct" or "incorrect"
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
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Reset feedback when a new quiz part is chosen
  useEffect(() => {
    if (quizPart) {
      const timeout = setTimeout(() => setQuizFeedback(""), 1000);
      return () => clearTimeout(timeout);
    }
  }, [quizPart]);

  // Update size when image loads
  function handleImageLoad() {
    if (imgRef.current) {
      setImgSize({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight,
      });
    }
  }

  // Start quiz
  function startQuiz() {
    setMode("quiz");
    setScore(0);
    setQuizFeedback("");
    setQuizPart(getRandomPart(machineParts));
    setSelectedPart(null);
  }

  // Handle hotspot click
  function handleHotspotClick(part) {
    if (mode === "quiz") {
      if (part.name === quizPart.name) {
        setScore((s) => s + 1);
        setQuizFeedback("correct");
        // Pick a new part (not the same as last)
        setQuizPart(getRandomPart(machineParts, quizPart.name));
        setSelectedPart(null);
      } else {
        setQuizFeedback("incorrect");
        setSelectedPart(part.name); // Optionally highlight the wrong pick
      }
    } else {
      setSelectedPart(part.name);
    }
  }

  // Exit quiz mode
  function stopQuiz() {
    setMode("learn");
    setQuizPart(null);
    setQuizFeedback("");
    setSelectedPart(null);
  }


  return (
    <div className="machine-container">
      <h2 className="machine-title">The X-ray Machine</h2>
      <div className="machine-mode-toggle">
        {mode === "learn" ? (
          <button className="machine-btn" onClick={startQuiz}>Start Quiz Mode</button>
        ) : (
          <button className="machine-btn" onClick={stopQuiz}>Exit Quiz Mode</button>
        )}
      </div>
      {mode === "quiz" && quizPart && (
        <div className="machine-quiz-info">
          <h3>
            Find: <span className="machine-quiz-part">{quizPart.name}</span>
          </h3>
          <p>Score: {score}</p>
          {quizFeedback && (
            <p className={`machine-quiz-feedback ${quizFeedback}`}>
              {quizFeedback === "correct"
                ? "✅ Correct! Next part loaded."
                : `❌ That’s the ${selectedPart}. Try again.`}
            </p>
          )}
        </div>
      )}
      <div className="machine-image-wrapper">
        <img
          ref={imgRef}
          src="/machine/machine-lines.svg"
          alt="X-ray Machine"
          className="machine-image"
          onLoad={handleImageLoad}
        />
        {machineParts.map((part) => (
          <button
            key={part.name}
            className={`hotspot-button ${
              selectedPart === part.name
                ? mode === "quiz" && quizFeedback === "incorrect"
                  ? "selected"
                  : "selected"
                : "default"
            }`}
            style={{
              top: `${(imgSize.height / ORIGINAL_HEIGHT) * part.y}px`,
              left: `${(imgSize.width / ORIGINAL_WIDTH) * part.x}px`,
            }}
            onClick={() => handleHotspotClick(part)}
            title={part.name}
            aria-label={`Learn more about ${part.name}`}
          />
        ))}
      </div>
      {selectedPart && (mode === "learn" || quizFeedback === "incorrect") && (
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


//   return (
//     <div className="machine-container">
//       <h2>The X-ray Machine</h2>
//       <div className="machine-quiz-button-wrapper">
//         {mode === "learn" ? (
//           <button className="quiz-button" onClick={startQuiz}>
//             Start Quiz Mode
//           </button>
//         ) : (
//           <button onClick={stopQuiz}>Exit Quiz Mode</button>
//         )}
//       </div>
//       {mode === "quiz" && quizPart && (
//         <div className="quiz-info">
//           <h3>
//             Find the: <span className="quiz-part-name">{quizPart.name}</span>
//           </h3>
//           <p className="quiz-score">Score: {score}</p>
//           {quizFeedback && (
//             <p style={{ color: quizFeedback === "correct" ? "green" : "red" }}>
//               {quizFeedback === "correct" ? "✅ Correct!" : "❌ Try again!"}
//             </p>
//           )}
//         </div>
//       )}
//       <div className="machine-image-wrapper">
//         <img
//           ref={imgRef}
//           src="/machine/machine-lines.svg"
//           alt="X-ray Machine"
//           className="machine-image"
//         />
//         {machineParts.map((part) => (
//           <button
//             key={part.name}
//             className={`hotspot-button ${
//               selectedPart === part.name
//                 ? mode === "quiz" && quizFeedback === "incorrect"
//                   ? "selected"
//                   : "selected"
//                 : "default"
//             }`}
//             style={{
//               top: `${(imgSize.height / ORIGINAL_HEIGHT) * part.y}px`,
//               left: `${(imgSize.width / ORIGINAL_WIDTH) * part.x}px`,
//             }}
//             onClick={() => handleHotspotClick(part)}
//             title={part.name}
//             aria-label={`Learn more about ${part.name}`}
//           />
//         ))}
//       </div>
//       {/* Info box in learn mode, or in quiz mode if user clicks wrong */}
//       {selectedPart && (mode === "learn" || quizFeedback === "incorrect") && (
//         <div className="part-info-box">
//           <h3>{selectedPart}</h3>
//           <p>
//             {machineParts.find((part) => part.name === selectedPart)
//               ?.description || "Description not found."}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

