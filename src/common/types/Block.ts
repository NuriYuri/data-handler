import { ArrayBlockField, BlockField } from './BlockField';

export type Block =
  | {
      type: 'data-block';
      rows: number;
      columns: number;
      entries: BlockField[];
    }
  | {
      type: 'navigable-array-data-block';
      field: string;
      rows: number;
      columns: number;
      entries: BlockField[];
    }
  | {
      type: 'array';
      field: string;
      rows: number;
      columns: number;
      entries: ArrayBlockField[];
    }
  | {
      type: 'frame';
      icon?: { type: 'explicit'; field: string; folder: string };
      name?: Extract<BlockField, { format: 'translatable' }>;
      description?: Extract<BlockField, { format: 'translatable' }>;
      labels?: [Extract<BlockField, { format: 'label-icon' | 'label-text' | 'label-icon-with-text' }>];
    };
