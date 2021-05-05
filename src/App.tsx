import React, { FC } from 'react'
import './App.scss';
import { Header, Board } from './components';
import usePosts from './hooks/usePosts';

const App: FC = () => {
	const { postContent, setCurrentPage, error } = usePosts();

	function renderBody() {
		if (error) {
			return <p>{error}</p>;
		}

		return <Board postContent={postContent} setPage={setCurrentPage} />;
	}

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
