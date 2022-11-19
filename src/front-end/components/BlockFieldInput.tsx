import React from 'react';

import { BlockField } from '@common/types/BlockField';

import { InputField } from './InputField';

type BlockFieldInputProps = {
  field: BlockField;
  entity: Record<string, unknown>;
};

export const BlockFieldInput = ({ field, entity }: BlockFieldInputProps) => {
  const { format } = field;
  switch (format) {
    case 'translatable':
      return <p>Input translatable (TODO)</p>;
    default:
      return <InputField editOptions={field.editOptions} name={field.field} data={entity[field.field]} label={field.label} />;
  }
};
