import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import TasksList from './components/TasksList';
import Tasksform from './components/Tasksform';
import { useSelector } from 'react-redux';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<TasksList />} />
					<Route path='/create-task' element={<Tasksform />} />
					<Route path='/edit-task/:id' element={<Tasksform />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
