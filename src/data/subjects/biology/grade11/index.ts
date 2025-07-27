
import { Chapter } from '../../../types';
import { unit1BiologyTechnology } from './unit1-biology-technology';
import { unit2CharacteristicsAnimals } from './unit2-characteristics-animals';
import { unit3Enzymes } from './unit3-enzymes';
import { unit4Genetics } from './unit4-genetics';
import { unit5HumanBodySystems } from './unit5-human-body-systems';
import { unit6PopulationNaturalResources } from './unit6-population-natural-resources';

export const grade11BiologyChapters: Chapter[] = [
  {
    id: 'bio-11-1-biology-technology',
    name: 'Unit 1: Biology and Technology',
    description: 'Applications of biology in technology and biotechnology',
    questions: unit1BiologyTechnology
  },
  {
    id: 'bio-11-2-characteristics-animals',
    name: 'Unit 2: Characteristics of Animals',
    description: 'Animal classification, structure, and behavioral characteristics',
    questions: unit2CharacteristicsAnimals
  },
  {
    id: 'bio-11-3-enzymes',
    name: 'Unit 3: Enzymes',
    description: 'Enzyme structure, function, and biochemical reactions',
    questions: unit3Enzymes
  },
  {
    id: 'bio-11-4-genetics',
    name: 'Unit 4: Genetics',
    description: 'Heredity, DNA, genes, and genetic inheritance patterns',
    questions: unit4Genetics
  },
  {
    id: 'bio-11-5-human-body-systems',
    name: 'Unit 5: The Human Body Systems',
    description: 'Human anatomy, physiology, and organ system functions',
    questions: unit5HumanBodySystems
  },
  {
    id: 'bio-11-6-population-natural-resources',
    name: 'Unit 6: Population and Natural Resources',
    description: 'Population dynamics, ecology, and natural resource management',
    questions: unit6PopulationNaturalResources
  }
];
