import { CSVEntry } from './CSVEntry';

export type Label = {
  color: string;
  text: string | CSVEntry;
  iconPath: string;
  value: string;
};
