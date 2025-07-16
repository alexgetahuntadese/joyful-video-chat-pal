import { Question } from '../../../types';

export const unit3Integration: Question[] = [
  // Easy Questions
  {
    id: 'math-12-3-1',
    question: 'What is ∫3x² dx?',
    options: ['x³ + C', '3x³ + C', '6x + C', '9x² + C'],
    correct: 'x³ + C',
    explanation: 'Using the power rule for integration: ∫ax^n dx = a·x^(n+1)/(n+1) + C, so ∫3x² dx = 3·x³/3 + C = x³ + C.',
    difficulty: 'easy',
    topic: 'Basic Integration'
  },
  {
    id: 'math-12-3-2',
    question: 'What is ∫sin x dx?',
    options: ['cos x + C', '-cos x + C', 'sin x + C', '-sin x + C'],
    correct: '-cos x + C',
    explanation: 'The antiderivative of sin x is -cos x + C.',
    difficulty: 'easy',
    topic: 'Trigonometric Integration'
  },
  {
    id: 'math-12-3-3',
    question: 'What is ∫e^x dx?',
    options: ['e^x + C', 'xe^x + C', 'e^(x+1) + C', '(e^x)/x + C'],
    correct: 'e^x + C',
    explanation: 'The antiderivative of e^x is e^x + C.',
    difficulty: 'easy',
    topic: 'Exponential Integration'
  },
  {
    id: 'math-12-3-4',
    question: 'What is ∫(1/x) dx?',
    options: ['ln|x| + C', 'x + C', '-1/x² + C', '1/x² + C'],
    correct: 'ln|x| + C',
    explanation: 'The antiderivative of 1/x is ln|x| + C.',
    difficulty: 'easy',
    topic: 'Logarithmic Integration'
  },
  {
    id: 'math-12-3-5',
    question: 'What is ∫₀¹ 2x dx?',
    options: ['0', '1', '2', '1/2'],
    correct: '1',
    explanation: '∫₀¹ 2x dx = [x²]₀¹ = 1² - 0² = 1.',
    difficulty: 'easy',
    topic: 'Definite Integrals'
  },

  // Medium Questions
  {
    id: 'math-12-3-6',
    question: 'What is ∫(2x + 1)³ dx?',
    options: ['(2x + 1)⁴/8 + C', '(2x + 1)⁴/4 + C', '3(2x + 1)² + C', '(2x + 1)⁴/2 + C'],
    correct: '(2x + 1)⁴/8 + C',
    explanation: 'Using substitution u = 2x + 1, du = 2dx: ∫u³ · (1/2)du = (1/2)·u⁴/4 = u⁴/8 = (2x + 1)⁴/8 + C.',
    difficulty: 'medium',
    topic: 'Substitution Method'
  },
  {
    id: 'math-12-3-7',
    question: 'What is ∫x·e^x dx?',
    options: ['xe^x - e^x + C', 'xe^x + e^x + C', 'e^x + C', 'x²e^x/2 + C'],
    correct: 'xe^x - e^x + C',
    explanation: 'Using integration by parts: u = x, dv = e^x dx, so du = dx, v = e^x. ∫x·e^x dx = xe^x - ∫e^x dx = xe^x - e^x + C.',
    difficulty: 'medium',
    topic: 'Integration by Parts'
  },
  {
    id: 'math-12-3-8',
    question: 'What is the area under f(x) = x² from x = 0 to x = 2?',
    options: ['4/3', '8/3', '4', '8'],
    correct: '8/3',
    explanation: 'Area = ∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3.',
    difficulty: 'medium',
    topic: 'Area Applications'
  },

  // Hard Questions
  {
    id: 'math-12-3-9',
    question: 'What is ∫sin²x dx?',
    options: ['x/2 - (sin 2x)/4 + C', 'x/2 + (sin 2x)/4 + C', '-cos²x + C', '(sin 2x)/2 + C'],
    correct: 'x/2 - (sin 2x)/4 + C',
    explanation: 'Using identity sin²x = (1 - cos 2x)/2: ∫sin²x dx = ∫(1 - cos 2x)/2 dx = x/2 - (sin 2x)/4 + C.',
    difficulty: 'hard',
    topic: 'Trigonometric Identities'
  },
  {
    id: 'math-12-3-10',
    question: 'What is ∫₁^∞ 1/x² dx?',
    options: ['1', '∞', '0', 'Does not exist'],
    correct: '1',
    explanation: 'This is an improper integral: ∫₁^∞ 1/x² dx = lim[t→∞] [-1/x]₁^t = lim[t→∞] (-1/t + 1) = 0 + 1 = 1.',
    difficulty: 'hard',
    topic: 'Improper Integrals'
  }
];