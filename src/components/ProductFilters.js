import React from 'react';

export const ProductFilters = (props) => {
  const onPriceChange = (e) => {
    // TODO: implement handler
    props.onPriceChange(e.target.name, e.target.value);
  };
  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor='minPrice'>Min Price:</label>
      <input
        type='number'
        id='minPrice'
        name='minPrice'
        onChange={(e) => onPriceChange(e)}
        placeholder='Min price...'
      />
      <label htmlFor='maxPrice'>Max Price:</label>
      <input
        type='number'
        id='maxPrice'
        name='maxPrice'
        onChange={(e) => onPriceChange(e)}
        placeholder='Max price...'
      />
    </div>
  );
};
