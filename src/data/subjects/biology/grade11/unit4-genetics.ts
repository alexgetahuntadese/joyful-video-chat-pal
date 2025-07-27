
import { Question } from '../../../types';

export const unit4Genetics: Question[] = [
  // Easy Questions
  {
    id: 'bio-11-4-1',
    question: 'What is genetics?',
    options: ['Study of rocks', 'Study of heredity and genes', 'Study of weather', 'Study of space'],
    correct: 'Study of heredity and genes',
    explanation: 'Genetics is the branch of biology that deals with heredity and the variation of inherited characteristics.',
    difficulty: 'easy',
    topic: 'Genetics Basics'
  },
  {
    id: 'bio-11-4-2',
    question: 'What is a gene?',
    options: ['A cell', 'A unit of heredity', 'An organ', 'A tissue'],
    correct: 'A unit of heredity',
    explanation: 'A gene is a unit of heredity that is transferred from a parent to offspring and determines some characteristic of the offspring.',
    difficulty: 'easy',
    topic: 'Gene Definition'
  },
  {
    id: 'bio-11-4-3',
    question: 'How many chromosomes do humans normally have?',
    options: ['23', '44', '46', '48'],
    correct: '46',
    explanation: 'Humans normally have 46 chromosomes (23 pairs) in each somatic cell.',
    difficulty: 'easy',
    topic: 'Human Chromosomes'
  },
  {
    id: 'bio-11-4-4',
    question: 'What determines biological sex in humans?',
    options: ['Height', 'Weight', 'X and Y chromosomes', 'Age'],
    correct: 'X and Y chromosomes',
    explanation: 'Biological sex in humans is determined by sex chromosomes: XX for females and XY for males.',
    difficulty: 'easy',
    topic: 'Sex Determination'
  },
  {
    id: 'bio-11-4-5',
    question: 'What is DNA?',
    options: ['A protein', 'A carbohydrate', 'A nucleic acid carrying genetic information', 'A lipid'],
    correct: 'A nucleic acid carrying genetic information',
    explanation: 'DNA (deoxyribonucleic acid) is a nucleic acid that contains the genetic instructions for life.',
    difficulty: 'easy',
    topic: 'DNA Basics'
  },

  // Medium Questions
  {
    id: 'bio-11-4-6',
    question: 'What is the difference between genotype and phenotype?',
    options: ['No difference', 'Genotype is genetic makeup, phenotype is observable traits', 'Genotype is visible, phenotype is hidden', 'They are the same thing'],
    correct: 'Genotype is genetic makeup, phenotype is observable traits',
    explanation: 'Genotype refers to the genetic constitution of an organism, while phenotype refers to observable characteristics.',
    difficulty: 'medium',
    topic: 'Genotype vs Phenotype'
  },
  {
    id: 'bio-11-4-7',
    question: 'What is a dominant allele?',
    options: ['An allele that is always harmful', 'An allele expressed in the phenotype when present', 'An allele that only appears in males', 'An allele that disappears over time'],
    correct: 'An allele expressed in the phenotype when present',
    explanation: 'A dominant allele is expressed in the phenotype even when only one copy is present.',
    difficulty: 'medium',
    topic: 'Dominant Alleles'
  },
  {
    id: 'bio-11-4-8',
    question: 'What is Mendel\'s law of segregation?',
    options: ['Traits blend together', 'Allele pairs separate during gamete formation', 'Genes are always linked', 'Mutations occur randomly'],
    correct: 'Allele pairs separate during gamete formation',
    explanation: 'Mendel\'s law of segregation states that allele pairs separate during the formation of gametes.',
    difficulty: 'medium',
    topic: 'Mendelian Genetics'
  },

  // Hard Questions
  {
    id: 'bio-11-4-9',
    question: 'What is genetic linkage?',
    options: ['All genes are identical', 'Genes located close together on the same chromosome tend to be inherited together', 'Genes never separate', 'Genes only work in pairs'],
    correct: 'Genes located close together on the same chromosome tend to be inherited together',
    explanation: 'Genetic linkage occurs when genes are located close together on the same chromosome and tend to be inherited as a unit.',
    difficulty: 'hard',
    topic: 'Genetic Linkage'
  },
  {
    id: 'bio-11-4-10',
    question: 'What is crossing over in meiosis?',
    options: ['Cell death', 'Exchange of genetic material between homologous chromosomes', 'Chromosome duplication', 'Gene deletion'],
    correct: 'Exchange of genetic material between homologous chromosomes',
    explanation: 'Crossing over is the exchange of genetic material between homologous chromosomes during meiosis, increasing genetic diversity.',
    difficulty: 'hard',
    topic: 'Meiosis and Recombination'
  }
];
