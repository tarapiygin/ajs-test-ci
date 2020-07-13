import healthIndicator from '../app';

test.each([
  ['healthy', { name: 'Маг', health: 100 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 50 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 15 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 33 }, 'wounded'],
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['critical', { name: 'Маг', health: 3 }, 'critical'],
  ['critical', { name: 'Маг', health: 0 }, 'critical'],
])(
  ('must show the level of health - %s'),
  (level, obj, expected) => {
    const result = healthIndicator(obj);
    expect(result).toBe(expected);
  },
);
