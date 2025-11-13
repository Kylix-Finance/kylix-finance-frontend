export const downsample = <T>(arr: T[], targetLength: number): T[] => {
  const n = arr.length;
  if (targetLength >= n) return arr.slice();
  if (targetLength <= 0) return [];
  const step = (n - 1) / (targetLength - 1);
  const result: T[] = [];
  for (let i = 0; i < targetLength; i++) {
    const idx = Math.round(i * step);
    result.push(arr[idx]);
  }
  return result;
};
