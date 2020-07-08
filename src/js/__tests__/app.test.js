import healthIndicator from '../app';

test.each([
  ['healthy', { name: 'Маг', health: 100 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 99.999 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 30 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 55 }, 'wounded'],
  ['critical', { name: 'Маг', health: 29.999 }, 'critical'],
  ['critical', { name: 'Маг', health: 15 }, 'critical'],
  ['critical', { name: 'Маг', health: 0 }, 'critical'],
])(
  ('must show the level of health - %s'),
  (level, obj, expected) => {
    const result = healthIndicator(obj);
    expect(result).toBe(expected);
  },
);

// test('should show "wounded" health level in healthIndicator', () => {
//   const received = healthIndicator({ name: 'Маг', health: 31 });
//   const expected = 'wounded';
//   expect(received).toBe(expected);
// });

// test('should show "critical" health level in healthIndicator', () => {
//   const received = healthIndicator({ name: 'Маг', health: 29 });
//   const expected = 'critical';
//   expect(received).toBe(expected);
// });
