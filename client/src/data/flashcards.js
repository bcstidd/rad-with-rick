const flashcards = [
    {
      "question": "What does ALARA stand for?",
      "answer": "As Low As Reasonably Achievable",
      "options": [
        "As Long As Radiation Acts",
        "All Levels Are Really Acceptable",
        "As Low As Reasonably Achievable",
        "Always Limit All Radiation Application"
      ]
    },
    {
      "question": "What is the purpose of a bitewing radiograph?",
      "answer": "To detect interproximal decay and bone levels",
      "options": [
        "To capture impacted teeth",
        "To detect interproximal decay and bone levels",
        "To visualize nasal cavities",
        "To track root canal treatment"
      ]
    },
    {
      "question": "Which tissue is most sensitive to radiation?",
      "answer": "Reproductive tissue",
      "options": [
        "Muscle",
        "Skin",
        "Bone",
        "Reproductive tissue"
      ]
    },
    {
      "question": "What is the recommended minimum distance a healthcare worker should stand from the x-ray tube head during exposure?",
      "answer": "6 feet",
      "options": [
        "3 feet",
        "4 feet",
        "5 feet",
        "6 feet"
      ]
    },
    {
      "question": "Which radiograph is best for evaluating third molars?",
      "answer": "Panoramic",
      "options": [
        "Cephalometric",
        "Periapical",
        "Bitewing",
        "Panoramic"
      ]
    },
    {
      "question": "What does the milliamperage (mA) setting on an x-ray machine control?",
      "answer": "Quantity of x-rays",
      "options": [
        "X-ray penetration",
        "Exposure time",
        "Quantity of x-rays",
        "Film speed"
      ]
    },
    {
      "question": "Which landmark appears radiolucent on a periapical radiograph of the maxillary central incisors?",
      "answer": "Incisive foramen",
      "options": [
        "Mental foramen",
        "Nasal spine",
        "Incisive foramen",
        "Median palatine suture"
      ]
    },
    {
      "question": "What error causes overlapping of the proximal surfaces on a bitewing radiograph?",
      "answer": "Incorrect horizontal angulation",
      "options": [
        "Incorrect film placement",
        "Incorrect vertical angulation",
        "Incorrect horizontal angulation",
        "Too much exposure time"
      ]
    },
    {
      "question": "What is the effect of increasing the kilovoltage peak (kVp) setting?",
      "answer": "Increased penetration and lower contrast",
      "options": [
        "Lower penetration and higher contrast",
        "Increased penetration and lower contrast",
        "Shorter exposure time",
        "Increased image size"
      ]
    },
    {
      "question": "Which type of cells are most sensitive to radiation?",
      "answer": "Rapidly dividing cells",
      "options": [
        "Nerve cells",
        "Muscle cells",
        "Rapidly dividing cells",
        "Fat cells"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    },
    {
      "question": "What does PID stand for in radiography?",
      "answer": "Position Indicating Device",
      "options": [
        "Positive Imaging Device",
        "Position Indicating Device",
        "Photographic Imaging Disc",
        "Primary Image Developer"
      ]
    },
    {
      "question": "What is the most common radiographic processing error?",
      "answer": "Improper time or temperature",
      "options": [
        "Using fast film",
        "Improper time or temperature",
        "Exposing film to light",
        "Contaminated fixer"
      ]
    },
    {
      "question": "What is a panoramic radiograph used for?",
      "answer": "To evaluate the entire dentition and supporting structures",
      "options": [
        "To assess TMJ only",
        "To evaluate nasal cavity",
        "To evaluate the entire dentition and supporting structures",
        "To detect caries"
      ]
    },
    {
      "question": "Which error causes a cone-cut on a radiograph?",
      "answer": "Improper PID alignment",
      "options": [
        "Incorrect exposure time",
        "Improper PID alignment",
        "Too much kVp",
        "Wrong film speed"
      ]
    },
    {
      "question": "Which component inside a film packet protects against secondary radiation?",
      "answer": "Lead foil",
      "options": [
        "Plastic wrap",
        "Black paper",
        "Lead foil",
        "Foam pad"
      ]
    }
  ];
  
  export default flashcards;