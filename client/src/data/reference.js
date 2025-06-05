const reference = [
  // ─── Image Appearance ─────────────────────────────
  { term: 'Radiolucent', definition: 'Areas that appear dark/black on a radiograph because the tissue is less dense.', category: 'Image Appearance' },
  { term: 'Radiopaque', definition: 'Areas that appear white or light on a radiograph due to dense structures like enamel or bone.', category: 'Image Appearance' },
  { term: 'Trabeculae', definition: 'The spongy, lattice-like pattern seen in cancellous bone.', category: 'Image Appearance' },

  // ─── Equipment & X-ray Generation ─────────────────
  { term: 'Collimator', definition: 'Device that restricts the size and shape of the x‑ray beam.', category: 'Equipment & X-ray Generation' },
  { term: 'Anode', definition: 'The positive terminal in the x-ray tube where x-rays are produced.', category: 'Equipment & X-ray Generation' },
  { term: 'Cathode', definition: 'The negative terminal in the x-ray tube that emits electrons.', category: 'Equipment & X-ray Generation' },
  { term: 'Focal Spot', definition: 'The target area on the anode struck by electrons to generate x-rays.', category: 'Equipment & X-ray Generation' },
  { term: 'Kilovoltage (kVp)', definition: 'Controls the energy/penetrating power of the x-ray beam and image contrast.', category: 'Equipment & X-ray Generation' },
  { term: 'Milliamperage (mA)', definition: 'Controls the number (quantity) of x-rays produced.', category: 'Equipment & X-ray Generation' },
  { term: 'Thermionic Emission', definition: 'Release of electrons from a heated tungsten filament.', category: 'Equipment & X-ray Generation' },

  // ─── Body Planes & Orientation ────────────────────
  { term: 'Sagittal Plane', definition: 'Divides the body into left and right sides.', category: 'Anatomy & Body Planes' },
  { term: 'Coronal Plane', definition: 'Divides the body into front (anterior) and back (posterior) portions.', category: 'Anatomy & Body Planes' },
  { term: 'Axial Plane', definition: 'Divides the body into upper and lower sections (horizontal plane).', category: 'Anatomy & Body Planes' },

  // ─── Anatomic Landmarks ───────────────────────────
  { term: 'Mental Foramen', definition: 'A small opening near the premolars on the mandible, often appearing as a round radiolucency.', category: 'Anatomic Landmarks' },
  { term: 'Genial Tubercle', definition: 'Tiny radiopaque bumps on the lingual aspect of the anterior mandible.', category: 'Anatomic Landmarks' },
  { term: 'Mylohyoid Ridge', definition: 'A radiopaque ridge seen on mandibular radiographs, running downward and forward from the molar area.', category: 'Anatomic Landmarks' },
  { term: 'Mandibular Canal', definition: 'A radiolucent band representing the path of the inferior alveolar nerve.', category: 'Anatomic Landmarks' },
  { term: 'Zygomatic Process', definition: 'U- or J-shaped radiopaque structure above the maxillary molars.', category: 'Anatomic Landmarks' },
  { term: 'Incisive Foramen', definition: 'A small round opening behind the maxillary central incisors.', category: 'Anatomic Landmarks' },
  { term: 'Anterior Nasal Spine', definition: 'A V-shaped radiopaque projection at the base of the nasal cavity.', category: 'Anatomic Landmarks' },
  { term: 'Coronoid Process', definition: 'A triangular projection of the mandible often visible in maxillary molar films.', category: 'Anatomic Landmarks' },
  { term: 'Hamular Notch', definition: 'A radiolucent area posterior to the maxillary tuberosity.', category: 'Anatomic Landmarks' },

  // ─── Mounting & Viewing ───────────────────────────
  { term: 'Labial Mounting', definition: 'Viewing radiographs as if looking at the patient face-to-face; preferred method.', category: 'Mounting & Viewing' },
  { term: 'Lingual Mounting', definition: 'Viewing radiographs as if inside the patient’s mouth looking outward.', category: 'Mounting & Viewing' },
  { term: 'Viewbox', definition: 'An illuminated surface used to examine traditional film radiographs.', category: 'Mounting & Viewing' }
];

export default reference;
