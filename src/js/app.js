export default function healthIndicator(params) {
  let result = '';
  if (params.health >= 100) {
    result = 'healthy';
  } else if (params.health >= 30) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
console.log(healthIndicator({ name: 'Маг', health: 90 }));
