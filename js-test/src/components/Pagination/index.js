/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

export default function Pagination({ array, pageSize }) {
  const { functions: { setOffset } } = useContext(GlobalContext);

  const getPageNumbers = () => [...new Array(Math.ceil(array.length / pageSize))]
    .map((_, index) => index);

  return (
    <ul>
      {getPageNumbers()
        .map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => setOffset(page * pageSize)}
          >
            {page + 1 }
          </button>
        ))}
    </ul>
  );
}
