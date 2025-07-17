
import { Chapter } from '../types';
import { grade10HistoryChapters } from './history/grade10';
import { grade12HistoryChaptersNew } from './history/grade12/index';

export const historyChapters: Chapter[] = [
  ...grade10HistoryChapters,
  ...grade12HistoryChaptersNew
];
