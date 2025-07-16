import { Question } from '../../../types';

export const unit6Statistics: Question[] = [
  // Easy Questions
  {
    id: 'math-12-6-1',
    question: 'What is the mean of the data set: 2, 4, 6, 8, 10?',
    options: ['5', '6', '7', '8'],
    correct: '6',
    explanation: 'Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.',
    difficulty: 'easy',
    topic: 'Measures of Central Tendency'
  },
  {
    id: 'math-12-6-2',
    question: 'What is the median of: 1, 3, 5, 7, 9?',
    options: ['3', '5', '7', '9'],
    correct: '5',
    explanation: 'The median is the middle value when data is ordered. For 5 values, the median is the 3rd value: 5.',
    difficulty: 'easy',
    topic: 'Measures of Central Tendency'
  },
  {
    id: 'math-12-6-3',
    question: 'What is the mode of: 2, 3, 3, 4, 5, 5, 5, 6?',
    options: ['3', '4', '5', '6'],
    correct: '5',
    explanation: 'The mode is the most frequently occurring value. 5 appears 3 times, more than any other value.',
    difficulty: 'easy',
    topic: 'Measures of Central Tendency'
  },
  {
    id: 'math-12-6-4',
    question: 'What is the range of: 10, 15, 20, 25, 30?',
    options: ['15', '20', '25', '30'],
    correct: '20',
    explanation: 'Range = Maximum - Minimum = 30 - 10 = 20.',
    difficulty: 'easy',
    topic: 'Measures of Dispersion'
  },
  {
    id: 'math-12-6-5',
    question: 'In a normal distribution, what percentage of data falls within one standard deviation of the mean?',
    options: ['68%', '95%', '99.7%', '50%'],
    correct: '68%',
    explanation: 'In a normal distribution, approximately 68% of data falls within one standard deviation of the mean.',
    difficulty: 'easy',
    topic: 'Normal Distribution'
  },

  // Medium Questions
  {
    id: 'math-12-6-6',
    question: 'What is the variance of: 2, 4, 6, 8, 10? (Population variance)',
    options: ['6', '8', '10', '12'],
    correct: '8',
    explanation: 'Mean = 6. Variance = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] ÷ 5 = [16 + 4 + 0 + 4 + 16] ÷ 5 = 8.',
    difficulty: 'medium',
    topic: 'Measures of Dispersion'
  },
  {
    id: 'math-12-6-7',
    question: 'What is the standard deviation of the data with variance 16?',
    options: ['2', '4', '8', '16'],
    correct: '4',
    explanation: 'Standard deviation = √(variance) = √16 = 4.',
    difficulty: 'medium',
    topic: 'Measures of Dispersion'
  },
  {
    id: 'math-12-6-8',
    question: 'In a binomial distribution with n=10 and p=0.3, what is the expected value?',
    options: ['3', '7', '10', '0.3'],
    correct: '3',
    explanation: 'For binomial distribution, E(X) = np = 10 × 0.3 = 3.',
    difficulty: 'medium',
    topic: 'Probability Distributions'
  },

  // Hard Questions
  {
    id: 'math-12-6-9',
    question: 'What is the probability of getting exactly 2 heads in 5 coin tosses?',
    options: ['5/16', '10/32', '5/32', '1/2'],
    correct: '10/32',
    explanation: 'P(X = 2) = C(5,2) × (1/2)² × (1/2)³ = 10 × (1/2)⁵ = 10/32.',
    difficulty: 'hard',
    topic: 'Binomial Probability'
  },
  {
    id: 'math-12-6-10',
    question: 'In hypothesis testing, what is a Type I error?',
    options: ['Accepting false null hypothesis', 'Rejecting true null hypothesis', 'Correct decision', 'No error occurred'],
    correct: 'Rejecting true null hypothesis',
    explanation: 'Type I error occurs when we reject the null hypothesis when it is actually true.',
    difficulty: 'hard',
    topic: 'Hypothesis Testing'
  }
];