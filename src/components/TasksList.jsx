import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { deleteTask } from '../features/tasks/taskSlice';

function TasksList() {
	const stateTasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};
	return (
		<div>
			{stateTasks.map((task) => (
				<div key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<button onClick={() => handleDelete(task.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}

export default TasksList;
