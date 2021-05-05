import { Post, PostContent, PostContentData } from './types';

const TOKEN = process.env.REACT_APP_TOKEN;

export const POST_CONTENT: PostContent = {
  pagination: {
    limit: 0,
    page: 0,
    pages: 0,
  },
  posts: [],
}

function formatPost(data: Post): Post {
  return {
    body: data.body,
    id: data.id,
    title: data.title,
  };
}

function format(data: PostContentData): PostContent {
  return {
    pagination: data.meta.pagination,
    posts: data.data.map(formatPost),
  };
}

export async function getPosts(page = ''): Promise<{ data?: PostContent; error?: string }> {
  try {
    const response =
      await fetch(`https://gorest.co.in/public-api/posts?_format=json&access-token=${TOKEN}&page=${page}`);

    const data = await response.json() as PostContentData;

    return { data: format(data) };
  } catch (error) {
    return { error: 'asdf' };
  }
}