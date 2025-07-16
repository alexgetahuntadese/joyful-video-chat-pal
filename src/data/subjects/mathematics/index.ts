import { Chapter } from '../../types';
import { grade11MathematicsChapters } from './grade11';
import { grade12MathematicsChapters } from './grade12';

export const mathematicsChapters: Chapter[] = [
  ...grade11MathematicsChapters,
  ...grade12MathematicsChapters
];
