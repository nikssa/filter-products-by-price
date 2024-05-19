import React from 'react';

export const ColumnToggle = (props) => {
  const onToggle = (name, checked) => {
    // TODO: implement checkbox click handler
    props.onToggle(name, checked);
  };

  // TODO: Bind handlers and props
  return (
    <div className='toggle-columns'>
      {Object.keys(props.toggles).map((toggle, index) => {
        const checked = props.toggles[toggle];
        return (
          <div key={index}>
            <label htmlFor={toggle}>{toggle}</label>
            <input
              id={toggle}
              name={toggle}
              type='checkbox'
              onChange={(e) => onToggle(e.target.name, e.target.checked)}
              checked={checked}
            />
          </div>
        );
      })}
    </div>
  );
};
