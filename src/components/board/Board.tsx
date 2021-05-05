import React, { FC } from 'react';
import './Board.scss';
import { PostContent } from '../../services/post/post.types';
import TablePosts from '../table-posts/TablePosts';
import PaginationControl from '../pagination-control/PaginationControl';

const Board: FC<{ postContent: PostContent, setPage(page: number): void }> = ({ postContent, setPage }) => {
  return (
    <div className="board">
      <h2 className="board__title h2">Últimas postagens</h2>
        <TablePosts posts={postContent.posts} />
        <div className="board__footer tr">
        <div className="td">
          Exibindo {postContent.pagination.limit} postagens
        </div>
        <div className="td">
          <PaginationControl pagination={postContent.pagination} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Board;