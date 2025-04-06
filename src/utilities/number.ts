export function formatKoreanNumber(num: number): string {
  if (num < 1000) return `${num}`;

  const units = ["", "만", "억", "조"];
  let result = "";
  let unitIndex = 0;

  while (num > 0) {
    const chunk = num % 10000;
    if (chunk > 0) {
      result = `${chunk}${units[unitIndex]} ${result}`;
    }
    num = Math.floor(num / 10000);
    unitIndex++;
  }

  return result;
}