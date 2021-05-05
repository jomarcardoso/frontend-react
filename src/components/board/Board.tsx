import React, { FC } from 'react';
import './Board.scss';
import { PostContent } from '../../services/post/types';
import Table from '../table/Table';

const Board: FC<{ postContent: PostContent }> = ({ postContent }) => {
  return (
    <div className="board">
      <h2 className="board__title h2">Últimas postagens</h2>
      <Table postContent={postContent} />
    </div>
  );
};

export default Board;