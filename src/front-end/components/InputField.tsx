import React from 'react';

import { EditOptions } from '@common/types/EditOptions';

import { NumberField } from './NumberField';

type InputFieldProps = {
  editOptions: EditOptions;
  data: unknown;
  name: string;
  label: string;
};

export const InputField = ({ editOptions, data, label, name }: InputFieldProps) => {
  const { type } = editOptions;
  const id = `input__${name}`;
  switch (type) {
    case 'checkbox':
      return (
        <div className="flex-h-center">
          <input type="checkbox" id={id} name={name} defaultChecked={data === true} />
          <label htmlFor={id}>{label}</label>
        </div>
      );
    case 'toggle':
      return (
        <div className="flex-h-center">
          <input type="checkbox" id={id} name={name} defaultChecked={data === true} className="toggle" />
          <label htmlFor={id}>{label}</label>
        </div>
      );
    case 'select':
    case 'multi-select':
    case 'multi-text':
      return <p>{type} TODO: data sources</p>;
    case 'text':
      return (
        <div className="input-group">
          <label htmlFor={id}>{label}</label>
          <input type="text" id={id} name={name} pattern={editOptions.validation?.regexp} defaultValue={`${data}`} />
        </div>
      );
    case 'number':
      return <NumberField id={id} name={name} label={label} data={data} validation={editOptions.validation} />;
    default:
      return ((v: never) => v)(type);
  }
};
