import { Chapter } from '../types';
import { grade11BiologyChapters } from './biology/grade11';
import { grade12BiologyChapters } from './biology/grade12';

export const biologyChapters: Chapter[] = [
  ...grade11BiologyChapters,
  ...grade12BiologyChapters
];