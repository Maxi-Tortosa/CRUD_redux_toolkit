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
	}, [id, stateTasks]);

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
			<form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
				<label htmlFor='title' className='block text-sm font-bold mb-1'>
					Task:
				</label>
				<input
					name='title'
					type='text'
					placeholder='title'
					value={task.title}
					onChange={handleChange}
					className='w-full rounded-md p-2 bg-zinc-600 mb-2'
				/>
				<label htmlFor='description' className='block text-sm font-bold mb-1'>
					description:
				</label>
				<textarea
					name='description'
					placeholder='description'
					value={task.description}
					onChange={handleChange}
					className='w-full rounded-md p-2 bg-zinc-600 mb-2'></textarea>
				<button className='bg-red-600 px-2 py-1'>Save</button>
			</form>
		</div>
	);
}

export default Tasksform;
