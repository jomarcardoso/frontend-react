import { Pagination } from '../pagination/pagination.types';
export interface Post {
  title: string;
  body: string;
}

export interface PostContentData {
  data: Array<Post>;
  meta: {
    pagination: Pagination;
  }
}

export interface PostContent {
  posts: Array<Post>;
  pagination: Pagination;
}