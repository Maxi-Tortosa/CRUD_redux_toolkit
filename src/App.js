import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TasksList from './components/TasksList';
import Tasksform from './components/Tasksform';
import { useSelector } from 'react-redux';

function App() {
	return (
		<div className='App'>
			<h1>Hello world</h1>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<TasksList />} />
					<Route path='/create-task' element={<Tasksform />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
