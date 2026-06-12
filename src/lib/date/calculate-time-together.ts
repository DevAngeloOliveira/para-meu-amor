export type TimeTogether = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function calculateTimeTogether(startDate: string): TimeTogether {
  const start = new Date(`${startDate}T00:00:00`).getTime();
  const now = Date.now();

  if (Number.isNaN(start)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diff = Math.max(now - start, 0);

  return {
    days: Math.floor(diff / 1000 / 60 / 60 / 24),
    hours: Math.floor(diff / 1000 / 60 / 60) % 24,
    minutes: Math.floor(diff / 1000 / 60) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}
