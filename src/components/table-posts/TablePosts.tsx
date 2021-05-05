import React, { FC } from 'react';
import './TablePosts.scss';
import { Post } from '../../services/post/post.types';

const TablePosts: FC<{ posts: Array<Post> }> = ({ posts }) => {
  function renderItem(post: Post) {
    return (
      <tr>
        <td className="table-posts__title">{post.title}</td>
        <td className="table-posts__body">{post.body}</td>
      </tr>
    );
  }

  return (
    <div className="table">
      <table className="table-posts">
        <tr>
          <th className="table-posts__title">Título</th>
          <th className="table-posts__body">Conteúdo</th>
        </tr>
        {posts.map(renderItem)}
      </table>
    </div>
  )
};

export default TablePosts;