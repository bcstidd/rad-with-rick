const reference = [
  // ─── Image Appearance ─────────────────────────────
  { term: 'Radiolucent', definition: 'Areas that appear dark/black on a radiograph because the tissue is less dense.', category: 'Image Appearance' },
  { term: 'Radiopaque', definition: 'Areas that appear white or light on a radiograph due to dense structures like enamel or bone.', category: 'Image Appearance' },
  { term: 'Trabeculae', definition: 'The spongy, lattice-like pattern seen in cancellous bone.', category: 'Image Appearance' },
  { term: 'Lamina Dura', definition: 'The dense radiopaque line that outlines the root of a tooth, representing the wall of the tooth socket.', category: 'Image Appearance' },
  { term: 'Periodontal Ligament Space', definition: 'A thin radiolucent line surrounding the root of the tooth, located between the lamina dura and the root.', category: 'Image Appearance' },
  { term: 'Alveolar Crest', definition: 'The most coronal portion of the alveolar bone between teeth, typically 1.5 to 2.0 mm apical to the CEJ.', category: 'Image Appearance' },
  
// ─── Dental Anatomy Basics ───────────────────────
  { term: 'Tooth', definition: 'A hard structure in the mouth used for biting and chewing.', category: 'Dental Basics' },
  { term: 'Enamel', definition: 'The hard, outermost layer of a tooth; protects against decay.', category: 'Dental Basics' },
  { term: 'Dentin', definition: 'The layer beneath the enamel; less hard and more sensitive.', category: 'Dental Basics' },
  { term: 'Pulp', definition: 'The soft inner part of a tooth that contains nerves and blood vessels.', category: 'Dental Basics' },
  { term: 'Root', definition: 'The part of the tooth that anchors it into the jawbone.', category: 'Dental Basics' },
  { term: 'Crown', definition: 'The visible part of the tooth above the gum line.', category: 'Dental Basics' },
  { term: 'Gums (Gingiva)', definition: 'The soft tissue that surrounds and supports the teeth.', category: 'Dental Basics' },

  // ─── Tooth Surfaces & Directions ─────────────────
  { term: 'Mesial', definition: 'The side of the tooth closest to the center of the mouth.', category: 'Tooth Orientation' },
  { term: 'Distal', definition: 'The side of the tooth farthest from the center of the mouth.', category: 'Tooth Orientation' },
  { term: 'Occlusal', definition: 'The chewing surface of the back teeth.', category: 'Tooth Orientation' },
  { term: 'Incisal', definition: 'The biting edge of the front teeth.', category: 'Tooth Orientation' },
  { term: 'Lingual', definition: 'The side of the tooth that faces the tongue.', category: 'Tooth Orientation' },
  { term: 'Buccal', definition: 'The side of the tooth that faces the cheek (back teeth).', category: 'Tooth Orientation' },
  { term: 'Labial', definition: 'The side of the front tooth that faces the lips.', category: 'Tooth Orientation' },


  // ─── Radiology 101 Terms ─────────────────────────
  { term: 'X-ray', definition: 'A type of energy that can pass through the body to create images of bones and teeth.', category: 'Radiology Basics' },
  { term: 'Radiograph', definition: 'An image created using x-rays; often called an “x-ray picture.”', category: 'Radiology Basics' },
  { term: 'Exposure', definition: 'The process of turning on the x-ray machine to produce an image.', category: 'Radiology Basics' },
  { term: 'Lead Apron', definition: 'A protective shield placed on a patient to reduce radiation exposure.', category: 'Radiology Basics' },
  { term: 'Sensor', definition: 'The digital device or film used to capture the image.', category: 'Radiology Basics' },
  { term: 'Bitewing', definition: 'A type of radiograph that shows the top and bottom teeth biting together.', category: 'Radiology Basics' },
  { term: 'Periapical', definition: 'A type of radiograph that shows the whole tooth from crown to root.', category: 'Radiology Basics' },

  // ─── Common Dental Procedures ────────────────────
  { term: 'Cavity', definition: 'A hole in a tooth caused by decay.', category: 'Common Procedures' },
  { term: 'Filling', definition: 'Material used to restore a tooth damaged by decay.', category: 'Common Procedures' },
  { term: 'Crown (Cap)', definition: 'A restoration that covers the entire tooth.', category: 'Common Procedures' },
  { term: 'Root Canal', definition: 'A procedure that treats infection inside the tooth by removing the pulp.', category: 'Common Procedures' },
  { term: 'Extraction', definition: 'The removal of a tooth.', category: 'Common Procedures' },

  // ─── Radiation Physics & Image Formation ───────────
  { term: 'Anode', definition: 'The positive terminal in the x-ray tube where x-rays are produced.', category: 'Image Formation & Physics' },
  { term: 'Cathode', definition: 'The negative terminal in the x-ray tube that emits electrons.', category: 'Image Formation & Physics' },
  { term: 'Focal Spot', definition: 'The target area on the anode struck by electrons to generate x-rays.', category: 'Image Formation & Physics' },
  { term: 'Kilovoltage (kVp)', definition: 'Controls the energy/penetrating power of the x-ray beam and affects image contrast.', category: 'Image Formation & Physics' },
  { term: 'Milliamperage (mA)', definition: 'Controls the number (quantity) of x-rays produced.', category: 'Image Formation & Physics' },
  { term: 'Thermionic Emission', definition: 'Release of electrons from a heated tungsten filament.', category: 'Image Formation & Physics' },
  { term: 'Filtration', definition: 'The removal of low-energy x-rays from the beam, typically using aluminum discs.', category: 'Image Formation & Physics' },
  { term: 'Collimation', definition: 'Restricts the size and shape of the x-ray beam to reduce patient exposure and improve image quality.', category: 'Image Formation & Physics' },
  { term: 'Half-Value Layer', definition: 'The amount of filtration needed to reduce the intensity of the x-ray beam by half.', category: 'Image Formation & Physics' },
  { term: 'Scatter Radiation', definition: 'Secondary radiation that occurs when the primary beam interacts with matter.', category: 'Image Formation & Physics' },
  { term: 'Inverse Square Law', definition: 'States that the intensity of the x-ray beam is inversely proportional to the square of the distance from the source.', category: 'Image Formation & Physics' },

  // ─── Anatomy & Body Planes ─────────────────────────
  { term: 'Sagittal Plane', definition: 'Divides the body into left and right sides.', category: 'Anatomy & Body Planes' },
  { term: 'Coronal Plane', definition: 'Divides the body into front (anterior) and back (posterior) portions.', category: 'Anatomy & Body Planes' },
  { term: 'Axial Plane', definition: 'Divides the body into upper and lower sections (horizontal plane).', category: 'Anatomy & Body Planes' },

  // ─── Anatomic Landmarks ───────────────────────────
  { term: 'Genial Tubercle', definition: 'Tiny radiopaque bumps on the lingual aspect of the anterior mandible.', category: 'Anatomic Landmarks' },
  { term: 'Mental Foramen', definition: 'A small opening near the premolars on the mandible, often appearing as a round radiolucency.', category: 'Anatomic Landmarks' },
  { term: 'Mandibular Canal', definition: 'A radiolucent band representing the path of the inferior alveolar nerve.', category: 'Anatomic Landmarks' },
  { term: 'Mylohyoid Ridge', definition: 'A radiopaque ridge seen on mandibular radiographs, running downward and forward from the molar area.', category: 'Anatomic Landmarks' },
  { term: 'Zygomatic Process', definition: 'U- or J-shaped radiopaque structure above the maxillary molars.', category: 'Anatomic Landmarks' },
  { term: 'Incisive Foramen', definition: 'A small round opening behind the maxillary central incisors.', category: 'Anatomic Landmarks' },
  { term: 'Anterior Nasal Spine', definition: 'A V-shaped radiopaque projection at the base of the nasal cavity.', category: 'Anatomic Landmarks' },
  { term: 'Coronoid Process', definition: 'A triangular projection of the mandible often visible in maxillary molar films.', category: 'Anatomic Landmarks' },
  { term: 'Hamular Notch', definition: 'A radiolucent area posterior to the maxillary tuberosity.', category: 'Anatomic Landmarks' },

  // ─── Radiation Safety & Protection ─────────────────
  { term: 'Ionization', definition: 'The process by which atoms lose or gain electrons, forming ions; occurs when x-rays interact with tissue.', category: 'Radiation Safety' },
  { term: 'Somatic Effects', definition: 'Biologic effects of radiation that are seen in the person exposed, not passed to offspring.', category: 'Radiation Safety' },
  { term: 'Genetic Effects', definition: 'Biologic changes in reproductive cells that are passed to future generations.', category: 'Radiation Safety' },
  { term: 'Radiosensitive Cells', definition: 'Cells that are more likely to be damaged by radiation, such as blood and reproductive cells.', category: 'Radiation Safety' },
  { term: 'Lead Apron', definition: 'Protective shield worn by patients to reduce radiation exposure to vital organs.', category: 'Radiation Safety' },
  { term: 'Thyroid Collar', definition: 'A flexible lead shield used to protect the thyroid gland during radiographic exposure.', category: 'Radiation Safety' },
  { term: 'Dosimeter', definition: 'A device worn by operators to monitor exposure to radiation over time.', category: 'Radiation Safety' },
  { term: 'ALARA', definition: '“As Low As Reasonably Achievable”; a principle for minimizing radiation exposure.', category: 'Radiation Safety' },

  // ─── Film & Digital Imaging ────────────────────────
  { term: 'Film Speed', definition: 'Refers to the sensitivity of the film to radiation; faster film requires less exposure.', category: 'Film & Digital Imaging' },
  { term: 'Developer', definition: 'The chemical solution that reduces exposed silver halide crystals into black metallic silver.', category: 'Film & Digital Imaging' },
  { term: 'Fixer', definition: 'The chemical solution that removes unexposed silver halide crystals and hardens the image.', category: 'Film & Digital Imaging' },
  { term: 'Reference Film', definition: 'A film used as a standard to compare processing quality and density.', category: 'Film & Digital Imaging' },
  { term: 'Receptor Holder', definition: 'A device used to hold and position the image receptor in the mouth.', category: 'Film & Digital Imaging' },
  { term: 'Reticulation', definition: 'Film processing error caused by sudden temperature change between developer and water.', category: 'Film & Digital Imaging' },
  { term: 'Bitewing', definition: 'A radiograph used to detect interproximal caries and bone levels in posterior teeth.', category: 'Film & Digital Imaging' },
  { term: 'Periapical', definition: 'A radiograph that shows the entire tooth and surrounding structures.', category: 'Film & Digital Imaging' },
  { term: 'Occlusal', definition: 'A radiograph that captures large areas of the maxilla or mandible.', category: 'Film & Digital Imaging' },
  { term: 'Panoramic', definition: 'An extraoral radiograph that shows the entire maxilla and mandible in a single image.', category: 'Film & Digital Imaging' },

  // ─── Radiographic Techniques ───────────────────────
  { term: 'Paralleling Technique', definition: 'Technique in which the image receptor is placed parallel to the long axis of the tooth.', category: 'Radiographic Techniques' },
  { term: 'Bisecting Technique', definition: 'Technique in which the central ray is directed perpendicular to an imaginary bisector between the film and tooth.', category: 'Radiographic Techniques' },
  { term: 'Horizontal Angulation', definition: 'Movement of the tubehead side-to-side; affects overlapping of contacts.', category: 'Radiographic Techniques' },
  { term: 'Vertical Angulation', definition: 'Movement of the tubehead up or down; affects elongation or foreshortening.', category: 'Radiographic Techniques' },
  { term: 'Cone Cut', definition: 'A clear, unexposed area on the radiograph due to misalignment of the PID.', category: 'Radiographic Techniques' },
  { term: 'Beam Alignment Device', definition: 'Used to help position the PID and receptor properly and maintain paralleling.', category: 'Radiographic Techniques' },

  // ─── Legal & Clinical Procedures ───────────────────
  { term: 'Informed Consent', definition: 'Permission obtained from a patient after explaining the procedure, risks, and benefits.', category: 'Legal & Clinical' },
  { term: 'Exposure Record', definition: 'Documentation of all radiographs taken, including technique and justification.', category: 'Legal & Clinical' },
  { term: 'Operator Protection', definition: 'Methods to reduce operator exposure, including distance, shielding, and dosimetry.', category: 'Legal & Clinical' },

  // ─── Mounting & Interpretation ─────────────────────
  { term: 'Labial Mounting', definition: 'Viewing radiographs as if looking at the patient face-to-face; preferred method.', category: 'Mounting & Interpretation' },
  { term: 'Lingual Mounting', definition: 'Viewing radiographs as if from inside the patient’s mouth looking out.', category: 'Mounting & Interpretation' },
  { term: 'Mount', definition: 'A cardboard or plastic holder used to organize and store radiographs.', category: 'Mounting & Interpretation' },
  { term: 'Viewbox', definition: 'An illuminated surface used to evaluate traditional radiographs.', category: 'Mounting & Interpretation' },
  { term: 'Curve of Spee', definition: 'The anatomical curvature of the occlusal plane, used as a mounting guide.', category: 'Mounting & Interpretation' }
];

export default reference;
