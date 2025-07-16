import { Question } from '../../../types';

export const unit1LimitsContinuity: Question[] = [
  // Easy Questions
  {
    id: 'math-12-1-1',
    question: 'What is the limit of f(x) = 3x + 2 as x approaches 1?',
    options: ['3', '5', '2', '1'],
    correct: '5',
    explanation: 'Since f(x) = 3x + 2 is continuous, lim[x→1] f(x) = f(1) = 3(1) + 2 = 5.',
    difficulty: 'easy',
    topic: 'Basic Limits'
  },
  {
    id: 'math-12-1-2',
    question: 'What is lim[x→0] (sin x)/x?',
    options: ['0', '1', '∞', 'Does not exist'],
    correct: '1',
    explanation: 'This is a fundamental limit in calculus: lim[x→0] (sin x)/x = 1.',
    difficulty: 'easy',
    topic: 'Trigonometric Limits'
  },
  {
    id: 'math-12-1-3',
    question: 'A function f(x) is continuous at x = a if:',
    options: ['f(a) exists', 'lim[x→a] f(x) exists', 'lim[x→a] f(x) = f(a)', 'f(x) is defined everywhere'],
    correct: 'lim[x→a] f(x) = f(a)',
    explanation: 'Continuity requires: f(a) exists, lim[x→a] f(x) exists, and lim[x→a] f(x) = f(a).',
    difficulty: 'easy',
    topic: 'Continuity'
  },
  {
    id: 'math-12-1-4',
    question: 'What is lim[x→2] (x² - 4)/(x - 2)?',
    options: ['0', '2', '4', 'Does not exist'],
    correct: '4',
    explanation: 'Factor: (x² - 4)/(x - 2) = (x + 2)(x - 2)/(x - 2) = x + 2 for x ≠ 2. So lim[x→2] = 2 + 2 = 4.',
    difficulty: 'easy',
    topic: 'Indeterminate Forms'
  },
  {
    id: 'math-12-1-5',
    question: 'Which function is discontinuous at x = 0?',
    options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 1/x', 'f(x) = sin x'],
    correct: 'f(x) = 1/x',
    explanation: 'f(x) = 1/x is undefined at x = 0, making it discontinuous there.',
    difficulty: 'easy',
    topic: 'Discontinuity'
  },

  // Medium Questions
  {
    id: 'math-12-1-6',
    question: 'What is lim[x→∞] (3x² + 2x - 1)/(x² + 5)?',
    options: ['0', '1', '3', '∞'],
    correct: '3',
    explanation: 'Divide numerator and denominator by x²: lim[x→∞] (3 + 2/x - 1/x²)/(1 + 5/x²) = 3/1 = 3.',
    difficulty: 'medium',
    topic: 'Limits at Infinity'
  },
  {
    id: 'math-12-1-7',
    question: 'What is lim[x→0] (1 - cos x)/x²?',
    options: ['0', '1/2', '1', '∞'],
    correct: '1/2',
    explanation: 'Using L\'Hôpital\'s rule or the identity: lim[x→0] (1 - cos x)/x² = 1/2.',
    difficulty: 'medium',
    topic: 'Trigonometric Limits'
  },
  {
    id: 'math-12-1-8',
    question: 'For what value of k is f(x) = {kx + 1 if x ≤ 2; 3x - 1 if x > 2} continuous at x = 2?',
    options: ['k = 1', 'k = 2', 'k = 3', 'k = 5'],
    correct: 'k = 2',
    explanation: 'For continuity: lim[x→2⁻] f(x) = lim[x→2⁺] f(x) = f(2). So k(2) + 1 = 3(2) - 1, giving 2k + 1 = 5, so k = 2.',
    difficulty: 'medium',
    topic: 'Piecewise Functions'
  },

  // Hard Questions
  {
    id: 'math-12-1-9',
    question: 'What is lim[x→0] (e^x - 1 - x)/x²?',
    options: ['0', '1/2', '1', '2'],
    correct: '1/2',
    explanation: 'Using Taylor series: e^x = 1 + x + x²/2 + x³/6 + ..., so (e^x - 1 - x)/x² = 1/2 + x/6 + ... → 1/2.',
    difficulty: 'hard',
    topic: 'Advanced Limits'
  },
  {
    id: 'math-12-1-10',
    question: 'What is lim[x→1] (x^n - 1)/(x - 1) for positive integer n?',
    options: ['1', 'n', 'n - 1', '∞'],
    correct: 'n',
    explanation: 'This is the derivative of x^n at x = 1: f\'(1) = nx^(n-1)|_{x=1} = n.',
    difficulty: 'hard',
    topic: 'Derivative Definition'
  }
];