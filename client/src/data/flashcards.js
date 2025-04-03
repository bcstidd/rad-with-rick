const flashcards = [
    {
      "question": "What is the function of the collimator in an x-ray tubehead?",
      "answer": "Restricts the size of the x-ray beam",
      "options": [
        "Increases contrast",
        "Removes scatter radiation",
        "Restricts the size of the x-ray beam",
        "Measures radiation exposure"
      ]
    },
    {
      "question": "Which radiograph provides a broad view of the jaws, teeth, and sinuses?",
      "answer": "Panoramic radiograph",
      "options": [
        "Cephalometric radiograph",
        "Periapical radiograph",
        "Panoramic radiograph",
        "Bitewing radiograph"
      ]
    },
    {
      "question": "What error results in a 'cone cut' on the image?",
      "answer": "Improper alignment of the PID",
      "options": [
        "Underexposure",
        "Film bending",
        "Improper alignment of the PID",
        "Improper processing"
      ]
    },
    {
      "question": "What is the recommended angle for bisecting technique in periapical imaging?",
      "answer": "Perpendicular to the imaginary bisector",
      "options": [
        "Parallel to the long axis",
        "90\u00b0 to the image receptor",
        "Perpendicular to the imaginary bisector",
        "Slightly above the horizontal plane"
      ]
    },
    {
      "question": "Which component in the x-ray tubehead produces electrons?",
      "answer": "Cathode",
      "options": [
        "Anode",
        "Collimator",
        "Cathode",
        "PID"
      ]
    },
    {
      "question": "What does the fixer solution do during film processing?",
      "answer": "Removes unexposed silver halide crystals",
      "options": [
        "Hardens the film emulsion",
        "Removes unexposed silver halide crystals",
        "Reduces exposed crystals to black metallic silver",
        "Neutralizes the developer"
      ]
    },
    {
      "question": "What is the maximum permissible dose (MPD) for occupational exposure annually?",
      "answer": "5.0 rem (0.05 Sv)",
      "options": [
        "0.5 rem",
        "5.0 rem (0.05 Sv)",
        "50.0 rem",
        "0.05 mSv"
      ]
    },
    {
      "question": "Which type of tissue is most radiosensitive?",
      "answer": "Bone marrow",
      "options": [
        "Muscle",
        "Nerve",
        "Bone marrow",
        "Cartilage"
      ]
    },
    {
      "question": "What should be done if a film packet is contaminated with saliva?",
      "answer": "Wipe with a disinfectant before opening",
      "options": [
        "Place in the developer immediately",
        "Wipe with alcohol and reuse",
        "Wipe with a disinfectant before opening",
        "Open with gloved hands directly"
      ]
    },
    {
      "question": "What causes overlapping contacts in bitewing radiographs?",
      "answer": "Incorrect horizontal angulation",
      "options": [
        "Incorrect vertical angulation",
        "Film placement error",
        "Improper exposure time",
        "Incorrect horizontal angulation"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    },
    {
      "question": "What is the function of the lead apron?",
      "answer": "Shields reproductive organs from scatter radiation",
      "options": [
        "Improves image sharpness",
        "Increases contrast",
        "Shields reproductive organs from scatter radiation",
        "Filters the primary beam"
      ]
    },
    {
      "question": "Which error creates a blurry image?",
      "answer": "Movement during exposure",
      "options": [
        "Insufficient exposure",
        "Incorrect film speed",
        "Movement during exposure",
        "Expired film"
      ]
    },
    {
      "question": "Why is the paralleling technique preferred?",
      "answer": "It produces the most accurate image with minimal distortion",
      "options": [
        "It is faster",
        "It uses less radiation",
        "It produces the most accurate image with minimal distortion",
        "It requires fewer instruments"
      ]
    },
    {
      "question": "How should film be stored?",
      "answer": "In a cool, dry place away from radiation",
      "options": [
        "In a lead-lined cabinet",
        "Under bright light",
        "In a warm area",
        "In a cool, dry place away from radiation"
      ]
    },
    {
      "question": "Which condition causes radiographic fog?",
      "answer": "Exposure to scatter or secondary radiation",
      "options": [
        "Insufficient washing",
        "Exposure to scatter or secondary radiation",
        "Incorrect mA setting",
        "Developer contamination"
      ]
    }
  ];
  
  export default flashcards;