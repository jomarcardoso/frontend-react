import React, { FC } from 'react';
import './PaginationControl.scss';
import { Pagination } from '../../services/post/types';

const PaginationControl: FC<{ pagination: Pagination }> = ({ pagination }) => {
  function renderItem(current = false) {
    let itemClassName = 'pagination__item';

    if (current) {
      itemClassName = itemClassName.concat(' pagination__item--selected');
    }

    return (
      <li className={itemClassName}>
        {pagination.page}
      </li>
    );
  }

  return (
    <div className="pagination">
      <img src="/imgs/arrow.svg" alt="próxima página" className="icon icon--reverse" />
      <ul className="pagination__list">
        {renderItem(true)}
        {renderItem()}
        {renderItem()}
      </ul>
      <img src="/imgs/arrow.svg" alt="próxima página" className="icon"/>
    </div>
  );
};

export default PaginationControl;