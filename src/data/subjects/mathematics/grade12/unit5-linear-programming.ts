import { Question } from '../../../types';

export const unit5LinearProgramming: Question[] = [
  // Easy Questions
  {
    id: 'math-12-5-1',
    question: 'What is the objective function in linear programming?',
    options: ['The constraints', 'The function to be optimized', 'The feasible region', 'The variables'],
    correct: 'The function to be optimized',
    explanation: 'The objective function is the linear function that we want to maximize or minimize.',
    difficulty: 'easy',
    topic: 'LP Basics'
  },
  {
    id: 'math-12-5-2',
    question: 'What defines the feasible region in linear programming?',
    options: ['The objective function', 'The constraints', 'The optimal solution', 'The variables'],
    correct: 'The constraints',
    explanation: 'The feasible region is the set of all points that satisfy all the constraints.',
    difficulty: 'easy',
    topic: 'Feasible Region'
  },
  {
    id: 'math-12-5-3',
    question: 'Where does the optimal solution occur in linear programming?',
    options: ['Inside the feasible region', 'At a vertex of the feasible region', 'Outside the feasible region', 'On any edge'],
    correct: 'At a vertex of the feasible region',
    explanation: 'The Fundamental Theorem of Linear Programming states that the optimal solution occurs at a vertex (corner point) of the feasible region.',
    difficulty: 'easy',
    topic: 'Optimal Solution'
  },
  {
    id: 'math-12-5-4',
    question: 'What is a constraint in linear programming?',
    options: ['An objective function', 'A linear inequality or equality', 'A variable', 'The optimal value'],
    correct: 'A linear inequality or equality',
    explanation: 'Constraints are linear inequalities or equalities that limit the values of decision variables.',
    difficulty: 'easy',
    topic: 'Constraints'
  },
  {
    id: 'math-12-5-5',
    question: 'What does "maximize Z = 3x + 2y" mean?',
    options: ['Find the minimum value of Z', 'Find the maximum value of Z', 'Set Z equal to zero', 'Find when Z is undefined'],
    correct: 'Find the maximum value of Z',
    explanation: 'This is an objective function asking to find the maximum value of Z = 3x + 2y subject to constraints.',
    difficulty: 'easy',
    topic: 'Objective Function'
  },

  // Medium Questions
  {
    id: 'math-12-5-6',
    question: 'Given constraints: x + y ≤ 4, x ≥ 0, y ≥ 0. What are the vertices of the feasible region?',
    options: ['(0,0), (4,0), (0,4)', '(0,0), (4,0), (0,4), (4,4)', '(0,0), (2,2)', '(4,0), (0,4)'],
    correct: '(0,0), (4,0), (0,4)',
    explanation: 'The feasible region is a triangle with vertices at the origin (0,0), x-intercept (4,0), and y-intercept (0,4).',
    difficulty: 'medium',
    topic: 'Finding Vertices'
  },
  {
    id: 'math-12-5-7',
    question: 'Maximize Z = 2x + 3y subject to: x + y ≤ 5, x ≥ 0, y ≥ 0. What is the maximum value?',
    options: ['10', '15', '5', '0'],
    correct: '15',
    explanation: 'Vertices are (0,0), (5,0), (0,5). Evaluate Z: Z(0,0)=0, Z(5,0)=10, Z(0,5)=15. Maximum is 15.',
    difficulty: 'medium',
    topic: 'Solving LP Problems'
  },
  {
    id: 'math-12-5-8',
    question: 'What happens if the feasible region is unbounded and the objective function has no maximum?',
    options: ['The problem has no solution', 'The maximum is infinity', 'The minimum is zero', 'The problem is infeasible'],
    correct: 'The maximum is infinity',
    explanation: 'When the feasible region is unbounded in the direction of increasing objective function, the maximum can be infinity.',
    difficulty: 'medium',
    topic: 'Unbounded Solutions'
  },

  // Hard Questions
  {
    id: 'math-12-5-9',
    question: 'A company makes products A and B. Product A gives $3 profit, B gives $2 profit. Making A requires 2 hours, B requires 1 hour. Total time available is 8 hours. What is the maximum profit?',
    options: ['$12', '$16', '$8', '$24'],
    correct: '$12',
    explanation: 'Let x = units of A, y = units of B. Maximize Z = 3x + 2y subject to 2x + y ≤ 8, x ≥ 0, y ≥ 0. Vertices: (0,0), (4,0), (0,8). Z-values: 0, 12, 16. Maximum is $16 at (0,8).',
    difficulty: 'hard',
    topic: 'Word Problems'
  },
  {
    id: 'math-12-5-10',
    question: 'In the graphical method, what does it mean when the objective function line is parallel to a constraint line?',
    options: ['No solution exists', 'Unique optimal solution', 'Multiple optimal solutions', 'Unbounded solution'],
    correct: 'Multiple optimal solutions',
    explanation: 'When the objective function line is parallel to a constraint line forming a boundary of the feasible region, all points on that edge are optimal.',
    difficulty: 'hard',
    topic: 'Multiple Solutions'
  }
];