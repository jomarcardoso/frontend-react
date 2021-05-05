import React, { Dispatch, FC, SetStateAction } from 'react';
import './Board.scss';
import { PostContent } from '../../services/post/post.types';
import TablePosts from '../table-posts/TablePosts';
import PaginationControl from '../pagination-control/PaginationControl';

const Board: FC<{
  postContent: PostContent;
  setPage: Dispatch<SetStateAction<number>>;
}> = ({ postContent, setPage }) => {
  return (
    <div className="board">
      <h2 className="board__title h2">Últimas postagens</h2>
      <div className="table">
        <div className="table__body">
          <TablePosts posts={postContent.posts} />
        </div>
        <div className="board__footer tr">
          <div className="td">
            Exibindo {postContent.posts.length} postagens
          </div>
          <div className="td">
            <PaginationControl
              pagination={postContent.pagination}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;