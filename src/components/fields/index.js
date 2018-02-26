import React from 'react';
import ReactJson from 'react-json-view';

export const customInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      <ReactJson src={props.meta} />
    </div>
  )
}

export const customSelect = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option />
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      <ReactJson src={props.meta} />
    </div>
  )
}