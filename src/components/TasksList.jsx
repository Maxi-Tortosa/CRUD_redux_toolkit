import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import React from 'react';
import { deleteTask } from '../features/tasks/taskSlice';

function TasksList() {
	const stateTasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};
	return (
		<div className='w-4/6'>
			<header className='flex justify-between items-center py-4'>
				<h1>TODO list: tasks - {stateTasks.length}</h1>
				<Link
					className='bg-red-600 px-2 py-1 rounded-sm text-sm'
					to='/create-task'>
					Create task
				</Link>
			</header>
			<div className='grid grid-cols-3 gap-4'>
				{stateTasks.map((task) => (
					<div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
						<header className='flex justify-between'>
							<h3>{task.title}</h3>
							<div className='flex gap-x-2'>
								<Link
									to={`/edit-task/${task.id}`}
									className='bg-indigo-500 px-3 py-2 rounded-md '>
									Edit
								</Link>
								<button
									onClick={() => handleDelete(task.id)}
									className='bg-green-800 px-3 py-2 rounded-md'>
									Delete
								</button>
							</div>
						</header>
						<p>{task.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default TasksList;
