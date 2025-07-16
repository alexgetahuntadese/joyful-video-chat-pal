import { Chapter } from '../../../types';
import { unit1LimitsContinuity } from './unit1-limits-continuity';
import { unit2Derivatives } from './unit2-derivatives';
import { unit3Integration } from './unit3-integration';
import { unit4Matrices } from './unit4-matrices';
import { unit5LinearProgramming } from './unit5-linear-programming';
import { unit6Statistics } from './unit6-statistics';

export const grade12MathematicsChapters: Chapter[] = [
  {
    id: 'math-12-1-limits-continuity',
    name: 'Unit 1: Limits and Continuity',
    description: 'Introduction to limits, continuity, and foundational concepts of calculus',
    questions: unit1LimitsContinuity
  },
  {
    id: 'math-12-2-derivatives',
    name: 'Unit 2: Derivatives and Their Applications',
    description: 'Differentiation rules, applications of derivatives, and optimization problems',
    questions: unit2Derivatives
  },
  {
    id: 'math-12-3-integration',
    name: 'Unit 3: Integration and Its Applications',
    description: 'Antiderivatives, definite integrals, and applications to area and volume',
    questions: unit3Integration
  },
  {
    id: 'math-12-4-matrices',
    name: 'Unit 4: Matrices and Determinants',
    description: 'Matrix operations, systems of linear equations, and determinants',
    questions: unit4Matrices
  },
  {
    id: 'math-12-5-linear-programming',
    name: 'Unit 5: Linear Programming',
    description: 'Optimization problems, graphical methods, and simplex method',
    questions: unit5LinearProgramming
  },
  {
    id: 'math-12-6-statistics',
    name: 'Unit 6: Probability and Statistics',
    description: 'Probability distributions, statistical inference, and hypothesis testing',
    questions: unit6Statistics
  }
];