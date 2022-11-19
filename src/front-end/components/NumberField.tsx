import React from 'react';

import { EditOptions } from '@common/types/EditOptions';

type NumberFieldProps = {
  id: string;
  name: string;
  label: string;
  data: unknown;
  validation: Extract<EditOptions, { type: 'number' }>['validation'];
};

export const NumberField = ({ id, name, label, data, validation }: NumberFieldProps) => {
  const isLeftRight = validation && ((validation.min && validation.min > -999) || (validation.max && validation.max < 9999));

  return (
    <div className={isLeftRight ? 'flex-h-center' : ''}>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} name={name} defaultValue={`${data}`} min={validation?.min} max={validation?.max} step={validation?.step} />
    </div>
  );
};
