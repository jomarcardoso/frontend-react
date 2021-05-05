import React, { FC, useEffect, useState } from 'react'
import './App.scss';
import { Header, Board } from './components';
import { PostContent } from './services/post/post.types';
import { getPosts, POST_CONTENT } from './services/post/post';
import { getCurrentPageByPath, setUrlByPageNumber } from './services/pagination/pagination';

const initialPage = getCurrentPageByPath();

const App: FC = () => {
	const [error, setError] = useState('');
	const [postContent, setPostContent] = useState<PostContent>(POST_CONTENT);
	const [currentPage, setCurrentPage] = useState(initialPage);

	async function get() {
		const { data, error } = await getPosts(currentPage);

		if (error) {
			setError(error);

			return;
		}

		if (!data) return;

		setPostContent(data);
	}

	function renderBody() {
		if (error) {
			return <p>{error}</p>;
		}

		return <Board postContent={postContent} setPage={setCurrentPage} />;
	}

	useEffect(() => {
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
	}, [postContent]);

	return (
		<div className='app'>
			<Header />
			<div className="app__body">
				<div className="app__content">
					{renderBody()}
				</div>
			</div>
		</div>
	)
}

export default App
