import { addMinutes } from 'date-fns';

export function getUnixTimestamp(minutes: number): number {
  const currentDate = new Date();
  const minutesFromNow = addMinutes(currentDate, minutes);
  return Math.floor(minutesFromNow.getTime() / 1000);
}