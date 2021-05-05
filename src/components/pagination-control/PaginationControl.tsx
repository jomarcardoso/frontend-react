import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import './PaginationControl.scss';
import { Pagination, Page } from '../../services/pagination/pagination.types';
import { generatePages } from '../../services/pagination/pagination';


const PaginationControl: FC<{
  pagination: Pagination,
  setPage: Dispatch<SetStateAction<number>>;
}> = ({ pagination, setPage }) => {
  const pages = generatePages(pagination);
  const [disabledButtons, setDisabled] = useState(false);

  function changePage(page = 0) {
    setDisabled(true);
    setPage(page);
  }

  function renderItem(page: Page) {
    const { number = 1, current = false } = page;
    let itemClassName = 'pagination__button';

    if (current) {
      itemClassName = itemClassName.concat(' pagination__button--selected');
    }

    return (
      <button
        key={number}
        className={itemClassName}
        type="button" onClick={() => {changePage(number)}}
        disabled={disabledButtons}
      >
        {number}
      </button>
    );
  }

  function renderBack() {
    const disabled = disabledButtons || pagination.page === 1;
    const imgUrl = '/imgs/arrow.svg';
    const onClick = () => { changePage(pagination.page - 1) };

    return (
      <button
        className="pagination__button"
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <img src={imgUrl} alt="página anterior" className="icon icon--mirrored" />
      </button>
    );
  }

  function renderForward() {
    const disabled = disabledButtons || pagination.page === pagination.pages;
    const onClick = () => {changePage(pagination.page + 1)};
    const imgUrl = '/imgs/arrow.svg';

    return (
      <button
        className="pagination__button"
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <img src={imgUrl} alt="próxima página" className="icon"/>
      </button>
    )
  }

  useEffect(() => {
    setDisabled(false);
  }, [pagination]);

  return (
    <div className="pagination">
      {renderBack()}
      {pages.map(renderItem)}
      {renderForward()}
    </div>
  );
};

export default PaginationControl;