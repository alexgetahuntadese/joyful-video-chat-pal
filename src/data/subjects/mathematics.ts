import { Chapter } from '../types';
import { grade11MathematicsChapters } from './mathematics/grade11';
import { grade12MathematicsChapters } from './mathematics/grade12';

export const mathematicsChapters: Chapter[] = [
  ...grade11MathematicsChapters,
  ...grade12MathematicsChapters
];