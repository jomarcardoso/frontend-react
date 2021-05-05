import React, { FC } from 'react';
import './Table.scss';
import { PostContent, Post } from '../../services/post/types';

const Table: FC<{ posts: Array<Post> }> = ({ posts }) => {
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
      <table className="table-post">
        <tr>
          <th className="table-post__title">Título</th>
          <th className="table-post__body">Conteúdo</th>
        </tr>
        {posts.map(renderItem)}
      </table>
    </div>
  )
};

export default Table;