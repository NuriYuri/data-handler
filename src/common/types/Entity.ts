import { Block } from './Block';
import { CSVEntry } from './CSVEntry';

export type Entity = {
  name: string | CSVEntry;
  index: number;
  controller: 'default';
  folderPath: string;
  idField: string;
  defaultColor: string; // For label generation
  definitions: Block[];
};
