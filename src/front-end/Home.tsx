import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Block } from '@common/types/Block';

import { DataBlockFieldForm } from '@components/DataBlockFieldForm';

const block: Extract<Block, { type: 'data-block' }> = {
  type: 'data-block',
  title: 'title',
  columns: 1,
  rows: 3,
  entries: [
    { format: 'none', field: 'text', label: 'Test 1', editOptions: { type: 'text' } },
    { format: 'none', field: 'number', label: 'Test 2', editOptions: { type: 'number', validation: { max: 99, step: 0.1 } } },
    { format: 'none', field: 'checkbox', label: 'Test 3', editOptions: { type: 'checkbox' } },
    { format: 'none', field: 'toggle', label: 'Test 4', editOptions: { type: 'toggle' } },
  ],
};

const data = {
  text: 'Default Text',
  number: 23,
  checkbox: false,
  toggle: true,
};

export const Home = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="app">
      <div className="tool-bar" />
      <div className="menu" />
      <div className="entry-bar" />
      <main>
        <div className="data-grid">
          <div className="group grid-span4">
            <span>This is a home</span>
            <a role="button" onClick={() => navigate('/test', { replace: true })}>
              Click
            </a>
          </div>
          <div className="group with-hover grid-span2">
            <button className="primary" onClick={() => console.log(formRef.current?.checkValidity())}>
              Primary
            </button>
            <button type="button" onClick={() => new FormData(formRef.current || undefined).forEach(console.log)}>
              Secondary
            </button>
          </div>
          <div className="group grid-span2">
            <input name="number" type="number" defaultValue="1" />
            <input name="text" type="text" defaultValue="123" />
          </div>
          <div className="group grid-span1">
            <textarea name="longText" defaultValue={'some\ntext'} rows={3} />
          </div>
          <form className="group grid-span1 rows-flow">
            <span className="flex-h-center">
              <input type="checkbox" defaultChecked id="checkbox1" name="checkbox" />
              <label htmlFor="checkbox1">Test</label>
            </span>
            <span className="flex-h-center">
              <input type="checkbox" className="toggle" defaultChecked id="checkbox2" name="checkbox2" />
              <label htmlFor="checkbox2">Test</label>
            </span>
            <div className="input-group">
              <input name="text" pattern="[0-9]{2}" type="text" defaultValue="123" />
              <p className="error">Form field should have 2 digits</p>
            </div>
          </form>
          <DataBlockFieldForm className="group grid-span1 rows-flow" formRef={formRef} block={block} entity={data} />
          <div className="group grid-span1">0</div>
        </div>
      </main>
    </div>
  );
};
