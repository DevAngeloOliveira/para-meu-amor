export function isValidDate(value: string) {
  return !Number.isNaN(new Date(`${value}T00:00:00`).getTime());
}
