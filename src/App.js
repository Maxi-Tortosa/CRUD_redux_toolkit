import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import TasksList from './components/TasksList';
import Tasksform from './components/Tasksform';
import { useSelector } from 'react-redux';

function App() {
	return (
		<div className='bg-zinc-900 h-screen text-white'>
			<div className='flex items-center justify-center h-full'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<TasksList />} />
						<Route path='/create-task' element={<Tasksform />} />
						<Route path='/edit-task/:id' element={<Tasksform />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
