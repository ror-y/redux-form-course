import React from 'react';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={type} />
      {meta.touched && (
        <div style={{ color: 'red' }}>{meta.error}</div>
      )}
      {meta.touched && (
        <div style={{ color: 'goldenrod' }}>{meta.warning}</div>
      )}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  );
};
