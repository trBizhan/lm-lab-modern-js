export function add(...args) {
  let sum = 0;
  for (const arg of args) sum += arg;
  return sum;
}
