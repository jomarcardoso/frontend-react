import React, { FC } from 'react';
import './TablePosts.scss';
import { Post } from '../../services/post/post.types';

const TablePosts: FC<{ posts: Array<Post> }> = ({ posts = [] }) => {
  function renderItem(post: Post) {
    const { title = '', body = '' } = post;

    return (
      <tr key={post.title}>
        <td className="table-posts__title">{title}</td>
        <td className="table-posts__body">{body}</td>
      </tr>
    );
  }

  return (
    <table className="table-posts">
      <thead>
        <tr>
          <th className="table-posts__title">Título</th>
          <th className="table-posts__body">Conteúdo</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(renderItem)}
      </tbody>
    </table>
  )
};

export default TablePosts;