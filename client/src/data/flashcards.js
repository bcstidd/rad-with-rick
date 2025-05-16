const flashcards = [
  {
    question: "What anatomical landmark is visible in this radiograph?",
    answer: "Maxillary sinus",
    options: [
      "Mental foramen",
      "Mandibular canal",
      "Maxillary sinus",
      "Nasal spine"
    ],
    explanation: "The maxillary sinus is a radiolucent area seen superior to the posterior teeth in maxillary radiographs.",
    image: "/quiz-images/pano-sinus.png"
  },
  {
    "question": "What is the function of the collimator in a dental x-ray machine?",
    "answer": "Restricts the size of the x-ray beam",
    "options": [
      "Increases image contrast",
      "Removes scatter radiation",
      "Restricts the size of the x-ray beam",
      "Measures exposure time"
    ],
    "explanation": "The collimator narrows the x-ray beam to reduce patient exposure and improve image quality."
  },
  {
    "question": "Which radiograph is best for evaluating unerupted third molars?",
    "answer": "Panoramic radiograph",
    "options": [
      "Bitewing",
      "Periapical",
      "Panoramic radiograph",
      "Occlusal"
    ],
    "explanation": "A panoramic image shows the entire dentition including unerupted and impacted teeth."
  },
  {
    "question": "What causes overlapping contacts on a bitewing radiograph?",
    "answer": "Incorrect horizontal angulation",
    "options": [
      "Incorrect vertical angulation",
      "Too much exposure time",
      "Incorrect horizontal angulation",
      "Patient movement"
    ],
    "explanation": "When the beam is not directed perpendicular to the interproximal spaces, the contacts will appear overlapped."
  },
  {
    "question": "What does the fixer do in film processing?",
    "answer": "Removes unexposed silver halide crystals",
    "options": [
      "Hardens the film",
      "Develops the latent image",
      "Removes unexposed silver halide crystals",
      "Washes the film"
    ],
    "explanation": "The fixer clears the film by removing undeveloped crystals, making the image permanent."
  },
  {
    "question": "What is the MPD (maximum permissible dose) for occupational exposure annually?",
    "answer": "5.0 rem (50 mSv)",
    "options": [
      "0.5 rem",
      "5.0 rem (50 mSv)",
      "50 rem",
      "0.05 mSv"
    ],
    "explanation": "Occupational MPD is 5.0 rem per year according to regulatory guidelines."
  },
  {
    "question": "What causes elongation on a radiograph?",
    "answer": "Too little vertical angulation",
    "options": [
      "Too little vertical angulation",
      "Too low mA",
      "Incorrect voltage",
      "Too much horizontal angulation"
    ],
    "explanation": "Low angulation stretches the image."
  },
  {
    "question": "What does an abscess look like on a radiograph?",
    "answer": "Radiolucency at the apex of the tooth",
    "options": [
      "White lines in the nerve canal",
      "Radiopacity at the apex of the tooth",
      "Radiolucency at the apex of the tooth",
      "Erosion through the enamel"
    ],
    "explanation": "Radiolucency (dark area) at the end of a tooth indicates destruction of the healthy and dense bone."
  },
  {
    "question": "What is the most radiopaque structure on a dental x-ray?",
    "answer": "Enamel",
    "options": [
      "Dentin",
      "Cementum",
      "Enamel",
      "Bone"
    ],
    "explanation": "Enamel is the most dense anatomical structure."
  },
  {
    "question": "What processing error causes dark spots on film?",
    "answer": "Developer contamination before processing",
    "options": [
      "Light leak",
      "Overexposure",
      "Developer contamination before processing",
      "Fixer contamination"
    ],
    "explanation": "If the film comes into contact with developer prior to processing, there will be dark brown spots present."
  },
  {
    "question": "Which anatomical structure is U-shaped and appears radiopaque over upper molars?",
    "answer": "Zygomatic process",
    "options": [
      "Condylar process",
      "Nasopalatine suture",
      "Zygomatic process",
      "Maxillary sinus"
    ],
    "explanation": "The zygomatic process (the cheekbones) are visible above the maxillary molars."
  },
  {
    "question": "What does kVp primarily control?",
    "answer": "The penetrating power and contrast of the x-ray beam",
    "options": [
      "The penetrating power and contrast of the x-ray beam",
      "Image density",
      "Number of electrons produced",
      "The direction of the focusing cup"
    ],
    "explanation": "Higher kVp = lower contrast, greater penetration."
  },
  {
    "question": "Which cells are most radiosensitive?",
    "answer": "Rapidly dividing cells",
    "options": [
      "Muscle cells",
      "Mature cells",
      "Rapidly dividing cells",
      "Neural cells"
    ],
    "explanation": "Cells with high mitotic activity (e.g., blood-forming/bone marrow) are more vulnerable to ionizing radiation."
  },
  {
    "question": "How far must an operator stand from the beam if no protective barrier is used?",
    "answer": "6 feet",
    "options": [
      "12 feet",
      "6 feet",
      "8 feet",
      "3 feet"
    ],
    "explanation": "Distance significantly reduces exposure intensity. The farther you are from the source, the more spread out the radiation is when it gets to you."
  },
  {
    "question": "Define radiolucent",
    "answer": "Areas that appear dark/black on an image",
    "options": [
      "Areas that appear dark/black on an image",
      "Areas that appear light/white on an image",
      "Malignancy in normal anatomy",
      "All of the above"
    ],
    "explanation": "Less dense tissues allow more x-ray penetration."
  },
  {
    "question": "True or False: Amalgam fillings are radiopaque",
    "answer": "True",
    "options": [
      "True",
      "False",
    ],
    "explanation": "Silver fillings appear white on an x-ray due to their increased density."
  },
  {
    "question": "Which statement best describes thermionic emission?",
    "answer": "Heating the tungsten filament to release electrons",
    "options": [
      "Filament electrons being attracted to the anode by high voltage",
      "Heating the tungsten filament to release electrons",
      "Conversion of electron energy into 99% heat and 1% x-rays",
      "Ionizing water molecules in cells"
    ],
    "explanation": "Thermionic emission refers to the filament getting hot (around 3 to 5 V) so electrons “boil off” into an electron cloud. It is not the high voltage or the final collision (which produces x-rays)—it is specifically about releasing electrons from a heated filament."
  },
  {
    "question": "Name the two main types of x-ray production in the dental x-ray tube",
    "answer": "Bremsstrahlung and Characteristic",
    "options": [
      "Characteristic and Naturally occuring",
      "Bremsstrahlung and Characteristic",
      "Inherent and Environmental",
      "Bremsstrahlung and Linear"
    ],
    "explanation": "In bremsstrahlung, the electron slows near the nucleus, losing energy as an x-ray photon. In characteristic, an electron dislodges an inner-shell electron, and the energy from an outer electron dropping in releases a photon. The radiation comes from the skidding tires of the stop."
  },
  {
    "question": "Short-scale contrast (black & white with few grays) is generally achieved by:",
    "answer": "Low kVp",
    "options": [
      "Low mA",
      "Increased FFD",
      "High kVp",
      "Low kVp"
    ],
    "explanation": "Lower kVp = higher contrast, less penetration, so it is mostly black/white areas."
  },
  {
    "question": "Which device removes long-wavelength x-rays from the beam?",
    "answer": "Aluminum filter",
    "options": [
      "Lead collimator",
      "Focusing cup",
      "Aluminum filter",
      "Tungsten target"
    ],
    "explanation": "Low-energy photons add dose but not diagnostic benefit, so the aluminum filter is used to filter them out."
  },
  {
    "question": "Which anatomical structure appears radiolucent near the apices of mandibular premolars and can be mistaken for pathology?",
    "answer": "Mental foramen",
    "options": [
      "Inferior alveolar nerve",
      "Mental foramen",
      "Incisive foramen",
      "Dental abscess"
    ],
    "explanation": "The mental foramen is often near the premolar area, showing as a small radiolucent “dot” that can be confused with an abscess if you aren not familiar with normal anatomy."
  },
  {
    "question": "Which of the following would be the most radiolucent?",
    "answer": "Pulp",
    "options": [
      "Pulp",
      "Crowns",
      "Zygomatic process",
      "Enamel"
    ],
    "explanation": "Pulp is tissue/blood vessels versus hard tooth structure."
  },
  {
    "question": "Which type of x-ray is best for monitoring bone loss over time?",
    "answer": "Bitewings",
    "options": [
      "Bitewings",
      "Panoramic",
      "PA",
      "CBCT"
    ],
    "explanation": "Bitewings reveal the alveolar crest level in relation to the CEJ, so bone height changes are more easily spotted."
  },
  {
    "question": "What causes a cone cut?",
    "answer": "The x-ray beam fails to cover the entire film/sensor",
    "options": [
      "Incorrect solution temperature",
      "Improper kVp/mA settings",
      "Inadequte exposure time",
      "The x-ray beam fails to cover the entire film/sensor"
    ],
    "explanation": "If the beam is misaligned with the sensor, the area that was not exposed to the beam will appear white."
  },
  {
    "question": "Which error is likely if there is excessive vertical angulation?",
    "answer": "Foreshortening",
    "options": [
      "Elongation",
      "Foreshortening",
      "Overlapped contacts",
      "Film fog"
    ],
    "explanation": "If the image is taken from too far down looking up, the tooth will be squished and short."
  },
  {
    "question": "True or False: Characteristic x-rays occur only when an incoming electron strikes an outer-shell electron in tungsten.",
    "answer": "False",
    "options": [
      "True",
      "False",
    ],
    "explanation": "Characteristic x-rays involve inner-shell electrons being knocked out, not outer shell."
  },
  {
    "question": " Which radiation effect is most relevant to low-dose, long-term dental exposure?",
    "answer": "Chronic/cumulative effects over time",
    "options": [
      "Acute radiation sickness",
      "Genetic mutations that appear immediately",
      "Chronic/cumulative effects over time",
      "Total body radiation syndrome"
    ],
    "explanation": "This is why every x-ray counts. Exposures add up over time and cause a build up of effects."
  },
  {
    "question": "What causes overlapping contacts on a bitewing radiograph?",
    "answer": "Incorrect horizontal angulation",
    "options": [
      "Incorrect vertical angulation",
      "Too much exposure time",
      "Incorrect horizontal angulation",
      "Patient movement"
    ],
    "explanation": "When the beam is not directed perpendicular to the interproximal spaces, the contacts will appear overlapped."
  },
  {
    "question": "Which of the following best describes the latent period in radiation biology?",
    "answer": "The interval between radiation exposure and observable effects",
    "options": [
      "The time between film exposure and chemical processing",
      "The interval between radiation exposure and observable effects",
      "The immediate effect of x-rays on tissues",
      "The time it takes for free radicals to appear"
    ],
    "explanation": "During the latent period, the cells exposed to radiation undergo damage that accumulates over time, eventually leading to the development of disease."
  },
  {
    "question": "Which error results in a clear or blank film?",
    "answer": "Failure to expose film to x-rays",
    "options": [
        "Overexposure",
        "Improper fixing",
        "Failure to expose film to x-rays",
        "Double exposure"
      ],
      "explanation": "If the film is not exposed to radiation, it remains completely clear after processing."
  },
  {
    "question": "Which factor controls the quality (energy) of x-rays produced?",
    "answer": "Kilovoltage (kVp)",
    "options": [
      "Milliamperage",
      "Exposure time",
      "Kilovoltage (kVp)",
      "Filtration"
      ],
    "explanation": "Kilovoltage determines the speed of electrons, thus controlling the x-ray beam's penetrating power."
  },  
  {
    "question": "Which component removes the low-energy, long-wavelength x-rays from the beam?",
    "answer": "Filter",
    "options": [
      "Collimator",
      "Anode",
      "Filter",
      "Cathode"
      ],
    "explanation": "The filter absorbs weaker x-rays to improve beam quality and reduce patient exposure."
  },
  {
    "question": "What type of radiograph is used to evaluate the floor of the mouth?",
    "answer": "Occlusal radiograph",
    "options": [
      "Periapical",
      "Panoramic",
      "Bitewing",
      "Occlusal radiograph"
    ],
    "explanation": "Occlusal films provide a broad view of the floor of the mouth and palate."
  },
  {
    "question": "Which technique provides the most accurate image with minimal distortion?",
    "answer": "Paralleling technique",
    "options": [
      "Bisecting technique",
      "Panoramic imaging",
      "Paralleling technique",
      "Occlusal technique"
    ],
    "explanation": "The paralleling technique aligns the image receptor parallel to the tooth, minimizing distortion."
  },
  {
    "question": "What is the function of the anode in the x-ray tube?",
    "answer": "Converts electrons into x-ray photons",
    "options": [
      "Heats up to produce electrons",
      "Focuses the electron beam",
      "Converts electrons into x-ray photons",
      "Blocks stray radiation"
    ],
    "explanation": "The anode receives high-speed electrons and produces x-rays when the electrons hit the tungsten target."
  },
  {
    "question": "Which x-ray exposure factor controls the quantity of x-rays produced?",
    "answer": "Milliamperage (mA)",
    "options": [
      "Exposure time",
      "Kilovoltage (kVp)",
      "Target-surface distance",
      "Milliamperage (mA)"
    ],
    "explanation": "mA controls the amount of current to the x-ray tube, affecting the number of x-rays generated."
  },
  {
    "question": "What does ALARA stand for in radiation safety?",
    "answer": "As Low As Reasonably Achievable",
    "options": [
      "All Lead Aprons Required Always",
      "As Low As Reasonably Achievable",
      "As Late As Radiation Allows",
      "Always Limit All Radiation Amounts"
    ],
    "explanation": "ALARA is the guiding principle of radiation safety to minimize exposure while achieving diagnostic-quality images."
  },
  {
    "question": "Which film processing step removes undeveloped silver halide crystals?",
    "answer": "Fixing",
    "options": [
      "Washing",
      "Developing",
      "Fixing",
      "Drying"
    ],
    "explanation": "The fixer makes the image permanent by clearing unexposed crystals from the film."
  },
  {
    "question": "What is the minimum total filtration required for machines operating above 70 kVp?",
    "answer": "2.5 mm aluminum",
    "options": [
      "1.5 mm aluminum",
      "2.0 mm aluminum",
      "2.5 mm aluminum",
      "3.0 mm aluminum"
    ],
    "explanation": "Regulations mandate 2.5 mm of filtration for higher-energy x-ray machines."
  },
  {
    "question": "Which is a sign of caries on a dental radiograph?",
    "answer": "Radiolucent notch or shadow",
    "options": [
      "Radiolucent notch or shadow",
      "Dark halo around the crown",
      "White band at the CEJ",
      "Radiopaque triangular shape in enamel"
    ],
    "explanation": "On radiographs, carious lesions appear as low-density areas under the tooth structure. This area represents demineralization and dissolving of hard tissue."
  },
  {'question': 'Which part of the x-ray tubehead produces electrons?', 
    'answer': 'Cathode', 
    'options': ['Anode', 
    'Filtration', 
    'Cathode', 
    'Collimator'], 
    'explanation': 
    'The cathode contains the filament that emits electrons when heated.'
  },     
  {'question': 'What is the purpose of the lead foil in a film packet?', 'answer': 'Absorbs scattered radiation', 'options': ['Reflects radiation', 'Protects from saliva', 'Absorbs scattered radiation', 'Enhances image sharpness'], 'explanation': 'The lead foil reduces patient exposure and prevents backscatter radiation.'
  }, 
  {'question': 'What type of radiograph shows the crown and interproximal areas of both arches', 'answer': 'Bitewing', 
    'options': 
    ['Occlusal', 
      'Periapical', 
      'Bitewing', 
      'Panoramic'], 
    'explanation': 'Bitewings are used to detect interproximal caries and monitor crestal bone levels.'
  }, 
  {
    "question": "What is the most critical protection measure for the operator during exposure?",
    "answer": "Distance and shielding",
    "options": [
      "Increasing exposure time",
      "Standing behind the patient",
      "Distance and shielding",
      "Standing in front of x-ray beam"
      ],
    "explanation": "Operators must stand behind protective barriers or 6 feet away at 90-135 degrees."
    },
    {
    "question": "How is film density affected by increasing mA settings?",
    "answer": "Film becomes darker",
    "options": [
      "Film becomes lighter",
      "Film becomes sharper",
      "Film becomes darker",
      "Film is unaffected"
      ],
    "explanation": "Higher mA increases the quantity of x-rays, darkening the image."
    },
    {
      "question": "What is the standard intraoral film size for a posterior PA on an adult?",
      "answer": "2",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "explanation" : "The standard intraoral film size is typically size 2. This film size is 1.2 x 1.7 inches (3 x 4.5 cm). It's commonly used for periapical and bitewing radiographs, which are used to diagnose caries, assess bone levels, and examine the teeth and surrounding structures."
    },
    {
      "question": "Which is the correct series in the generation of x-rays?",
      "answer": "Cathode, Anode, Target",
      "options":[
        "Target, Anode, Cathode",
        "Anode, Cathode, Target",
        "Cathode, Anode, Target",
        "Focusing cup, Aluminum filter, Collimator"
      ],
      "explanation": "X-ray production involves four key steps: 1) thermionic emission: The filament in the X-ray tube is heated, causing electrons to boil off and form a cloud around the filament(in the cathode). 2) Electron acceleration: A high voltage is applied across the tube, accelerating the electrons towards the positively charged (anode). 3) Electron-target interaction: The accelerated electrons collide with the anode (target), releasing energy in the form of X-ray photons. 4) X-ray emission: The X-ray photons are emitted from the anode and travel towards the patient or the detector. "
    }
];
export default flashcards;