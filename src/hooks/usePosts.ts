import { useEffect, useState } from 'react'
import { PostContent } from '../services/post/post.types';
import { getPosts, POST_CONTENT } from '../services/post/post';
import { setUrlByPageNumber, getCurrentPageByPath } from '../services/pagination/pagination';

const TOKEN = 'token';
const initialPage = getCurrentPageByPath();
const initialToken = window.localStorage[TOKEN] || '';

function usePosts() {
  const [error, setError] = useState('');
  const [postContent, setPostContent] = useState<PostContent>(POST_CONTENT);
	const [currentPage, setCurrentPage] = useState(initialPage);
  const [token, setToken] = useState(initialToken);

	useEffect(() => {
    if (!token) return;

    async function get() {
      const { data, error } = await getPosts(currentPage, token);

      if (error) {
        setError(error);

        return;
      }

      if (!data) return;

      setPostContent(data);
    }

		get();

		if (!currentPage) return;

		setUrlByPageNumber(currentPage);
	}, [currentPage, token]);

	useEffect(() => {
		const totalPages = postContent.pagination.pages;
		const fetchedPosts = postContent.pagination.limit;

		if (fetchedPosts && currentPage > totalPages) {

			setCurrentPage(totalPages);
		}
	}, [postContent, currentPage]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem(TOKEN, token);
      return;
    };

		const typedToken = window.prompt('Insira o token para prosseguir');

    setToken(typedToken);
	}, [token]);

  return {
    postContent,
    setCurrentPage,
    error,
  };
}

export default usePosts;
