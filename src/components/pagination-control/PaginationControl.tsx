import React, { FC } from 'react';
import './PaginationControl.scss';
import { Pagination, Page } from '../../services/pagination/pagination.types';
import { generatePages } from '../../services/pagination/pagination';


const PaginationControl: FC<{ pagination: Pagination, setPage(page: number): void }> = ({ pagination, setPage }) => {
  const pages = generatePages(pagination);

  function renderItem(page: Page) {
    let itemClassName = 'pagination__button';

    if (page.current) {
      itemClassName = itemClassName.concat(' pagination__button--selected');
    }

    return (
      <button
        className={itemClassName}
        type="button" onClick={() => {setPage(page.number)}}
      >
        {page.number}
      </button>
    );
  }

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        type="button" onClick={() => {setPage(pagination.page - 1)}}
        disabled={pagination.page === 1}
      >
        <img src="/imgs/arrow.svg" alt="próxima página" className="icon icon--reverse" />
      </button>
      {pages.map(renderItem)}
      <button
        className="pagination__button"
        type="button"
        onClick={() => {setPage(pagination.page + 1)}}
        disabled={pagination.page === pagination.pages}
      >
        <img src="/imgs/arrow.svg" alt="próxima página" className="icon"/>
      </button>
    </div>
  );
};

export default PaginationControl;