import React, { FC, useEffect, useState } from 'react'
import './App.scss';
import { Header, Board } from './components';
import { PostContent } from './services/post/post.types';
import { getPosts, POST_CONTENT } from './services/post/post';

const App: FC = () => {
	const [error, setError] = useState('');
	const [postContent, setPostContent] = useState<PostContent>(POST_CONTENT);
	const [page, setPage] = useState(1);

	async function get() {
		const { data, error } = await getPosts(page);

		if (error) {
			setError(error);

			return;
		}

		if (!data) return;

		setPostContent(data);
	}

	useEffect(() => {
		get();
	}, [page]);

	return (
		<div className='app'>
			<Header />

			<div className="app__body">
				<div className="app__content">
					<Board postContent={postContent} setPage={setPage} />
				</div>
			</div>
		</div>
	)
}

export default App
