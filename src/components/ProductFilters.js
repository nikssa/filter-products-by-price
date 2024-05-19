import React from 'react';

export const ProductFilters = (props) => {
  const { minPrice, maxPrice, onPriceChange } = props;
  const _onPriceChange = (e) => {
    // TODO: implement handler
    onPriceChange(e.target.name, e.target.value);
  };
  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor='minPrice'>Min Price:</label>
      <input
        type='number'
        id='minPrice'
        name='minPrice'
        onChange={(e) => _onPriceChange(e)}
        placeholder='Min price...'
        defaultValue={minPrice}
      />
      <label htmlFor='maxPrice'>Max Price:</label>
      <input
        type='number'
        id='maxPrice'
        name='maxPrice'
        onChange={(e) => _onPriceChange(e)}
        placeholder='Max price...'
        defaultValue={maxPrice}
      />
    </div>
  );
};
