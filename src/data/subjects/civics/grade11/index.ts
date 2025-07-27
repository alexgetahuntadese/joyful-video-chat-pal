import { Chapter } from '../../../types';
import { unit1ConstitutionLaw } from './unit1-constitution-law';
import { unit2CitizenshipRights } from './unit2-citizenship-rights';
import { unit3DemocraticGovernance } from './unit3-democratic-governance';
import { unit4SocialIssues } from './unit4-social-issues';
import { unit5EthicalValues } from './unit5-ethical-values';
import { unit6CivicParticipation } from './unit6-civic-participation';

export const grade11CivicsChapters: Chapter[] = [
  {
    id: 'civics-11-1-constitution-law',
    name: 'Unit 1: Constitution and Rule of Law',
    description: 'Understanding constitutional principles, rule of law, and legal systems',
    questions: unit1ConstitutionLaw
  },
  {
    id: 'civics-11-2-citizenship-rights',
    name: 'Unit 2: Citizenship and Human Rights',
    description: 'Rights and responsibilities of citizens, human rights principles',
    questions: unit2CitizenshipRights
  },
  {
    id: 'civics-11-3-democratic-governance',
    name: 'Unit 3: Democratic Governance',
    description: 'Principles of democracy, governance structures, and political systems',
    questions: unit3DemocraticGovernance
  },
  {
    id: 'civics-11-4-social-issues',
    name: 'Unit 4: Social Issues and Challenges',
    description: 'Contemporary social problems, inequality, and social justice',
    questions: unit4SocialIssues
  },
  {
    id: 'civics-11-5-ethical-values',
    name: 'Unit 5: Ethical Values and Moral Education',
    description: 'Ethics, moral reasoning, and character development',
    questions: unit5EthicalValues
  },
  {
    id: 'civics-11-6-civic-participation',
    name: 'Unit 6: Civic Participation and Community Service',
    description: 'Active citizenship, community engagement, and social responsibility',
    questions: unit6CivicParticipation
  }
];