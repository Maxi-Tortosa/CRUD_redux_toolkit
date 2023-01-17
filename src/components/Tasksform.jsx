import React, { useEffect, useState } from 'react';
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

function Tasksform() {
	const [task, setTask] = useState({ title: '', description: '' });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const stateTasks = useSelector((state) => state.tasks);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setTask(stateTasks.find((task) => task.id === id));
		}
	}, []);

	console.log(task);

	const handleChange = (e) => {
		setTask((current) => {
			return { ...current, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			dispatch(updateTask(task));
		} else {
			dispatch(addTask({ ...task, id: uuid(), completed: false }));
		}
		navigate('/');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name='title'
					type='text'
					placeholder='title'
					value={task.title}
					onChange={handleChange}
				/>
				<textarea
					name='description'
					placeholder='description'
					value={task.description}
					onChange={handleChange}></textarea>
				<button>Save</button>
			</form>
		</div>
	);
}

export default Tasksform;
