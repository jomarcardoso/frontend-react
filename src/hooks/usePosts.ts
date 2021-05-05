import { useEffect, useState } from 'react'
import { PostContent } from '../services/post/post.types';
import { getPosts, POST_CONTENT } from '../services/post/post';
import { setUrlByPageNumber, getCurrentPageByPath } from '../services/pagination/pagination';

const initialPage = getCurrentPageByPath();

function usePosts() {
  const [error, setError] = useState('');
  const [postContent, setPostContent] = useState<PostContent>(POST_CONTENT);
	const [currentPage, setCurrentPage] = useState(initialPage);

	useEffect(() => {
    async function get() {
      const { data, error } = await getPosts(currentPage);

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
	}, [currentPage]);

	useEffect(() => {
		const totalPages = postContent.pagination.pages;
		const fetchedPosts = postContent.pagination.limit;

		if (fetchedPosts && currentPage > totalPages) {

			setCurrentPage(totalPages);
		}
	}, [postContent, currentPage]);

  return {
    postContent,
    setCurrentPage,
    error,
  };
}

export default usePosts;
