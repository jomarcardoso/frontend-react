export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Pagination {
  limit: number;
  page: number;
  pages: number;
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