export interface Page {
  number: number;
  current: boolean;
}

export interface Pagination {
  limit: number;
  page: number;
  pages: number;
}