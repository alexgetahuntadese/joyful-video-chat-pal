import { Question } from '../../../types';

export const unit2Genetics: Question[] = [
  // Easy Questions
  {
    id: 'bio-11-2-1',
    question: 'What is DNA?',
    options: ['A protein', 'A carbohydrate', 'Genetic material', 'A lipid'],
    correct: 'Genetic material',
    explanation: 'DNA (Deoxyribonucleic acid) is the genetic material that carries hereditary information.',
    difficulty: 'easy',
    topic: 'Genetics Basics'
  },
  {
    id: 'bio-11-2-2',
    question: 'How many chromosomes do humans have?',
    options: ['44', '46', '48', '50'],
    correct: '46',
    explanation: 'Humans have 46 chromosomes arranged in 23 pairs.',
    difficulty: 'easy',
    topic: 'Human Genetics'
  },
  {
    id: 'bio-11-2-3',
    question: 'What is a gene?',
    options: ['A chromosome', 'A cell', 'A unit of heredity', 'A protein'],
    correct: 'A unit of heredity',
    explanation: 'A gene is a unit of heredity that determines specific traits.',
    difficulty: 'easy',
    topic: 'Genetics Basics'
  },
  {
    id: 'bio-11-2-4',
    question: 'What are alleles?',
    options: ['Different chromosomes', 'Different versions of the same gene', 'Different cells', 'Different organisms'],
    correct: 'Different versions of the same gene',
    explanation: 'Alleles are different versions or forms of the same gene.',
    difficulty: 'easy',
    topic: 'Genetics Basics'
  },
  {
    id: 'bio-11-2-5',
    question: 'Who is known as the father of genetics?',
    options: ['Charles Darwin', 'Gregor Mendel', 'Watson and Crick', 'Louis Pasteur'],
    correct: 'Gregor Mendel',
    explanation: 'Gregor Mendel is known as the father of genetics for his work on inheritance patterns.',
    difficulty: 'easy',
    topic: 'History of Genetics'
  },

  // Medium Questions
  {
    id: 'bio-11-2-6',
    question: 'What is the difference between genotype and phenotype?',
    options: ['No difference', 'Genotype is genetic makeup, phenotype is observable traits', 'Genotype is observable, phenotype is genetic', 'Both are the same thing'],
    correct: 'Genotype is genetic makeup, phenotype is observable traits',
    explanation: 'Genotype refers to the genetic makeup, while phenotype refers to the observable characteristics.',
    difficulty: 'medium',
    topic: 'Genetics Terminology'
  },
  {
    id: 'bio-11-2-7',
    question: 'What is meant by dominant and recessive alleles?',
    options: ['Dominant alleles are always expressed, recessive only when homozygous', 'Recessive alleles are stronger', 'Both are equally expressed', 'Dominant alleles are rare'],
    correct: 'Dominant alleles are always expressed, recessive only when homozygous',
    explanation: 'Dominant alleles are expressed in both homozygous and heterozygous conditions, while recessive alleles are only expressed when homozygous.',
    difficulty: 'medium',
    topic: 'Inheritance Patterns'
  },
  {
    id: 'bio-11-2-8',
    question: 'What is a Punnett square used for?',
    options: ['Measuring DNA', 'Predicting offspring traits', 'Counting chromosomes', 'Studying proteins'],
    correct: 'Predicting offspring traits',
    explanation: 'A Punnett square is used to predict the probability of traits in offspring from genetic crosses.',
    difficulty: 'medium',
    topic: 'Genetic Analysis'
  },

  // Hard Questions
  {
    id: 'bio-11-2-9',
    question: 'What is the probability of two heterozygous parents (Aa × Aa) producing a homozygous recessive offspring?',
    options: ['0%', '25%', '50%', '75%'],
    correct: '25%',
    explanation: 'In a cross between two heterozygotes (Aa × Aa), there is a 25% chance of producing aa offspring.',
    difficulty: 'hard',
    topic: 'Probability in Genetics'
  },
  {
    id: 'bio-11-2-10',
    question: 'What is co-dominance?',
    options: ['One allele dominates', 'Both alleles are expressed equally', 'Neither allele is expressed', 'Alleles blend together'],
    correct: 'Both alleles are expressed equally',
    explanation: 'Co-dominance occurs when both alleles are expressed simultaneously in heterozygotes.',
    difficulty: 'hard',
    topic: 'Advanced Inheritance'
  }
];