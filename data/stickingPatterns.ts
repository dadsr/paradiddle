
import { StickingPattern } from '../../sticking pattern/src/types';

export const defaultPatterns: StickingPattern[] = [
  {
    id: '1',
    name: 'RLRR LRLL',
    pattern: ['R', 'L', 'R', 'R', 'L', 'R', 'L', 'L'],
    tempo: 120,
    description: 'Classic double stroke pattern'
  },
  {
    id: '2',
    name: 'Single Stroke',
    pattern: ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L'],
    tempo: 100,
    description: 'Alternating single strokes'
  },
  {
    id: '3',
    name: 'Paradiddle',
    pattern: ['R', 'L', 'R', 'R', 'L', 'R', 'L', 'L'],
    tempo: 90,
    description: 'Basic paradiddle pattern'
  },
  {
    id: '4',
    name: 'Double Stroke Roll',
    pattern: ['R', 'R', 'L', 'L', 'R', 'R', 'L', 'L'],
    tempo: 80,
    description: 'Double stroke roll pattern'
  },

  {
    id: '5',
    name: 'Double Paradiddle',
    pattern: ['R', 'L', 'R', 'L', 'R', 'R', 'L', 'R', 'L', 'R', 'L', 'L'],
    tempo: 110,
    description: 'Six-note rudiment for triplet feels and fills'
  },
  {
    id: '6',
    name: 'Para-diddle-diddle',
    pattern: ['R', 'L', 'R', 'R', 'L', 'L'],
    tempo: 100,
    description: 'Rudiment with two doubles at the end, great for flowing fills'
  },
  {
    id: '7',
    name: 'Inverted Paradiddle',
    pattern: ['R', 'R', 'L', 'R', 'L', 'L', 'R', 'L'],
    tempo: 95,
    description: 'Paradiddle variation with doubles at the start'
  },
  {
    id: '8',
    name: 'Triplet Sticking',
    pattern: ['R', 'L', 'R', 'L', 'R', 'L'],
    tempo: 120,
    description: 'Alternating single strokes in triplet subdivision'
  },
  // {
  //   id: '9',
  //   name: 'Linear Groove',
  //   pattern: ['R', 'L', 'K', 'R', 'L', 'K'],
  //   tempo: 110,
  //   description: 'No two limbs play together; K represents kick drum'
  // },
  {
    id: '10',
    name: 'Flam Accent',
    pattern: ['L', 'R', 'L', 'R', 'L', 'R'],
    tempo: 85,
    description: 'Flam on the first note of each group, for dynamic accents'
  },

  {
    id: '11',
    name: 'Swiss Army Triplet',
    pattern: ['R', 'L', 'L', 'R', 'R', 'L'],
    tempo: 90,
    description: 'Rudiment with a flam feel, great for triplet grooves'
  },
  {
    id: '12',
    name: 'Six Stroke Roll',
    pattern: ['R', 'L', 'L', 'R', 'R', 'L'],
    tempo: 100,
    description: 'Popular fill pattern, combines doubles and singles'
  },
  {
    id: '13',
    name: 'Rudimental Pyramid',
    pattern: ['R', 'L', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'L', 'R', 'R', 'L', 'L'],
    tempo: 80,
    description: 'Mixes singles and doubles for advanced control'
  },
  {
    id: '14',
    name: 'Single Drag Tap',
    pattern: ['R', 'R', 'L', 'R', 'L', 'L', 'R', 'L'],
    tempo: 85,
    description: 'Drag rudiment with alternating accents'
  },
  {
    id: '15',
    name: 'Alternating Flams',
    pattern: ['L', 'R', 'R', 'L', 'L', 'R', 'R', 'L'],
    tempo: 75,
    description: 'Flams alternating between hands for dynamic texture'
  },
  {
    id: '16',
    name: 'Double Paradiddle Inverted',
    pattern: ['R', 'R', 'L', 'R', 'L', 'R', 'L', 'L', 'R', 'L', 'R', 'L'],
    tempo: 95,
    description: 'Double paradiddle with doubles at the start'
  },
  {
    id: '17',
    name: 'Single Stroke Four',
    pattern: ['R', 'L', 'R', 'L'],
    tempo: 130,
    description: 'Fast four-note single stroke, great for fills'
  },
  {
    id: '18',
    name: 'Paradiddle-diddle Inverted',
    pattern: ['R', 'R', 'L', 'R', 'L', 'L'],
    tempo: 90,
    description: 'Paradiddle-diddle with doubles at the beginning'
  },
  {
    id: '19',
    name: 'RLLR LRRL',
    pattern: ['R', 'L', 'L', 'R', 'L', 'R', 'R', 'L'],
    tempo: 100,
    description: 'Great for developing hand independence and control'
  },
  {
    id: '20',
    name: 'Flam Tap',
    pattern: ['L', 'L', 'R', 'R', 'L', 'L', 'R', 'R'],
    tempo: 80,
    description: 'Flam on each hand, alternating doubles'
  },
];
