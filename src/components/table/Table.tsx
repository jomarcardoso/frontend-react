import React, { FC } from 'react';
import './Table.scss';
import { PostContent, Post } from '../../services/post/types';
import PaginationControl from '../pagination-control/PaginationControl';

const Table: FC<{ postContent: PostContent }> = ({ children, postContent }) => {
  function renderItem(post: Post) {
    return (
      <tr>
        <td className="table-post__title">{post.title}</td>
        <td className="table-post__body">{post.body}</td>
      </tr>
    );
  }

  return (
    <div className="table">
      <table className="table__content table-post">
        <tr>
          <th className="table-post__title">Título</th>
          <th className="table-post__body">Conteúdo</th>
        </tr>
        {postContent.posts.map(renderItem)}
        <tr>
          <td className="table-post__title">
            Exibindo {postContent.pagination.limit} postagens
          </td>
          <td className="table-post__body">
            <PaginationControl pagination={postContent.pagination} />
          </td>
        </tr>
      </table>
    </div>
  )
};

export default Table;