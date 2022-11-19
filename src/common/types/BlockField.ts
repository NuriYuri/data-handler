import { CSVEntry } from './CSVEntry';
import { EditOptions } from './EditOptions';

export type BlockFieldAbstraction = {
  label: string;
  show?: undefined; // TODO: define
} & (
  | {
      format: 'none';
      editOptions: EditOptions;
    }
  | {
      format: 'translatable';
      csvFileId: string;
      editOption: Extract<EditOptions, { type: 'text' }>;
    }
  | {
      format: 'number';
      toFixedArgument?: number;
      padding?: number;
      prefix?: string | CSVEntry;
      suffix?: string | CSVEntry;
      editOptions: Extract<EditOptions, { type: 'number' }>;
    }
  | {
      format: 'label-icon' | 'label-text' | 'label-icon-with-text';
      editOptions: Extract<EditOptions, { type: 'select' | 'multi-select' }>;
    }
);

export type BlockField = { readonly field: string } & BlockFieldAbstraction;
export type ArrayBlockField = { readonly index: number } & BlockFieldAbstraction;
