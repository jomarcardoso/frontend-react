import React, { FC } from 'react';
import './Board.scss';
import { PostContent } from '../../services/post/types';
import PaginationControl from '../pagination-control/PaginationControl';

const Board: FC<{ postContent: PostContent }> = ({ postContent }) => {
  return (
    <div className="board">
      <h2 className="board__title h2">Últimas postagens</h2>
      {/* <Table /> */}
      <div className="board__footer">
        <div>
          Exibindo {postContent.pagination.limit} postagens
        </div>
        <PaginationControl pagination={postContent.pagination} />
      </div>
    </div>
  );
};

export default Board;