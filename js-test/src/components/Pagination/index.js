/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import style from './style.module.css';

export default function Pagination({ array, pageSize }) {
  const { values: { offset }, functions: { setOffset } } = useContext(GlobalContext);

  const getPageNumbers = () => [...new Array(Math.ceil(array.length / pageSize))]
    .map((_, index) => index);

  function handleIncreaseOffsetNextButton() {
    const newOffset = offset + pageSize > array.length - 1 ? offset : offset + pageSize;
    setOffset(newOffset);
  }

  function handleDecreaseOffsetPreviousButton() {
    const newOffset = Math.max(0, offset - pageSize);
    setOffset(newOffset);
  }

  const currentPage = offset === 0 ? 1 : Math.ceil((offset / pageSize) + 1);

  return (
    <div className={style.pagination}>
      <button type="button" onClick={handleDecreaseOffsetPreviousButton}>Anterior</button>
      {getPageNumbers()
        .map((page) => (
          <button
            type="button"
            key={page}
            className={page === currentPage - 1 ? style.currentPage : style.pagination}
            onClick={() => setOffset(page * pageSize)}
          >
            {page + 1 }
          </button>
        ))}
      <button type="button" onClick={handleIncreaseOffsetNextButton}>Próxima</button>
    </div>
  );
}
