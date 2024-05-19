import React, { useState } from 'react';

import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductTable } from './ProductTable';
import { ProductFilters } from './ProductFilters';
import products from '../assets/products.json';

export const ProductSearch = (props) => {
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });
  const [filteredItems, setFilteredItems] = useState(products);

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceChange = (name, value) => {
    // TODO: implement price change handler
    setPrice({ ...price, [name]: value });
    onFilter({ ...price, [name]: value });
  };

  const onToggle = (name, checked) => {
    // TODO: implement column toggle handler
    setToggles({ ...toggles, [name]: checked });
  };

  const onFilter = (price) => {
    // TODO: implement handler for filtering products by price range
    setFilteredItems(
      products.filter((product) => {
        if (
          price.minPrice &&
          (product.price < price.minPrice ||
            (price.minPrice < 0 && price.maxPrice < 0))
        ) {
          return false;
        }
        if (
          price.maxPrice &&
          (product.price > price.maxPrice ||
            (price.maxPrice < 0 && price.minPrice < 0))
        ) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className='Products'>
      <ProductFilters
        minPrice={price.minPrice}
        maxPrice={price.maxPrice}
        onPriceChange={onPriceChange}
      />

      <ColumnToggle onToggle={onToggle} toggles={toggles} />

      <ProductTable products={filteredItems} columns={toggles} />
    </div>
  );
};

export default ProductSearch;
