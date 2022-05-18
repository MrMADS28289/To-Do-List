import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify';

const tasks = ({ task, index, refatch, setRefatch }) => {

    const { title, description, _id, type } = task;

    const handleDeleteTask = (id) => {

        const procced = window.confirm('Are you Sure?');

        if (procced) {
            fetch(`http://localhost:5000/task/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            toast.success('Delete seccess')
        }
        setRefatch(refatch + 1)
    }

    const handleUpdateTask = (e, id) => {

        e.preventDefault();

        const title = 'completed';

        const updatedTask = { title };

        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setRefatch(refatch + 1)
        e.target.reset();
        toast.success('Hurray! you is task completed.')
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td className={type !== 'new' && 'line-through'}>{description}</td>
            <td>
                <button
                    onClick={e => handleUpdateTask(e, _id)}
                    className='text-green-500 text-3xl bg-gray-100 hover:bg-gray-300 mr-5 font-bold px-3 py-1 rounded-lg'><AiOutlineCheck /></button>
                <button
                    onClick={() => handleDeleteTask(_id)}
                    className='text-red-500 text-3xl bg-gray-100 hover:bg-gray-300 mr-5 font-bold px-3 py-1 rounded-lg'><FaTrash /></button>
            </td>
        </tr>
    );
};

export default tasks;