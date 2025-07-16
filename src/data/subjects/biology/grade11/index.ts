import { Chapter } from '../../../types';
import { unit1AnatomyPhysiology } from './unit1-anatomy-physiology';
import { unit2Genetics } from './unit2-genetics';
import { unit3EvolutionBiodiversity } from './unit3-evolution-biodiversity';
import { unit4Ecology } from './unit4-ecology';
import { unit5PlantBiology } from './unit5-plant-biology';
import { unit6CellBiology } from './unit6-cell-biology';

export const grade11BiologyChapters: Chapter[] = [
  {
    id: 'bio-11-1-anatomy-physiology',
    name: 'Unit 1: Human Anatomy and Physiology',
    description: 'Study of human body systems, organs, and their functions',
    questions: unit1AnatomyPhysiology
  },
  {
    id: 'bio-11-2-genetics',
    name: 'Unit 2: Genetics and Heredity',
    description: 'Principles of inheritance, DNA, genes, and genetic variation',
    questions: unit2Genetics
  },
  {
    id: 'bio-11-3-evolution-biodiversity',
    name: 'Unit 3: Evolution and Biodiversity',
    description: 'Theory of evolution, natural selection, and species diversity',
    questions: unit3EvolutionBiodiversity
  },
  {
    id: 'bio-11-4-ecology',
    name: 'Unit 4: Ecology and Environment',
    description: 'Ecosystems, food chains, environmental interactions, and conservation',
    questions: unit4Ecology
  },
  {
    id: 'bio-11-5-plant-biology',
    name: 'Unit 5: Plant Biology',
    description: 'Plant structure, photosynthesis, reproduction, and growth',
    questions: unit5PlantBiology
  },
  {
    id: 'bio-11-6-cell-biology',
    name: 'Unit 6: Cell Biology and Biochemistry',
    description: 'Cell structure, cellular processes, and biochemical reactions',
    questions: unit6CellBiology
  }
];