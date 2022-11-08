export type EditOptions = {
  show?: undefined; // TODO: define
  helpText?: string;
  helpDoc?: {}; // TODO: define
} & (
  | {
      type: 'toggle' | 'checkbox';
      default?: boolean;
    }
  | {
      type: 'select';
      dataSource: string;
      default?: string;
    }
  | {
      type: 'multi-select';
      validation?: {
        minSelection?: number;
        maxSelection?: number;
      };
      dataSource: string;
      default?: string[];
    }
  | {
      type: 'multi-text';
      validation?: {
        minSelection?: number;
        maxSelection?: number;
        allowFreeText?: boolean;
      };
      dataSource: string;
      default?: string[];
    }
  | {
      type: 'text';
      validation?: {
        regexp: string;
      };
      default?: string;
    }
  | {
      type: 'number';
      validation?: {
        min?: number;
        max?: number;
        step?: number;
      };
      default?: number;
    }
);
