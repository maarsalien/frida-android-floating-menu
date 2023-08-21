/** @internal */
export function initCounter(start = 0) {
  let counter = start;
  return () => counter++;
}
