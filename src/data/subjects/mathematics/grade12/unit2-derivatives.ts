import { Question } from '../../../types';

export const unit2Derivatives: Question[] = [
  // Easy Questions
  {
    id: 'math-12-2-1',
    question: 'What is the derivative of f(x) = 3x²?',
    options: ['3x', '6x', '6x²', '3x²'],
    correct: '6x',
    explanation: 'Using the power rule: d/dx(ax^n) = anx^(n-1), so d/dx(3x²) = 3(2)x^(2-1) = 6x.',
    difficulty: 'easy',
    topic: 'Power Rule'
  },
  {
    id: 'math-12-2-2',
    question: 'What is the derivative of f(x) = sin x?',
    options: ['cos x', '-cos x', 'sin x', '-sin x'],
    correct: 'cos x',
    explanation: 'The derivative of sin x is cos x.',
    difficulty: 'easy',
    topic: 'Trigonometric Derivatives'
  },
  {
    id: 'math-12-2-3',
    question: 'What is the derivative of f(x) = e^x?',
    options: ['e^x', 'xe^(x-1)', '1', 'x'],
    correct: 'e^x',
    explanation: 'The derivative of e^x is e^x itself.',
    difficulty: 'easy',
    topic: 'Exponential Derivatives'
  },
  {
    id: 'math-12-2-4',
    question: 'What is the derivative of f(x) = ln x?',
    options: ['1/x', 'x', 'ln x', '1'],
    correct: '1/x',
    explanation: 'The derivative of ln x is 1/x.',
    difficulty: 'easy',
    topic: 'Logarithmic Derivatives'
  },
  {
    id: 'math-12-2-5',
    question: 'What is the derivative of f(x) = x³ + 2x - 5?',
    options: ['3x² + 2', '3x² + 2x', 'x³ + 2', '3x² - 5'],
    correct: '3x² + 2',
    explanation: 'Using the power rule and sum rule: d/dx(x³) + d/dx(2x) - d/dx(5) = 3x² + 2 - 0 = 3x² + 2.',
    difficulty: 'easy',
    topic: 'Basic Rules'
  },

  // Medium Questions
  {
    id: 'math-12-2-6',
    question: 'What is the derivative of f(x) = (2x + 1)³?',
    options: ['3(2x + 1)²', '6(2x + 1)²', '(2x + 1)²', '6(2x + 1)'],
    correct: '6(2x + 1)²',
    explanation: 'Using the chain rule: d/dx[(2x + 1)³] = 3(2x + 1)² · d/dx(2x + 1) = 3(2x + 1)² · 2 = 6(2x + 1)².',
    difficulty: 'medium',
    topic: 'Chain Rule'
  },
  {
    id: 'math-12-2-7',
    question: 'What is the derivative of f(x) = x² sin x?',
    options: ['2x sin x + x² cos x', '2x sin x', 'x² cos x', '2x cos x'],
    correct: '2x sin x + x² cos x',
    explanation: 'Using the product rule: d/dx(uv) = u\'v + uv\', so d/dx(x² sin x) = 2x sin x + x² cos x.',
    difficulty: 'medium',
    topic: 'Product Rule'
  },
  {
    id: 'math-12-2-8',
    question: 'What is the derivative of f(x) = sin x/x?',
    options: ['(x cos x - sin x)/x²', '(cos x - sin x)/x', 'cos x/x', '(x cos x + sin x)/x²'],
    correct: '(x cos x - sin x)/x²',
    explanation: 'Using the quotient rule: d/dx(u/v) = (u\'v - uv\')/v², so d/dx(sin x/x) = (x cos x - sin x)/x².',
    difficulty: 'medium',
    topic: 'Quotient Rule'
  },

  // Hard Questions
  {
    id: 'math-12-2-9',
    question: 'What is the derivative of f(x) = x^x?',
    options: ['x^x', 'x^x(1 + ln x)', 'x^(x-1)', 'x^x ln x'],
    correct: 'x^x(1 + ln x)',
    explanation: 'Using logarithmic differentiation: ln y = x ln x, so y\'/y = ln x + 1, thus y\' = x^x(1 + ln x).',
    difficulty: 'hard',
    topic: 'Logarithmic Differentiation'
  },
  {
    id: 'math-12-2-10',
    question: 'What is the second derivative of f(x) = e^(2x)?',
    options: ['2e^(2x)', '4e^(2x)', 'e^(2x)', '2xe^(2x)'],
    correct: '4e^(2x)',
    explanation: 'First derivative: f\'(x) = 2e^(2x). Second derivative: f\'\'(x) = 2 · 2e^(2x) = 4e^(2x).',
    difficulty: 'hard',
    topic: 'Higher Order Derivatives'
  }
];