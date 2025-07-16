import { Question } from '../../../types';

export const unit4Matrices: Question[] = [
  // Easy Questions
  {
    id: 'math-12-4-1',
    question: 'What is the order of matrix A = [[1, 2, 3], [4, 5, 6]]?',
    options: ['2×3', '3×2', '2×2', '3×3'],
    correct: '2×3',
    explanation: 'The order is rows × columns. Matrix A has 2 rows and 3 columns, so it is 2×3.',
    difficulty: 'easy',
    topic: 'Matrix Basics'
  },
  {
    id: 'math-12-4-2',
    question: 'What is [[1, 2], [3, 4]] + [[5, 6], [7, 8]]?',
    options: ['[[6, 8], [10, 12]]', '[[5, 12], [21, 32]]', '[[1, 2], [3, 4]]', '[[6, 8], [9, 10]]'],
    correct: '[[6, 8], [10, 12]]',
    explanation: 'Matrix addition is element-wise: [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]].',
    difficulty: 'easy',
    topic: 'Matrix Addition'
  },
  {
    id: 'math-12-4-3',
    question: 'What is the determinant of [[2, 3], [1, 4]]?',
    options: ['5', '8', '11', '2'],
    correct: '5',
    explanation: 'For 2×2 matrix [[a, b], [c, d]], det = ad - bc = 2(4) - 3(1) = 8 - 3 = 5.',
    difficulty: 'easy',
    topic: 'Determinants'
  },
  {
    id: 'math-12-4-4',
    question: 'What is 3 × [[1, 2], [3, 4]]?',
    options: ['[[3, 6], [9, 12]]', '[[4, 5], [6, 7]]', '[[1, 6], [9, 4]]', '[[3, 2], [3, 4]]'],
    correct: '[[3, 6], [9, 12]]',
    explanation: 'Scalar multiplication multiplies each element by the scalar: 3 × [[1, 2], [3, 4]] = [[3, 6], [9, 12]].',
    difficulty: 'easy',
    topic: 'Scalar Multiplication'
  },
  {
    id: 'math-12-4-5',
    question: 'What is the transpose of [[1, 2, 3], [4, 5, 6]]?',
    options: ['[[1, 4], [2, 5], [3, 6]]', '[[1, 2, 3], [4, 5, 6]]', '[[6, 5, 4], [3, 2, 1]]', '[[4, 1], [5, 2], [6, 3]]'],
    correct: '[[1, 4], [2, 5], [3, 6]]',
    explanation: 'The transpose of a matrix swaps rows and columns: A^T has element (i,j) = A(j,i).',
    difficulty: 'easy',
    topic: 'Matrix Transpose'
  },

  // Medium Questions
  {
    id: 'math-12-4-6',
    question: 'What is [[1, 2], [3, 4]] × [[5, 6], [7, 8]]?',
    options: ['[[19, 22], [43, 50]]', '[[5, 12], [21, 32]]', '[[6, 8], [10, 12]]', '[[19, 43], [22, 50]]'],
    correct: '[[19, 22], [43, 50]]',
    explanation: 'Matrix multiplication: (1×5+2×7, 1×6+2×8), (3×5+4×7, 3×6+4×8) = (19, 22), (43, 50).',
    difficulty: 'medium',
    topic: 'Matrix Multiplication'
  },
  {
    id: 'math-12-4-7',
    question: 'What is the inverse of [[2, 1], [1, 1]]?',
    options: ['[[1, -1], [-1, 2]]', '[[1, 1], [1, 2]]', '[[-1, 1], [1, -2]]', '[[2, -1], [-1, 1]]'],
    correct: '[[1, -1], [-1, 2]]',
    explanation: 'For [[a, b], [c, d]], inverse = (1/det)[[d, -b], [-c, a]]. Det = 2(1) - 1(1) = 1. Inverse = [[1, -1], [-1, 2]].',
    difficulty: 'medium',
    topic: 'Matrix Inverse'
  },
  {
    id: 'math-12-4-8',
    question: 'What is the determinant of [[1, 2, 3], [4, 5, 6], [7, 8, 9]]?',
    options: ['0', '1', '-1', '45'],
    correct: '0',
    explanation: 'This matrix has linearly dependent rows (each row is an arithmetic progression with common difference 3). Hence det = 0.',
    difficulty: 'medium',
    topic: 'Determinants 3×3'
  },

  // Hard Questions
  {
    id: 'math-12-4-9',
    question: 'Solve the system: 2x + y = 5, x + 3y = 7 using matrices.',
    options: ['x = 1, y = 3', 'x = 2, y = 1', 'x = 3, y = 1', 'x = 1, y = 2'],
    correct: 'x = 1, y = 3',
    explanation: 'Write as AX = B where A = [[2, 1], [1, 3]], X = [[x], [y]], B = [[5], [7]]. X = A^(-1)B gives x = 1, y = 3.',
    difficulty: 'hard',
    topic: 'Systems of Equations'
  },
  {
    id: 'math-12-4-10',
    question: 'What is the rank of [[1, 2, 3], [2, 4, 6], [3, 6, 9]]?',
    options: ['1', '2', '3', '0'],
    correct: '1',
    explanation: 'All rows are multiples of the first row [1, 2, 3], so only one linearly independent row. Hence rank = 1.',
    difficulty: 'hard',
    topic: 'Matrix Rank'
  }
];