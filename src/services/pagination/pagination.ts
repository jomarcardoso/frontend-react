import { Page, Pagination } from './pagination.types';

export const PAGINATION: Pagination = {
  limit: 0,
  page: 1,
  pages: 3,
};

export function generatePages(pagination: Pagination): Array<Page> {
  const pages: Array<Page> = [
    {
      current: false,
      number: pagination.page - 1,
    },
    {
      current: true,
      number: pagination.page,
    },
    {
      current: false,
      number: pagination.page + 1,
    },
  ];

  if (pagination.page === 1) {
    pages.shift();
    pages.push({ current: false, number: pagination.page + 2 });
  }

  if (pagination.page === pagination.pages) {
    pages.pop();
    pages.unshift({ current: false, number: pagination.page - 2 });
  }

  return pages;
}