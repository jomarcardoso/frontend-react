import React, { FC } from 'react';
import './PaginationControl.scss';
import { Pagination } from '../../services/post/types';

interface Page {
  number: number;
  current: boolean;
}

function generatePages(pagination: Pagination): Array<Page> {
  const pages: Array<Page> = [
    {
      current: false,
      number: pagination.page - 1,
    },
    {
      current: true,
      number: pagination.page,
    },
    {
      current: false,
      number: pagination.page + 1,
    },
  ];

  if (pagination.page === 1) {
    pages.shift();
    pages.push({ current: false, number: pagination.page + 2 });
  }

  if (pagination.page === pagination.pages) {
    pages.pop();
    pages.unshift({ current: false, number: pagination.page - 2 });
  }

  return pages;
}

const PaginationControl: FC<{ pagination: Pagination, setPage(page: number): void }> = ({ pagination, setPage }) => {
  const pages = generatePages(pagination);

  function renderItem(page: Page) {
    let itemClassName = 'pagination__item';

    if (page.current) {
      itemClassName = itemClassName.concat(' pagination__item--selected');
    }

    return (
      <li className={itemClassName}>
        <button type="button" onClick={() => {setPage(page.number)}}>
          {page.number}
        </button>
      </li>
    );
  }

  return (
    <div className="pagination">
      <button type="button" onClick={() => {setPage(pagination.page - 1)}} disabled={pagination.page === 1}>
        <img src="/imgs/arrow.svg" alt="próxima página" className="icon icon--reverse" />
      </button>
      <ul className="pagination__list">
        {pages.map(renderItem)}
      </ul>
      <button type="button" onClick={() => {setPage(pagination.page + 1)}} disabled={pagination.page === pagination.pages}>
        <img src="/imgs/arrow.svg" alt="próxima página" className="icon"/>
      </button>
    </div>
  );
};

export default PaginationControl;