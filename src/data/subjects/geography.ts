
import { Chapter } from '../types';
import { foundationChapters } from './geography/foundation';
import { grade12EthiopianGeographyChapters } from './geography/grade12/index';

export const geographyChapters: Chapter[] = [
  ...foundationChapters,
  ...grade12EthiopianGeographyChapters
];
