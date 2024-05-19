import React from 'react';

export const ProductTable = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  const { products, columns } = props;

  const columnsArray = Object.keys(columns).map((column) => {
    if (columns[column]) {
      return column;
    } else {
      return null;
    }
  });

  const isId = columnsArray.includes('id');
  const isName = columnsArray.includes('name');
  const isDepartment = columnsArray.includes('department');
  const isPrice = columnsArray.includes('price');
  const isCurrency = columnsArray.includes('currency');

  const isAllOff = !isId && !isName && !isDepartment && !isPrice && !isCurrency;

  const tableRows = products?.map((product) => {
    return (
      !isAllOff && (
        <tr key={product.id}>
          {isId && <td>{product.id}</td>}
          {isName && <td>{product.name}</td>}
          {isDepartment && <td>{product.department}</td>}
          {isPrice && <td>{product.price}</td>}
          {isCurrency && <td>{product.currency}</td>}
        </tr>
      )
    );
  });
  return (
    <div id='product-table'>
      <header>
        <strong>Products ({products.length} items)</strong>
      </header>

      <table>
        <thead>
          <tr>
            {isId && <th>ID</th>}
            {isName && <th>Name</th>}
            {isDepartment && <th>Department</th>}
            {isPrice && <th>Price</th>}
            {isCurrency && <th>Currency</th>}
          </tr>
        </thead>
        <tbody>
          {isAllOff ? (
            <tr>
              <td>
                Check at least one of the column checkboxes in order to see some
                data.
              </td>
            </tr>
          ) : products.length > 0 ? (
            <>{tableRows}</>
          ) : (
            <tr>
              <td colSpan={columnsArray.length}>
                No products found. Add or change Min Price or/and Max Price
                values in order to show different results.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
