import { Post, PostContent, PostContentData } from './post.types';
import { PAGINATION } from '../pagination/pagination';

const TOKEN = process.env.REACT_APP_TOKEN;

export const POST_CONTENT: PostContent = {
  pagination: PAGINATION,
  posts: [],
}

function formatPost(data: Post): Post {
  return {
    body: data && data.body || '',
    title: data && data.title || '',
  };
}

function format(data: PostContentData): PostContent {
  return {
    pagination: data && data.meta && data.meta.pagination || PAGINATION,
    posts: data && Array.isArray(data.data) && data.data.map(formatPost) || [],
  };
}

export async function getPosts(page = 1): Promise<{ data?: PostContent; error?: string }> {
  if (!TOKEN) return { error: 'Token não informado.' };

  try {
    const response =
      await fetch(`https://gorest.co.in/public-api/posts?_format=json&access-token=${TOKEN}&page=${page}`);

    const data = await response.json() as PostContentData;

    return { data: format(data) };
  } catch (error) {
    return { error: 'asdf' };
  }
}