import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../features/tasks/taskSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Tasksform() {
	const [task, setTask] = useState({ title: '', description: '' });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		setTask((current) => {
			return { ...current, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask({ ...task, id: uuid(), completed: false }));
		navigate('/');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name='title'
					type='text'
					placeholder='title'
					onChange={handleChange}
				/>
				<textarea
					name='description'
					placeholder='description'
					onChange={handleChange}></textarea>
				<button>Save</button>
			</form>
		</div>
	);
}

export default Tasksform;
