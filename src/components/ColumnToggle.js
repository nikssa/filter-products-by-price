import React from 'react';

export const ColumnToggle = (props) => {
  const { toggles, onToggle } = props;
  const _onToggle = (name, checked) => {
    // TODO: implement checkbox click handler
    onToggle(name, checked);
  };

  // TODO: Bind handlers and props
  return (
    <div className='toggle-columns'>
      {Object.keys(toggles).map((toggle, index) => {
        const checked = toggles[toggle];
        return (
          <div key={index}>
            <label htmlFor={toggle}>{toggle}</label>
            <input
              id={toggle}
              name={toggle}
              type='checkbox'
              onChange={(e) => _onToggle(e.target.name, e.target.checked)}
              checked={checked}
            />
          </div>
        );
      })}
    </div>
  );
};
