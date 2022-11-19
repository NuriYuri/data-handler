import React from 'react';

import { Block } from '@common/types/Block';

import { BlockFieldInput } from './BlockFieldInput';

type DataBlockFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  className?: string;
  block: Extract<Block, { type: 'data-block' }>;
  entity: Record<string, unknown>;
};

export const DataBlockFieldForm = ({ formRef, className, block, entity }: DataBlockFormProps) => {
  return (
    <form ref={formRef} className={className}>
      {block.entries.map((field) => (
        <BlockFieldInput key={field.field} field={field} entity={entity} />
      ))}
    </form>
  );
};
