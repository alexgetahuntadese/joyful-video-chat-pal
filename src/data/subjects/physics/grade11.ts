import { Chapter } from '../../types';

export const grade11PhysicsChapters: Chapter[] = [
  {
    id: 'phys-11-1',
    name: 'Physics and Human Society',
    description: 'Understanding the role of physics in modern society and technological development',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-1-1',
        question: 'What is physics?',
        options: ['Study of living organisms', 'Study of matter and energy', 'Study of chemical reactions', 'Study of earth processes'],
        correct: 'Study of matter and energy',
        explanation: 'Physics is the fundamental science that studies matter, energy, and their interactions.',
        difficulty: 'easy',
        topic: 'Nature of Physics'
      },
      {
        id: 'phys-11-1-2',
        question: 'Which of the following is a contribution of physics to medicine?',
        options: ['X-ray imaging', 'Plant genetics', 'Soil analysis', 'Weather prediction'],
        correct: 'X-ray imaging',
        explanation: 'X-ray imaging is a medical technology based on physics principles.',
        difficulty: 'easy',
        topic: 'Physics in Medicine'
      },
      {
        id: 'phys-11-1-3',
        question: 'What is the SI base unit for length?',
        options: ['Centimeter', 'Meter', 'Kilometer', 'Inch'],
        correct: 'Meter',
        explanation: 'The meter (m) is the SI base unit for length.',
        difficulty: 'easy',
        topic: 'Units and Measurements'
      },
      {
        id: 'phys-11-1-4',
        question: 'Which technology relies on physics principles?',
        options: ['GPS navigation', 'Plant breeding', 'Cooking recipes', 'Language translation'],
        correct: 'GPS navigation',
        explanation: 'GPS navigation uses satellites and relies on physics principles including relativity.',
        difficulty: 'easy',
        topic: 'Physics in Technology'
      },
      {
        id: 'phys-11-1-5',
        question: 'What is scientific notation?',
        options: ['Writing numbers in words', 'Using symbols for numbers', 'Expressing numbers as powers of 10', 'Converting units'],
        correct: 'Expressing numbers as powers of 10',
        explanation: 'Scientific notation expresses numbers as a coefficient times a power of 10.',
        difficulty: 'easy',
        topic: 'Scientific Notation'
      },
      {
        id: 'phys-11-1-6',
        question: 'Which field combines physics with biology?',
        options: ['Biophysics', 'Geology', 'Chemistry', 'Mathematics'],
        correct: 'Biophysics',
        explanation: 'Biophysics applies physics principles to understand biological systems.',
        difficulty: 'easy',
        topic: 'Interdisciplinary Physics'
      },
      {
        id: 'phys-11-1-7',
        question: 'What is the purpose of dimensional analysis?',
        options: ['To measure objects', 'To check equation validity', 'To draw diagrams', 'To calculate speed'],
        correct: 'To check equation validity',
        explanation: 'Dimensional analysis helps verify that equations are dimensionally consistent.',
        difficulty: 'easy',
        topic: 'Dimensional Analysis'
      },
      {
        id: 'phys-11-1-8',
        question: 'Which of these is a fundamental quantity?',
        options: ['Area', 'Volume', 'Time', 'Density'],
        correct: 'Time',
        explanation: 'Time is one of the seven fundamental quantities in physics.',
        difficulty: 'easy',
        topic: 'Fundamental Quantities'
      },
      {
        id: 'phys-11-1-9',
        question: 'What does MRI stand for in medical imaging?',
        options: ['Magnetic Resonance Imaging', 'Medical Radio Imaging', 'Multiple Ray Imaging', 'Molecular Research Imaging'],
        correct: 'Magnetic Resonance Imaging',
        explanation: 'MRI uses magnetic fields and radio waves to create detailed body images.',
        difficulty: 'easy',
        topic: 'Physics in Medicine'
      },
      {
        id: 'phys-11-1-10',
        question: 'Which instrument measures very small distances?',
        options: ['Ruler', 'Vernier caliper', 'Weighing scale', 'Thermometer'],
        correct: 'Vernier caliper',
        explanation: 'Vernier calipers can measure distances to fractions of a millimeter.',
        difficulty: 'easy',
        topic: 'Measurement Instruments'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-1-11',
        question: 'What is the uncertainty in a measurement of 25.4 ± 0.2 cm?',
        options: ['25.4 cm', '0.2 cm', '25.6 cm', '25.2 cm'],
        correct: '0.2 cm',
        explanation: 'The uncertainty is the ± value, which represents the range of possible error.',
        difficulty: 'medium',
        topic: 'Measurement Uncertainty'
      },
      {
        id: 'phys-11-1-12',
        question: 'Express 0.000045 in scientific notation.',
        options: ['4.5 × 10⁻⁵', '45 × 10⁻⁶', '4.5 × 10⁵', '0.45 × 10⁻⁴'],
        correct: '4.5 × 10⁻⁵',
        explanation: 'Move the decimal point 5 places to the right, so the exponent is -5.',
        difficulty: 'medium',
        topic: 'Scientific Notation'
      },
      {
        id: 'phys-11-1-13',
        question: 'Which principle explains how fiber optic cables work?',
        options: ['Electromagnetic induction', 'Total internal reflection', 'Radioactive decay', 'Thermal expansion'],
        correct: 'Total internal reflection',
        explanation: 'Fiber optics use total internal reflection to guide light through cables.',
        difficulty: 'medium',
        topic: 'Physics in Communication'
      },
      {
        id: 'phys-11-1-14',
        question: 'What is the dimension of acceleration?',
        options: ['[LT⁻¹]', '[LT⁻²]', '[ML⁻¹T⁻²]', '[MT⁻²]'],
        correct: '[LT⁻²]',
        explanation: 'Acceleration has dimensions of length per time squared.',
        difficulty: 'medium',
        topic: 'Dimensional Analysis'
      },
      {
        id: 'phys-11-1-15',
        question: 'How do nuclear power plants generate electricity?',
        options: ['Chemical reactions', 'Nuclear fission', 'Solar energy', 'Wind power'],
        correct: 'Nuclear fission',
        explanation: 'Nuclear power plants use controlled nuclear fission to generate heat and electricity.',
        difficulty: 'medium',
        topic: 'Nuclear Physics Applications'
      },
      {
        id: 'phys-11-1-16',
        question: 'What is the relationship between precision and accuracy?',
        options: ['They are the same', 'Precision is closeness to true value, accuracy is repeatability', 'Accuracy is closeness to true value, precision is repeatability', 'They are unrelated'],
        correct: 'Accuracy is closeness to true value, precision is repeatability',
        explanation: 'Accuracy refers to how close measurements are to the true value, while precision refers to how repeatable measurements are.',
        difficulty: 'medium',
        topic: 'Measurement Quality'
      },
      {
        id: 'phys-11-1-17',
        question: 'Which physics concept explains how laser surgery works?',
        options: ['Mechanical waves', 'Electromagnetic radiation', 'Nuclear fusion', 'Chemical bonding'],
        correct: 'Electromagnetic radiation',
        explanation: 'Lasers are focused beams of electromagnetic radiation used in precise surgery.',
        difficulty: 'medium',
        topic: 'Physics in Medicine'
      },
      {
        id: 'phys-11-1-18',
        question: 'What is the percentage error if measured value is 9.8 and true value is 10.0?',
        options: ['2%', '0.2%', '20%', '0.02%'],
        correct: '2%',
        explanation: 'Percentage error = |measured - true|/true × 100% = |9.8 - 10.0|/10.0 × 100% = 2%',
        difficulty: 'medium',
        topic: 'Error Analysis'
      },
      {
        id: 'phys-11-1-19',
        question: 'How many significant figures are in 0.00340?',
        options: ['2', '3', '5', '6'],
        correct: '3',
        explanation: 'Leading zeros don\'t count, so we have 3, 4, and the trailing 0 (which counts because it\'s after the decimal point).',
        difficulty: 'medium',
        topic: 'Significant Figures'
      },
      {
        id: 'phys-11-1-20',
        question: 'Which technology uses the photoelectric effect?',
        options: ['Solar panels', 'Nuclear reactors', 'Steam engines', 'Mechanical clocks'],
        correct: 'Solar panels',
        explanation: 'Solar panels convert light energy to electrical energy using the photoelectric effect.',
        difficulty: 'medium',
        topic: 'Quantum Physics Applications'
      }
    ]
  },
  {
    id: 'phys-11-2',
    name: 'Vectors',
    description: 'Vector quantities, operations, and applications in physics',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-2-1',
        question: 'What is a vector quantity?',
        options: ['A quantity with magnitude only', 'A quantity with direction only', 'A quantity with both magnitude and direction', 'A quantity without units'],
        correct: 'A quantity with both magnitude and direction',
        explanation: 'Vector quantities have both magnitude (size) and direction.',
        difficulty: 'easy',
        topic: 'Vector Definition'
      },
      {
        id: 'phys-11-2-2',
        question: 'Which of these is a vector quantity?',
        options: ['Speed', 'Time', 'Displacement', 'Temperature'],
        correct: 'Displacement',
        explanation: 'Displacement has both magnitude and direction, making it a vector quantity.',
        difficulty: 'easy',
        topic: 'Vector vs Scalar'
      },
      {
        id: 'phys-11-2-3',
        question: 'What is a scalar quantity?',
        options: ['A quantity with direction only', 'A quantity with magnitude only', 'A quantity with both magnitude and direction', 'A dimensionless quantity'],
        correct: 'A quantity with magnitude only',
        explanation: 'Scalar quantities have only magnitude (size) but no direction.',
        difficulty: 'easy',
        topic: 'Scalar Definition'
      },
      {
        id: 'phys-11-2-4',
        question: 'How are vectors typically represented?',
        options: ['With arrows', 'With circles', 'With squares', 'With triangles'],
        correct: 'With arrows',
        explanation: 'Vectors are represented by arrows where length shows magnitude and direction shows direction.',
        difficulty: 'easy',
        topic: 'Vector Representation'
      },
      {
        id: 'phys-11-2-5',
        question: 'What is the result of adding two vectors pointing in the same direction?',
        options: ['The vectors cancel out', 'The magnitude increases', 'The direction reverses', 'They become scalar'],
        correct: 'The magnitude increases',
        explanation: 'When vectors point in the same direction, their magnitudes add up.',
        difficulty: 'easy',
        topic: 'Vector Addition'
      },
      {
        id: 'phys-11-2-6',
        question: 'Which method can be used to add vectors graphically?',
        options: ['Head-to-tail method', 'Multiplication method', 'Division method', 'Subtraction method'],
        correct: 'Head-to-tail method',
        explanation: 'The head-to-tail method places the tail of one vector at the head of another.',
        difficulty: 'easy',
        topic: 'Graphical Vector Addition'
      },
      {
        id: 'phys-11-2-7',
        question: 'What is the magnitude of a zero vector?',
        options: ['1', '0', 'Undefined', 'Infinity'],
        correct: '0',
        explanation: 'A zero vector has zero magnitude and no specific direction.',
        difficulty: 'easy',
        topic: 'Zero Vector'
      },
      {
        id: 'phys-11-2-8',
        question: 'Which of these is a scalar quantity?',
        options: ['Velocity', 'Force', 'Mass', 'Acceleration'],
        correct: 'Mass',
        explanation: 'Mass has only magnitude and no direction, making it a scalar quantity.',
        difficulty: 'easy',
        topic: 'Scalar Examples'
      },
      {
        id: 'phys-11-2-9',
        question: 'What happens when two equal vectors point in opposite directions?',
        options: ['They double in magnitude', 'They cancel out', 'They become perpendicular', 'They rotate'],
        correct: 'They cancel out',
        explanation: 'Equal vectors in opposite directions result in zero when added.',
        difficulty: 'easy',
        topic: 'Vector Cancellation'
      },
      {
        id: 'phys-11-2-10',
        question: 'What is a unit vector?',
        options: ['A vector with magnitude 1', 'A vector with no direction', 'A vector with infinite magnitude', 'A vector measured in meters'],
        correct: 'A vector with magnitude 1',
        explanation: 'A unit vector has magnitude 1 and is used to specify direction.',
        difficulty: 'easy',
        topic: 'Unit Vectors'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-2-11',
        question: 'If vector A = 3î + 4ĵ, what is its magnitude?',
        options: ['3', '4', '5', '7'],
        correct: '5',
        explanation: '|A| = √(3² + 4²) = √(9 + 16) = √25 = 5',
        difficulty: 'medium',
        topic: 'Vector Magnitude'
      },
      {
        id: 'phys-11-2-12',
        question: 'What is the dot product of vectors A = 2î + 3ĵ and B = 4î + 5ĵ?',
        options: ['8 + 15 = 23', '6î + 12ĵ', '8î + 15ĵ', '23î'],
        correct: '8 + 15 = 23',
        explanation: 'A·B = (2)(4) + (3)(5) = 8 + 15 = 23 (scalar result)',
        difficulty: 'medium',
        topic: 'Dot Product'
      },
      {
        id: 'phys-11-2-13',
        question: 'Two vectors of magnitude 3 and 4 make an angle of 90°. What is their resultant magnitude?',
        options: ['1', '5', '7', '12'],
        correct: '5',
        explanation: 'For perpendicular vectors: R = √(3² + 4²) = √(9 + 16) = 5',
        difficulty: 'medium',
        topic: 'Perpendicular Vectors'
      },
      {
        id: 'phys-11-2-14',
        question: 'What is the angle that vector A = 3î + 3ĵ makes with the x-axis?',
        options: ['30°', '45°', '60°', '90°'],
        correct: '45°',
        explanation: 'tan θ = y/x = 3/3 = 1, so θ = arctan(1) = 45°',
        difficulty: 'medium',
        topic: 'Vector Direction'
      },
      {
        id: 'phys-11-2-15',
        question: 'If A = 5î + 12ĵ, what is the unit vector in the direction of A?',
        options: ['5î + 12ĵ', '(5î + 12ĵ)/13', '(5î + 12ĵ)/17', 'î + ĵ'],
        correct: '(5î + 12ĵ)/13',
        explanation: 'Unit vector = A/|A| = (5î + 12ĵ)/√(5² + 12²) = (5î + 12ĵ)/13',
        difficulty: 'medium',
        topic: 'Unit Vector Calculation'
      },
      {
        id: 'phys-11-2-16',
        question: 'What is the cross product of î × ĵ?',
        options: ['0', '1', 'k̂', '-k̂'],
        correct: 'k̂',
        explanation: 'î × ĵ = k̂ according to the right-hand rule.',
        difficulty: 'medium',
        topic: 'Cross Product'
      },
      {
        id: 'phys-11-2-17',
        question: 'Two forces of 6N and 8N act at right angles. What is their resultant?',
        options: ['2N', '10N', '14N', '48N'],
        correct: '10N',
        explanation: 'For perpendicular forces: R = √(6² + 8²) = √(36 + 64) = 10N',
        difficulty: 'medium',
        topic: 'Force Vectors'
      },
      {
        id: 'phys-11-2-18',
        question: 'If vector A has components (4, 3), what is its direction angle?',
        options: ['36.87°', '53.13°', '30°', '60°'],
        correct: '36.87°',
        explanation: 'θ = arctan(3/4) = arctan(0.75) ≈ 36.87°',
        difficulty: 'medium',
        topic: 'Vector Angle Calculation'
      },
      {
        id: 'phys-11-2-19',
        question: 'What is the vector subtraction A - B equal to?',
        options: ['A + B', 'A + (-B)', 'B - A', '|A| - |B|'],
        correct: 'A + (-B)',
        explanation: 'Vector subtraction A - B = A + (-B), where -B is the negative of vector B.',
        difficulty: 'medium',
        topic: 'Vector Subtraction'
      },
      {
        id: 'phys-11-2-20',
        question: 'What is the geometric meaning of the dot product A·B?',
        options: ['Area of parallelogram', '|A||B|cos θ', '|A||B|sin θ', 'Volume of parallelepiped'],
        correct: '|A||B|cos θ',
        explanation: 'The dot product equals the product of magnitudes times cosine of the angle between them.',
        difficulty: 'medium',
        topic: 'Dot Product Meaning'
      }
    ]
  },
  {
    id: 'phys-11-3',
    name: 'Motion in One and Two Dimensions',
    description: 'Kinematics in one and two dimensions, projectile motion, and circular motion',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-3-1',
        question: 'What is displacement?',
        options: ['Total distance traveled', 'Change in position', 'Speed with direction', 'Rate of change of velocity'],
        correct: 'Change in position',
        explanation: 'Displacement is the change in position vector from initial to final position.',
        difficulty: 'easy',
        topic: 'Displacement'
      },
      {
        id: 'phys-11-3-2',
        question: 'What is the difference between speed and velocity?',
        options: ['No difference', 'Speed has direction, velocity doesn\'t', 'Velocity has direction, speed doesn\'t', 'Speed is faster than velocity'],
        correct: 'Velocity has direction, speed doesn\'t',
        explanation: 'Speed is a scalar (magnitude only), while velocity is a vector (magnitude and direction).',
        difficulty: 'easy',
        topic: 'Speed vs Velocity'
      },
      {
        id: 'phys-11-3-3',
        question: 'What is acceleration?',
        options: ['Change in position', 'Change in distance', 'Rate of change of velocity', 'Total velocity'],
        correct: 'Rate of change of velocity',
        explanation: 'Acceleration is the rate of change of velocity with respect to time.',
        difficulty: 'easy',
        topic: 'Acceleration Definition'
      },
      {
        id: 'phys-11-3-4',
        question: 'What is the SI unit of acceleration?',
        options: ['m/s', 'm/s²', 'm²/s', 'm/s³'],
        correct: 'm/s²',
        explanation: 'Acceleration has units of meters per second squared (m/s²).',
        difficulty: 'easy',
        topic: 'Acceleration Units'
      },
      {
        id: 'phys-11-3-5',
        question: 'In uniform motion, what is the acceleration?',
        options: ['Constant and non-zero', 'Zero', 'Increasing', 'Negative'],
        correct: 'Zero',
        explanation: 'In uniform motion, velocity is constant, so acceleration is zero.',
        difficulty: 'easy',
        topic: 'Uniform Motion'
      },
      {
        id: 'phys-11-3-6',
        question: 'What is free fall?',
        options: ['Motion with no forces', 'Motion under gravity only', 'Circular motion', 'Motion at constant speed'],
        correct: 'Motion under gravity only',
        explanation: 'Free fall is motion under the influence of gravity alone.',
        difficulty: 'easy',
        topic: 'Free Fall'
      },
      {
        id: 'phys-11-3-7',
        question: 'What is the acceleration due to gravity on Earth?',
        options: ['9.8 m/s', '9.8 m/s²', '10 m/s', '10 km/s²'],
        correct: '9.8 m/s²',
        explanation: 'The acceleration due to gravity on Earth is approximately 9.8 m/s².',
        difficulty: 'easy',
        topic: 'Gravitational Acceleration'
      },
      {
        id: 'phys-11-3-8',
        question: 'In projectile motion, what is the horizontal acceleration?',
        options: ['9.8 m/s²', '-9.8 m/s²', '0', 'Variable'],
        correct: '0',
        explanation: 'In projectile motion, there is no horizontal acceleration (ignoring air resistance).',
        difficulty: 'easy',
        topic: 'Projectile Motion'
      },
      {
        id: 'phys-11-3-9',
        question: 'What is circular motion?',
        options: ['Motion in a straight line', 'Motion in a circle', 'Random motion', 'Oscillatory motion'],
        correct: 'Motion in a circle',
        explanation: 'Circular motion is motion along a circular path.',
        difficulty: 'easy',
        topic: 'Circular Motion'
      },
      {
        id: 'phys-11-3-10',
        question: 'What provides centripetal acceleration in circular motion?',
        options: ['Centrifugal force', 'Centripetal force', 'Friction force', 'Gravitational force'],
        correct: 'Centripetal force',
        explanation: 'Centripetal force provides the centripetal acceleration needed for circular motion.',
        difficulty: 'easy',
        topic: 'Centripetal Acceleration'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-3-11',
        question: 'A car travels 100m in 10s. What is its average speed?',
        options: ['10 m/s', '1000 m/s', '0.1 m/s', '100 m/s'],
        correct: '10 m/s',
        explanation: 'Average speed = distance/time = 100m/10s = 10 m/s',
        difficulty: 'medium',
        topic: 'Average Speed'
      },
      {
        id: 'phys-11-3-12',
        question: 'An object starts from rest and accelerates at 2 m/s² for 5s. What is its final velocity?',
        options: ['5 m/s', '10 m/s', '2 m/s', '7 m/s'],
        correct: '10 m/s',
        explanation: 'v = u + at = 0 + (2)(5) = 10 m/s',
        difficulty: 'medium',
        topic: 'Kinematic Equations'
      },
      {
        id: 'phys-11-3-13',
        question: 'How long does it take for an object to fall 45m from rest? (g = 10 m/s²)',
        options: ['3s', '4.5s', '9s', '4s'],
        correct: '3s',
        explanation: 's = ut + ½gt², so 45 = 0 + ½(10)t², giving t² = 9, so t = 3s',
        difficulty: 'medium',
        topic: 'Free Fall Calculations'
      },
      {
        id: 'phys-11-3-14',
        question: 'A projectile is launched at 45° with initial speed 20 m/s. What is the maximum height? (g = 10 m/s²)',
        options: ['5m', '10m', '15m', '20m'],
        correct: '10m',
        explanation: 'vy = 20sin45° = 14.14 m/s. At max height: h = vy²/(2g) = (14.14)²/(2×10) = 10m',
        difficulty: 'medium',
        topic: 'Projectile Motion'
      },
      {
        id: 'phys-11-3-15',
        question: 'What is the centripetal acceleration of an object moving in a circle of radius 2m at 4 m/s?',
        options: ['2 m/s²', '4 m/s²', '8 m/s²', '16 m/s²'],
        correct: '8 m/s²',
        explanation: 'ac = v²/r = (4)²/2 = 16/2 = 8 m/s²',
        difficulty: 'medium',
        topic: 'Centripetal Acceleration'
      },
      {
        id: 'phys-11-3-16',
        question: 'A ball is thrown horizontally from a height of 20m. How long does it take to hit the ground? (g = 10 m/s²)',
        options: ['2s', '4s', '1s', '3s'],
        correct: '2s',
        explanation: 'For vertical motion: h = ½gt², so 20 = ½(10)t², giving t² = 4, so t = 2s',
        difficulty: 'medium',
        topic: 'Horizontal Projectile'
      },
      {
        id: 'phys-11-3-17',
        question: 'What is the period of circular motion if the frequency is 2 Hz?',
        options: ['0.5s', '1s', '2s', '4s'],
        correct: '0.5s',
        explanation: 'Period T = 1/f = 1/2 = 0.5s',
        difficulty: 'medium',
        topic: 'Period and Frequency'
      },
      {
        id: 'phys-11-3-18',
        question: 'An object moves with velocity 30 m/s and decelerates at 5 m/s². How far does it travel before stopping?',
        options: ['90m', '150m', '180m', '75m'],
        correct: '90m',
        explanation: 'v² = u² + 2as, so 0 = (30)² + 2(-5)s, giving s = 900/10 = 90m',
        difficulty: 'medium',
        topic: 'Deceleration'
      },
      {
        id: 'phys-11-3-19',
        question: 'What is the range of a projectile launched at 30° with initial speed 40 m/s? (g = 10 m/s²)',
        options: ['120m', '138.6m', '160m', '200m'],
        correct: '138.6m',
        explanation: 'Range = v₀²sin(2θ)/g = (40)²sin(60°)/10 = 1600×0.866/10 = 138.6m',
        difficulty: 'medium',
        topic: 'Projectile Range'
      },
      {
        id: 'phys-11-3-20',
        question: 'What is the angular velocity of an object completing 3 revolutions in 6 seconds?',
        options: ['π rad/s', '2π rad/s', 'π/2 rad/s', '3π rad/s'],
        correct: 'π rad/s',
        explanation: 'ω = 2πf = 2π(3/6) = 2π(0.5) = π rad/s',
        difficulty: 'medium',
        topic: 'Angular Velocity'
      }
    ]
  },
  {
    id: 'phys-11-4',
    name: 'Dynamics',
    description: 'Newton\'s laws of motion, forces, friction, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-4-1',
        question: 'What is Newton\'s first law of motion?',
        options: ['F = ma', 'An object at rest stays at rest unless acted upon by a force', 'For every action there is an equal and opposite reaction', 'Force equals mass times acceleration'],
        correct: 'An object at rest stays at rest unless acted upon by a force',
        explanation: 'Newton\'s first law states that an object remains in its state of motion unless acted upon by an external force.',
        difficulty: 'easy',
        topic: 'Newton\'s First Law'
      },
      {
        id: 'phys-11-4-2',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 'Newton',
        explanation: 'The Newton (N) is the SI unit of force.',
        difficulty: 'easy',
        topic: 'Force Units'
      },
      {
        id: 'phys-11-4-3',
        question: 'What is Newton\'s second law?',
        options: ['Objects at rest stay at rest', 'F = ma', 'Action equals reaction', 'Energy is conserved'],
        correct: 'F = ma',
        explanation: 'Newton\'s second law states that Force equals mass times acceleration.',
        difficulty: 'easy',
        topic: 'Newton\'s Second Law'
      },
      {
        id: 'phys-11-4-4',
        question: 'What is friction?',
        options: ['A pushing force', 'A force that opposes motion', 'A gravitational force', 'A magnetic force'],
        correct: 'A force that opposes motion',
        explanation: 'Friction is a force that opposes the relative motion between surfaces in contact.',
        difficulty: 'easy',
        topic: 'Friction'
      },
      {
        id: 'phys-11-4-5',
        question: 'What is weight?',
        options: ['Mass of an object', 'Gravitational force on an object', 'Volume of an object', 'Density of an object'],
        correct: 'Gravitational force on an object',
        explanation: 'Weight is the gravitational force exerted on an object by Earth.',
        difficulty: 'easy',
        topic: 'Weight'
      },
      {
        id: 'phys-11-4-6',
        question: 'What is Newton\'s third law?',
        options: ['F = ma', 'Objects at rest stay at rest', 'For every action there is an equal and opposite reaction', 'Force is proportional to acceleration'],
        correct: 'For every action there is an equal and opposite reaction',
        explanation: 'Newton\'s third law states that forces come in pairs of equal magnitude but opposite direction.',
        difficulty: 'easy',
        topic: 'Newton\'s Third Law'
      },
      {
        id: 'phys-11-4-7',
        question: 'What is inertia?',
        options: ['Resistance to change in motion', 'Force per unit mass', 'Rate of change of velocity', 'Work done per unit time'],
        correct: 'Resistance to change in motion',
        explanation: 'Inertia is the tendency of an object to resist changes in its state of motion.',
        difficulty: 'easy',
        topic: 'Inertia'
      },
      {
        id: 'phys-11-4-8',
        question: 'Which has more inertia: a truck or a car?',
        options: ['Car', 'Truck', 'Same', 'Cannot determine'],
        correct: 'Truck',
        explanation: 'A truck has more mass, therefore more inertia than a car.',
        difficulty: 'easy',
        topic: 'Mass and Inertia'
      },
      {
        id: 'phys-11-4-9',
        question: 'What is the normal force?',
        options: ['Force parallel to surface', 'Force perpendicular to surface', 'Force due to friction', 'Force due to gravity'],
        correct: 'Force perpendicular to surface',
        explanation: 'Normal force is the contact force perpendicular to the surface.',
        difficulty: 'easy',
        topic: 'Normal Force'
      },
      {
        id: 'phys-11-4-10',
        question: 'In free fall, what is the only force acting on an object?',
        options: ['Normal force', 'Friction', 'Gravity', 'Applied force'],
        correct: 'Gravity',
        explanation: 'In free fall, gravity is the only force acting on the object.',
        difficulty: 'easy',
        topic: 'Free Fall Forces'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-4-11',
        question: 'A 10 kg object experiences a net force of 50 N. What is its acceleration?',
        options: ['5 m/s²', '10 m/s²', '50 m/s²', '500 m/s²'],
        correct: '5 m/s²',
        explanation: 'Using F = ma: a = F/m = 50N/10kg = 5 m/s²',
        difficulty: 'medium',
        topic: 'Newton\'s Second Law Calculation'
      },
      {
        id: 'phys-11-4-12',
        question: 'What is the weight of a 5 kg object on Earth? (g = 10 m/s²)',
        options: ['5 N', '50 N', '0.5 N', '15 N'],
        correct: '50 N',
        explanation: 'Weight = mg = 5kg × 10 m/s² = 50 N',
        difficulty: 'medium',
        topic: 'Weight Calculation'
      },
      {
        id: 'phys-11-4-13',
        question: 'A box on a table has coefficient of static friction μ = 0.3. If the box weighs 20 N, what is the maximum static friction force?',
        options: ['6 N', '20 N', '0.3 N', '60 N'],
        correct: '6 N',
        explanation: 'Maximum static friction = μN = 0.3 × 20N = 6 N',
        difficulty: 'medium',
        topic: 'Static Friction'
      },
      {
        id: 'phys-11-4-14',
        question: 'Two forces of 3 N and 4 N act perpendicular to each other on an object. What is the net force?',
        options: ['1 N', '5 N', '7 N', '12 N'],
        correct: '5 N',
        explanation: 'For perpendicular forces: F_net = √(3² + 4²) = √(9 + 16) = 5 N',
        difficulty: 'medium',
        topic: 'Vector Addition of Forces'
      },
      {
        id: 'phys-11-4-15',
        question: 'A 2 kg object accelerates from rest to 10 m/s in 5 seconds. What force is applied?',
        options: ['2 N', '4 N', '10 N', '20 N'],
        correct: '4 N',
        explanation: 'a = (v-u)/t = (10-0)/5 = 2 m/s². F = ma = 2kg × 2 m/s² = 4 N',
        difficulty: 'medium',
        topic: 'Force from Motion'
      },
      {
        id: 'phys-11-4-16',
        question: 'What is the tension in a rope supporting a 100 N weight at constant velocity?',
        options: ['50 N', '100 N', '200 N', '0 N'],
        correct: '100 N',
        explanation: 'At constant velocity, net force is zero, so tension equals weight = 100 N',
        difficulty: 'medium',
        topic: 'Tension Forces'
      },
      {
        id: 'phys-11-4-17',
        question: 'An object slides down a frictionless incline of 30°. What is its acceleration? (g = 10 m/s²)',
        options: ['5 m/s²', '8.66 m/s²', '10 m/s²', '3.33 m/s²'],
        correct: '5 m/s²',
        explanation: 'On a frictionless incline: a = g sin θ = 10 × sin(30°) = 10 × 0.5 = 5 m/s²',
        difficulty: 'medium',
        topic: 'Inclined Plane'
      },
      {
        id: 'phys-11-4-18',
        question: 'If action force is 10 N to the right, what is the reaction force?',
        options: ['10 N to the right', '10 N to the left', '5 N to the left', '20 N to the left'],
        correct: '10 N to the left',
        explanation: 'By Newton\'s third law, reaction force is equal in magnitude but opposite in direction.',
        difficulty: 'medium',
        topic: 'Action-Reaction Pairs'
      },
      {
        id: 'phys-11-4-19',
        question: 'A 1000 kg car experiences 500 N of friction while moving at constant speed. What driving force is needed?',
        options: ['500 N', '1000 N', '1500 N', '0 N'],
        correct: '500 N',
        explanation: 'At constant speed, net force is zero, so driving force must equal friction force = 500 N',
        difficulty: 'medium',
        topic: 'Equilibrium of Forces'
      },
      {
        id: 'phys-11-4-20',
        question: 'What is the coefficient of kinetic friction if a 10 kg object requires 30 N to maintain constant speed on a horizontal surface? (g = 10 m/s²)',
        options: ['0.1', '0.3', '0.5', '3'],
        correct: '0.3',
        explanation: 'μk = Friction force / Normal force = 30N / (10kg × 10 m/s²) = 30/100 = 0.3',
        difficulty: 'medium',
        topic: 'Kinetic Friction Coefficient'
      }
    ]
  },
  {
    id: 'phys-11-5',
    name: 'Heat Conduction and Calorimetry',
    description: 'Heat transfer, thermal properties, and calorimetry principles',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-5-1',
        question: 'What is heat?',
        options: ['A form of energy', 'A type of matter', 'A chemical reaction', 'A physical state'],
        correct: 'A form of energy',
        explanation: 'Heat is a form of energy that flows from hot to cold objects.',
        difficulty: 'easy',
        topic: 'Heat Definition'
      },
      {
        id: 'phys-11-5-2',
        question: 'What is the SI unit of heat?',
        options: ['Celsius', 'Kelvin', 'Joule', 'Calorie'],
        correct: 'Joule',
        explanation: 'The Joule (J) is the SI unit of energy, including heat energy.',
        difficulty: 'easy',
        topic: 'Heat Units'
      },
      {
        id: 'phys-11-5-3',
        question: 'What is temperature?',
        options: ['Amount of heat', 'Average kinetic energy of particles', 'Total energy of particles', 'Number of particles'],
        correct: 'Average kinetic energy of particles',
        explanation: 'Temperature is a measure of the average kinetic energy of particles in a substance.',
        difficulty: 'easy',
        topic: 'Temperature Definition'
      },
      {
        id: 'phys-11-5-4',
        question: 'Which direction does heat naturally flow?',
        options: ['From cold to hot', 'From hot to cold', 'In both directions equally', 'Depends on the material'],
        correct: 'From hot to cold',
        explanation: 'Heat naturally flows from objects at higher temperature to those at lower temperature.',
        difficulty: 'easy',
        topic: 'Heat Flow Direction'
      },
      {
        id: 'phys-11-5-5',
        question: 'What is thermal conduction?',
        options: ['Heat transfer through electromagnetic waves', 'Heat transfer through fluid motion', 'Heat transfer through direct contact', 'Heat transfer through chemical reactions'],
        correct: 'Heat transfer through direct contact',
        explanation: 'Thermal conduction is heat transfer through direct contact between particles.',
        difficulty: 'easy',
        topic: 'Conduction'
      },
      {
        id: 'phys-11-5-6',
        question: 'What is specific heat capacity?',
        options: ['Heat needed to raise temperature of unit mass by 1°C', 'Total heat in an object', 'Rate of heat transfer', 'Heat capacity per volume'],
        correct: 'Heat needed to raise temperature of unit mass by 1°C',
        explanation: 'Specific heat capacity is the heat needed to raise the temperature of 1 kg of material by 1°C.',
        difficulty: 'easy',
        topic: 'Specific Heat'
      },
      {
        id: 'phys-11-5-7',
        question: 'Which material is a good thermal conductor?',
        options: ['Wood', 'Copper', 'Plastic', 'Air'],
        correct: 'Copper',
        explanation: 'Copper is a metal and metals are generally good thermal conductors.',
        difficulty: 'easy',
        topic: 'Thermal Conductors'
      },
      {
        id: 'phys-11-5-8',
        question: 'What is calorimetry?',
        options: ['Study of heat transfer', 'Measurement of heat quantities', 'Study of temperature changes', 'Measurement of thermal conductivity'],
        correct: 'Measurement of heat quantities',
        explanation: 'Calorimetry is the measurement of heat quantities in chemical and physical processes.',
        difficulty: 'easy',
        topic: 'Calorimetry'
      },
      {
        id: 'phys-11-5-9',
        question: 'What is thermal equilibrium?',
        options: ['When heat flow stops', 'When temperatures are equal', 'When no energy transfer occurs', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Thermal equilibrium occurs when objects reach the same temperature and heat flow stops.',
        difficulty: 'easy',
        topic: 'Thermal Equilibrium'
      },
      {
        id: 'phys-11-5-10',
        question: 'What happens to most materials when heated?',
        options: ['They contract', 'They expand', 'They change color', 'They become lighter'],
        correct: 'They expand',
        explanation: 'Most materials expand when heated due to increased particle motion.',
        difficulty: 'easy',
        topic: 'Thermal Expansion'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-5-11',
        question: 'How much heat is needed to raise 2 kg of water by 10°C? (specific heat of water = 4200 J/kg°C)',
        options: ['84,000 J', '42,000 J', '8,400 J', '21,000 J'],
        correct: '84,000 J',
        explanation: 'Q = mcΔT = 2kg × 4200 J/kg°C × 10°C = 84,000 J',
        difficulty: 'medium',
        topic: 'Heat Calculation'
      },
      {
        id: 'phys-11-5-12',
        question: 'What is the final temperature when 100g of water at 20°C is mixed with 200g of water at 80°C?',
        options: ['50°C', '60°C', '40°C', '70°C'],
        correct: '60°C',
        explanation: 'Heat lost = Heat gained: m₁c(T-T₁) = m₂c(T₂-T). Solving: T = (100×20 + 200×80)/(100+200) = 60°C',
        difficulty: 'medium',
        topic: 'Heat Mixing'
      },
      {
        id: 'phys-11-5-13',
        question: 'A metal rod conducts heat at rate 100 W through 2 m length with temperature difference 50°C. What is the thermal conductivity if cross-sectional area is 0.01 m²?',
        options: ['4 W/m°C', '40 W/m°C', '400 W/m°C', '0.4 W/m°C'],
        correct: '40 W/m°C',
        explanation: 'Q/t = kAΔT/L, so k = (Q/t)L/(AΔT) = 100×2/(0.01×50) = 40 W/m°C',
        difficulty: 'medium',
        topic: 'Thermal Conductivity'
      },
      {
        id: 'phys-11-5-14',
        question: 'How much does a 2 m steel rod expand when heated from 20°C to 120°C? (coefficient of linear expansion = 12×10⁻⁶ /°C)',
        options: ['2.4 mm', '0.24 mm', '24 mm', '0.024 mm'],
        correct: '2.4 mm',
        explanation: 'ΔL = L₀αΔT = 2m × 12×10⁻⁶/°C × 100°C = 2.4×10⁻³ m = 2.4 mm',
        difficulty: 'medium',
        topic: 'Linear Expansion'
      },
      {
        id: 'phys-11-5-15',
        question: 'What is the heat capacity of an object if 500 J raises its temperature by 25°C?',
        options: ['20 J/°C', '12.5 J/°C', '500 J/°C', '25 J/°C'],
        correct: '20 J/°C',
        explanation: 'Heat capacity = Q/ΔT = 500 J / 25°C = 20 J/°C',
        difficulty: 'medium',
        topic: 'Heat Capacity'
      },
      {
        id: 'phys-11-5-16',
        question: 'A calorimeter contains 200g of water at 25°C. A 50g piece of metal at 100°C is added and final temperature is 30°C. What is the specific heat of metal? (c_water = 4.2 J/g°C)',
        options: ['0.6 J/g°C', '1.2 J/g°C', '0.3 J/g°C', '2.4 J/g°C'],
        correct: '0.6 J/g°C',
        explanation: 'Heat lost by metal = Heat gained by water: 50×c×70 = 200×4.2×5, so c = 4200/3500 = 0.6 J/g°C',
        difficulty: 'medium',
        topic: 'Calorimetry Problem'
      },
      {
        id: 'phys-11-5-17',
        question: 'What is the rate of heat transfer through a window of area 2 m², thickness 5 mm, with temperature difference 20°C? (k = 0.8 W/m°C)',
        options: ['6400 W', '3200 W', '1600 W', '800 W'],
        correct: '6400 W',
        explanation: 'Q/t = kAΔT/d = 0.8 × 2 × 20 / 0.005 = 6400 W',
        difficulty: 'medium',
        topic: 'Heat Transfer Rate'
      },
      {
        id: 'phys-11-5-18',
        question: 'If a material has thermal conductivity 10 W/m°C, what does this mean?',
        options: ['It conducts 10 W through 1 m² per 1°C difference', 'It conducts 10 W through 1 m thickness per 1°C difference per m²', 'It stores 10 J per °C', 'It expands 10 mm per °C'],
        correct: 'It conducts 10 W through 1 m thickness per 1°C difference per m²',
        explanation: 'Thermal conductivity is the heat flow rate through unit area and unit thickness per unit temperature difference.',
        difficulty: 'medium',
        topic: 'Thermal Conductivity Meaning'
      },
      {
        id: 'phys-11-5-19',
        question: 'What is the thermal resistance of a wall 0.2 m thick with thermal conductivity 0.5 W/m°C and area 10 m²?',
        options: ['0.04 °C/W', '0.4 °C/W', '4 °C/W', '25 °C/W'],
        correct: '0.04 °C/W',
        explanation: 'Thermal resistance R = d/(kA) = 0.2/(0.5×10) = 0.04 °C/W',
        difficulty: 'medium',
        topic: 'Thermal Resistance'
      },
      {
        id: 'phys-11-5-20',
        question: 'A cube expands from 1 m³ to 1.003 m³ when heated by 100°C. What is the coefficient of volume expansion?',
        options: ['3×10⁻⁵ /°C', '3×10⁻⁴ /°C', '10⁻⁵ /°C', '10⁻⁴ /°C'],
        correct: '3×10⁻⁵ /°C',
        explanation: 'γ = ΔV/(V₀ΔT) = 0.003/(1×100) = 3×10⁻⁵ /°C',
        difficulty: 'medium',
        topic: 'Volume Expansion'
      }
    ]
  },
  {
    id: 'phys-11-6',
    name: 'Electrostatics and Electric Circuit',
    description: 'Electric charge, electric field, potential, and basic electrical circuits',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-6-1',
        question: 'What is electric charge?',
        options: ['A form of energy', 'A fundamental property of matter', 'A type of force', 'A magnetic property'],
        correct: 'A fundamental property of matter',
        explanation: 'Electric charge is a fundamental property of matter that causes electromagnetic interactions.',
        difficulty: 'easy',
        topic: 'Electric Charge'
      },
      {
        id: 'phys-11-6-2',
        question: 'What is the SI unit of electric charge?',
        options: ['Ampere', 'Volt', 'Coulomb', 'Ohm'],
        correct: 'Coulomb',
        explanation: 'The Coulomb (C) is the SI unit of electric charge.',
        difficulty: 'easy',
        topic: 'Charge Units'
      },
      {
        id: 'phys-11-6-3',
        question: 'What are the two types of electric charge?',
        options: ['North and South', 'Positive and Negative', 'Up and Down', 'Left and Right'],
        correct: 'Positive and Negative',
        explanation: 'Electric charges are classified as positive and negative.',
        difficulty: 'easy',
        topic: 'Types of Charge'
      },
      {
        id: 'phys-11-6-4',
        question: 'What happens when like charges are brought near each other?',
        options: ['They attract', 'They repel', 'Nothing happens', 'They cancel out'],
        correct: 'They repel',
        explanation: 'Like charges (positive-positive or negative-negative) repel each other.',
        difficulty: 'easy',
        topic: 'Charge Interactions'
      },
      {
        id: 'phys-11-6-5',
        question: 'What is electric current?',
        options: ['Flow of electric charge', 'Static electric charge', 'Electric potential', 'Electric resistance'],
        correct: 'Flow of electric charge',
        explanation: 'Electric current is the flow of electric charge through a conductor.',
        difficulty: 'easy',
        topic: 'Electric Current'
      },
      {
        id: 'phys-11-6-6',
        question: 'What is the SI unit of electric current?',
        options: ['Coulomb', 'Volt', 'Ampere', 'Watt'],
        correct: 'Ampere',
        explanation: 'The Ampere (A) is the SI unit of electric current.',
        difficulty: 'easy',
        topic: 'Current Units'
      },
      {
        id: 'phys-11-6-7',
        question: 'What is voltage?',
        options: ['Electric charge', 'Electric current', 'Electric potential difference', 'Electric resistance'],
        correct: 'Electric potential difference',
        explanation: 'Voltage is the electric potential difference between two points.',
        difficulty: 'easy',
        topic: 'Voltage'
      },
      {
        id: 'phys-11-6-8',
        question: 'What is resistance?',
        options: ['Opposition to current flow', 'Electric charge storage', 'Electric field strength', 'Magnetic force'],
        correct: 'Opposition to current flow',
        explanation: 'Resistance is the opposition that a material offers to the flow of electric current.',
        difficulty: 'easy',
        topic: 'Resistance'
      },
      {
        id: 'phys-11-6-9',
        question: 'What is Ohm\'s law?',
        options: ['V = IR', 'P = IV', 'F = qE', 'Q = CV'],
        correct: 'V = IR',
        explanation: 'Ohm\'s law states that voltage equals current times resistance (V = IR).',
        difficulty: 'easy',
        topic: 'Ohm\'s Law'
      },
      {
        id: 'phys-11-6-10',
        question: 'What is an electric field?',
        options: ['Region where electric forces act', 'Flow of electrons', 'Electric potential', 'Magnetic attraction'],
        correct: 'Region where electric forces act',
        explanation: 'An electric field is a region in space where electric charges experience forces.',
        difficulty: 'easy',
        topic: 'Electric Field'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-6-11',
        question: 'What is the force between two point charges of 2×10⁻⁶ C and 3×10⁻⁶ C separated by 0.3 m? (k = 9×10⁹ Nm²/C²)',
        options: ['0.6 N', '0.06 N', '6 N', '60 N'],
        correct: '0.6 N',
        explanation: 'F = kq₁q₂/r² = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0.3)² = 54×10⁻³/0.09 = 0.6 N',
        difficulty: 'medium',
        topic: 'Coulomb\'s Law'
      },
      {
        id: 'phys-11-6-12',
        question: 'What current flows through a 10 Ω resistor when 20 V is applied?',
        options: ['0.5 A', '2 A', '10 A', '200 A'],
        correct: '2 A',
        explanation: 'Using Ohm\'s law: I = V/R = 20 V / 10 Ω = 2 A',
        difficulty: 'medium',
        topic: 'Ohm\'s Law Calculation'
      },
      {
        id: 'phys-11-6-13',
        question: 'What is the electric field strength 0.1 m from a 5×10⁻⁶ C point charge? (k = 9×10⁹ Nm²/C²)',
        options: ['4.5×10⁶ N/C', '4.5×10⁵ N/C', '4.5×10⁴ N/C', '4.5×10³ N/C'],
        correct: '4.5×10⁶ N/C',
        explanation: 'E = kq/r² = (9×10⁹)(5×10⁻⁶)/(0.1)² = 45×10³/0.01 = 4.5×10⁶ N/C',
        difficulty: 'medium',
        topic: 'Electric Field Calculation'
      },
      {
        id: 'phys-11-6-14',
        question: 'What is the total resistance of two 6 Ω resistors in parallel?',
        options: ['3 Ω', '6 Ω', '12 Ω', '1 Ω'],
        correct: '3 Ω',
        explanation: '1/R_total = 1/R₁ + 1/R₂ = 1/6 + 1/6 = 2/6, so R_total = 3 Ω',
        difficulty: 'medium',
        topic: 'Parallel Resistance'
      },
      {
        id: 'phys-11-6-15',
        question: 'What is the power dissipated in a 5 Ω resistor carrying 2 A current?',
        options: ['10 W', '20 W', '2.5 W', '40 W'],
        correct: '20 W',
        explanation: 'P = I²R = (2)² × 5 = 4 × 5 = 20 W',
        difficulty: 'medium',
        topic: 'Power Calculation'
      },
      {
        id: 'phys-11-6-16',
        question: 'How much work is done moving a 2×10⁻⁶ C charge through a potential difference of 100 V?',
        options: ['2×10⁻⁴ J', '2×10⁻⁵ J', '2×10⁻³ J', '2×10⁻⁶ J'],
        correct: '2×10⁻⁴ J',
        explanation: 'W = qV = (2×10⁻⁶ C)(100 V) = 2×10⁻⁴ J',
        difficulty: 'medium',
        topic: 'Electric Potential Work'
      },
      {
        id: 'phys-11-6-17',
        question: 'What is the equivalent resistance of 4 Ω and 6 Ω resistors in series?',
        options: ['2.4 Ω', '5 Ω', '10 Ω', '24 Ω'],
        correct: '10 Ω',
        explanation: 'In series: R_total = R₁ + R₂ = 4 Ω + 6 Ω = 10 Ω',
        difficulty: 'medium',
        topic: 'Series Resistance'
      },
      {
        id: 'phys-11-6-18',
        question: 'What is the electric potential 0.2 m from a 4×10⁻⁶ C point charge? (k = 9×10⁹ Nm²/C²)',
        options: ['180,000 V', '18,000 V', '1,800 V', '180 V'],
        correct: '180,000 V',
        explanation: 'V = kq/r = (9×10⁹)(4×10⁻⁶)/0.2 = 36×10³/0.2 = 180,000 V',
        difficulty: 'medium',
        topic: 'Electric Potential'
      },
      {
        id: 'phys-11-6-19',
        question: 'If a 12 V battery is connected to a 3 Ω resistor, what is the current and power?',
        options: ['4 A, 48 W', '3 A, 36 W', '4 A, 16 W', '12 A, 144 W'],
        correct: '4 A, 48 W',
        explanation: 'I = V/R = 12/3 = 4 A. P = VI = 12 × 4 = 48 W',
        difficulty: 'medium',
        topic: 'Circuit Analysis'
      },
      {
        id: 'phys-11-6-20',
        question: 'What is the capacitance of a capacitor that stores 6×10⁻⁴ C when 200 V is applied?',
        options: ['3×10⁻⁶ F', '3×10⁻⁵ F', '1.2×10⁻¹ F', '1.2×10⁻⁶ F'],
        correct: '3×10⁻⁶ F',
        explanation: 'C = Q/V = (6×10⁻⁴ C)/(200 V) = 3×10⁻⁶ F',
        difficulty: 'medium',
        topic: 'Capacitance'
      }
    ]
  },
  {
    id: 'phys-11-7',
    name: 'Nuclear Physics',
    description: 'Atomic structure, radioactivity, nuclear reactions, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'phys-11-7-1',
        question: 'What is the nucleus of an atom?',
        options: ['Center containing protons and neutrons', 'Outer shell with electrons', 'Entire atom', 'Electron cloud'],
        correct: 'Center containing protons and neutrons',
        explanation: 'The nucleus is the dense center of an atom containing protons and neutrons.',
        difficulty: 'easy',
        topic: 'Atomic Structure'
      },
      {
        id: 'phys-11-7-2',
        question: 'What is radioactivity?',
        options: ['Spontaneous emission of radiation from unstable nuclei', 'Light emission from atoms', 'Heat production in materials', 'Chemical bonding process'],
        correct: 'Spontaneous emission of radiation from unstable nuclei',
        explanation: 'Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei.',
        difficulty: 'easy',
        topic: 'Radioactivity'
      },
      {
        id: 'phys-11-7-3',
        question: 'What is an alpha particle?',
        options: ['High-energy electron', 'Helium nucleus', 'Electromagnetic radiation', 'Free neutron'],
        correct: 'Helium nucleus',
        explanation: 'An alpha particle is a helium nucleus consisting of 2 protons and 2 neutrons.',
        difficulty: 'easy',
        topic: 'Alpha Particles'
      },
      {
        id: 'phys-11-7-4',
        question: 'What is a beta particle?',
        options: ['Proton', 'Neutron', 'Electron or positron', 'Photon'],
        correct: 'Electron or positron',
        explanation: 'A beta particle is an electron (β⁻) or positron (β⁺) emitted from a nucleus.',
        difficulty: 'easy',
        topic: 'Beta Particles'
      },
      {
        id: 'phys-11-7-5',
        question: 'What is gamma radiation?',
        options: ['High-energy particles', 'Low-energy electrons', 'Electromagnetic radiation', 'Nuclear fragments'],
        correct: 'Electromagnetic radiation',
        explanation: 'Gamma radiation consists of high-energy electromagnetic waves.',
        difficulty: 'easy',
        topic: 'Gamma Radiation'
      },
      {
        id: 'phys-11-7-6',
        question: 'What is half-life?',
        options: ['Time for half the radioactive nuclei to decay', 'Time for complete decay', 'Time for radiation to stop', 'Average lifetime of particles'],
        correct: 'Time for half the radioactive nuclei to decay',
        explanation: 'Half-life is the time required for half of the radioactive nuclei in a sample to decay.',
        difficulty: 'easy',
        topic: 'Half-life'
      },
      {
        id: 'phys-11-7-7',
        question: 'What is nuclear fission?',
        options: ['Joining of light nuclei', 'Splitting of heavy nuclei', 'Electron emission', 'Electromagnetic radiation'],
        correct: 'Splitting of heavy nuclei',
        explanation: 'Nuclear fission is the splitting of heavy atomic nuclei into lighter fragments.',
        difficulty: 'easy',
        topic: 'Nuclear Fission'
      },
      {
        id: 'phys-11-7-8',
        question: 'What is nuclear fusion?',
        options: ['Splitting of nuclei', 'Joining of light nuclei', 'Radioactive decay', 'Chemical reaction'],
        correct: 'Joining of light nuclei',
        explanation: 'Nuclear fusion is the process where light atomic nuclei combine to form heavier nuclei.',
        difficulty: 'easy',
        topic: 'Nuclear Fusion'
      },
      {
        id: 'phys-11-7-9',
        question: 'What provides the energy in nuclear reactions?',
        options: ['Chemical bonds', 'Mass-energy conversion', 'Kinetic energy', 'Potential energy'],
        correct: 'Mass-energy conversion',
        explanation: 'Nuclear reactions release energy through the conversion of mass to energy (E=mc²).',
        difficulty: 'easy',
        topic: 'Nuclear Energy'
      },
      {
        id: 'phys-11-7-10',
        question: 'Which force holds the nucleus together?',
        options: ['Electromagnetic force', 'Gravitational force', 'Strong nuclear force', 'Weak nuclear force'],
        correct: 'Strong nuclear force',
        explanation: 'The strong nuclear force binds protons and neutrons together in the nucleus.',
        difficulty: 'easy',
        topic: 'Nuclear Forces'
      },

      // Medium Questions (10)
      {
        id: 'phys-11-7-11',
        question: 'If a radioactive sample has a half-life of 4 hours, what fraction remains after 12 hours?',
        options: ['1/2', '1/4', '1/8', '1/16'],
        correct: '1/8',
        explanation: 'After 12 hours = 3 half-lives: Remaining fraction = (1/2)³ = 1/8',
        difficulty: 'medium',
        topic: 'Half-life Calculation'
      },
      {
        id: 'phys-11-7-12',
        question: 'What happens to mass number and atomic number in alpha decay?',
        options: ['Both decrease', 'Mass number decreases by 4, atomic number decreases by 2', 'Both increase', 'Only atomic number changes'],
        correct: 'Mass number decreases by 4, atomic number decreases by 2',
        explanation: 'Alpha decay emits an alpha particle (₂He⁴), reducing mass number by 4 and atomic number by 2.',
        difficulty: 'medium',
        topic: 'Alpha Decay'
      },
      {
        id: 'phys-11-7-13',
        question: 'What is the binding energy per nucleon for a nucleus with total binding energy 160 MeV and 20 nucleons?',
        options: ['8 MeV', '20 MeV', '160 MeV', '3200 MeV'],
        correct: '8 MeV',
        explanation: 'Binding energy per nucleon = Total binding energy / Number of nucleons = 160 MeV / 20 = 8 MeV',
        difficulty: 'medium',
        topic: 'Binding Energy'
      },
      {
        id: 'phys-11-7-14',
        question: 'In beta-minus decay, what happens inside the nucleus?',
        options: ['Proton becomes neutron', 'Neutron becomes proton', 'Electron is captured', 'Nucleus splits'],
        correct: 'Neutron becomes proton',
        explanation: 'In β⁻ decay, a neutron transforms into a proton, electron, and antineutrino.',
        difficulty: 'medium',
        topic: 'Beta Decay'
      },
      {
        id: 'phys-11-7-15',
        question: 'How much energy is released when 0.1 kg of mass is converted to energy? (c = 3×10⁸ m/s)',
        options: ['9×10¹⁵ J', '3×10⁸ J', '9×10¹⁶ J', '3×10¹⁶ J'],
        correct: '9×10¹⁵ J',
        explanation: 'E = mc² = 0.1 kg × (3×10⁸ m/s)² = 0.1 × 9×10¹⁶ = 9×10¹⁵ J',
        difficulty: 'medium',
        topic: 'Mass-Energy Equivalence'
      },
      {
        id: 'phys-11-7-16',
        question: 'What is the activity of a radioactive sample with 10¹⁶ nuclei and decay constant 10⁻⁶ s⁻¹?',
        options: ['10¹⁰ Bq', '10¹¹ Bq', '10¹² Bq', '10²² Bq'],
        correct: '10¹⁰ Bq',
        explanation: 'Activity A = λN = 10⁻⁶ s⁻¹ × 10¹⁶ = 10¹⁰ s⁻¹ = 10¹⁰ Bq',
        difficulty: 'medium',
        topic: 'Radioactive Activity'
      },
      {
        id: 'phys-11-7-17',
        question: 'What is the relationship between half-life (t₁/₂) and decay constant (λ)?',
        options: ['t₁/₂ = λ', 't₁/₂ = 1/λ', 't₁/₂ = ln(2)/λ', 't₁/₂ = λ/ln(2)'],
        correct: 't₁/₂ = ln(2)/λ',
        explanation: 'The half-life is related to decay constant by t₁/₂ = ln(2)/λ ≈ 0.693/λ',
        difficulty: 'medium',
        topic: 'Half-life and Decay Constant'
      },
      {
        id: 'phys-11-7-18',
        question: 'Which has the greatest penetrating power?',
        options: ['Alpha particles', 'Beta particles', 'Gamma rays', 'All are equal'],
        correct: 'Gamma rays',
        explanation: 'Gamma rays have the greatest penetrating power, followed by beta particles, then alpha particles.',
        difficulty: 'medium',
        topic: 'Radiation Penetration'
      },
      {
        id: 'phys-11-7-19',
        question: 'What is the Q-value of a nuclear reaction where initial mass is 15.000 u and final mass is 14.995 u? (1 u = 931.5 MeV)',
        options: ['4.66 MeV', '0.005 MeV', '14,000 MeV', '0.466 MeV'],
        correct: '4.66 MeV',
        explanation: 'Q = (initial mass - final mass) × 931.5 MeV/u = (15.000 - 14.995) × 931.5 = 4.66 MeV',
        difficulty: 'medium',
        topic: 'Nuclear Reaction Energy'
      },
      {
        id: 'phys-11-7-20',
        question: 'How many alpha and beta decays occur in the decay chain from ²³⁸U to ²⁰⁶Pb?',
        options: ['6 alpha, 8 beta', '8 alpha, 6 beta', '7 alpha, 4 beta', '4 alpha, 7 beta'],
        correct: '8 alpha, 6 beta',
        explanation: 'Mass number change: 238-206=32, so 32/4=8 alpha decays. Atomic number change: 92-82=10, but 8 alpha decays reduce it by 16, so need 6 beta decays to increase by 6.',
        difficulty: 'medium',
        topic: 'Decay Chains'
      }
    ]
  }
];