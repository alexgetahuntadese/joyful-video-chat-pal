
import { Question } from '../../../types';

export const unit3Enzymes: Question[] = [
  // Easy Questions
  {
    id: 'bio-11-3-1',
    question: 'What are enzymes?',
    options: ['Vitamins', 'Biological catalysts', 'Minerals', 'Carbohydrates'],
    correct: 'Biological catalysts',
    explanation: 'Enzymes are proteins that act as biological catalysts, speeding up chemical reactions in living organisms.',
    difficulty: 'easy',
    topic: 'Enzyme Basics'
  },
  {
    id: 'bio-11-3-2',
    question: 'What happens to enzymes after they catalyze a reaction?',
    options: ['They are destroyed', 'They remain unchanged', 'They become products', 'They turn into substrates'],
    correct: 'They remain unchanged',
    explanation: 'Enzymes are not consumed in the reactions they catalyze and can be used repeatedly.',
    difficulty: 'easy',
    topic: 'Enzyme Properties'
  },
  {
    id: 'bio-11-3-3',
    question: 'What is the substance that an enzyme acts upon called?',
    options: ['Product', 'Substrate', 'Catalyst', 'Inhibitor'],
    correct: 'Substrate',
    explanation: 'The substrate is the specific molecule that an enzyme acts upon to catalyze a reaction.',
    difficulty: 'easy',
    topic: 'Enzyme-Substrate Interaction'
  },
  {
    id: 'bio-11-3-4',
    question: 'Where do enzyme reactions take place?',
    options: ['Anywhere on the enzyme', 'At the active site', 'Outside the enzyme', 'In the nucleus'],
    correct: 'At the active site',
    explanation: 'The active site is the specific region of an enzyme where substrate binding and catalysis occur.',
    difficulty: 'easy',
    topic: 'Active Site'
  },
  {
    id: 'bio-11-3-5',
    question: 'What type of molecules are most enzymes?',
    options: ['Lipids', 'Carbohydrates', 'Proteins', 'Nucleic acids'],
    correct: 'Proteins',
    explanation: 'Most enzymes are proteins, although some RNA molecules also have catalytic activity.',
    difficulty: 'easy',
    topic: 'Enzyme Structure'
  },

  // Medium Questions
  {
    id: 'bio-11-3-6',
    question: 'How does temperature affect enzyme activity?',
    options: ['No effect', 'Increases activity up to optimum, then decreases', 'Always increases activity', 'Always decreases activity'],
    correct: 'Increases activity up to optimum, then decreases',
    explanation: 'Enzyme activity increases with temperature up to an optimum point, after which high temperature denatures the enzyme.',
    difficulty: 'medium',
    topic: 'Factors Affecting Enzymes'
  },
  {
    id: 'bio-11-3-7',
    question: 'What is enzyme specificity?',
    options: ['Enzymes work on any substrate', 'Enzymes are specific to particular substrates', 'Enzymes work randomly', 'Enzymes only work once'],
    correct: 'Enzymes are specific to particular substrates',
    explanation: 'Enzyme specificity means that each enzyme typically catalyzes only one type of reaction with specific substrates.',
    difficulty: 'medium',
    topic: 'Enzyme Specificity'
  },
  {
    id: 'bio-11-3-8',
    question: 'What is competitive inhibition?',
    options: ['Enzymes competing with each other', 'Inhibitor competes with substrate for active site', 'Substrates competing for enzymes', 'Products inhibiting reactions'],
    correct: 'Inhibitor competes with substrate for active site',
    explanation: 'In competitive inhibition, an inhibitor molecule competes with the substrate for binding to the enzyme\'s active site.',
    difficulty: 'medium',
    topic: 'Enzyme Inhibition'
  },

  // Hard Questions
  {
    id: 'bio-11-3-9',
    question: 'What is allosteric regulation of enzymes?',
    options: ['Direct active site binding', 'Regulation through binding at sites other than active site', 'Temperature control', 'pH adjustment'],
    correct: 'Regulation through binding at sites other than active site',
    explanation: 'Allosteric regulation involves binding of regulatory molecules at sites other than the active site, causing conformational changes.',
    difficulty: 'hard',
    topic: 'Enzyme Regulation'
  },
  {
    id: 'bio-11-3-10',
    question: 'How do cofactors and coenzymes assist enzyme function?',
    options: ['They replace enzymes', 'They help enzymes achieve proper conformation and activity', 'They inhibit enzymes', 'They destroy substrates'],
    correct: 'They help enzymes achieve proper conformation and activity',
    explanation: 'Cofactors and coenzymes are non-protein helpers that assist enzymes in achieving their proper shape and catalytic activity.',
    difficulty: 'hard',
    topic: 'Enzyme Helpers'
  }
];
