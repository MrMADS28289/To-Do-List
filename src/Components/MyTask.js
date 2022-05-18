import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Task from './Task'

const MyTask = ({ refatch, setRefatch }) => {

    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-caverns-05611.herokuapp.com/tasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [refatch, user])

    return (
        <section className='my-16'>
            <h2 className="text-3xl text-center text-gray-300 font-bold py-4">Your To-Do List</h2>
            <div className="overflow-x-auto w-[90%] mx-auto mt-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <Task key={index} task={task} index={index} refatch={refatch} setRefatch={setRefatch} />)
                        }
                    </tbody>
                </table>
            </div>
            {
                tasks?.length ? '' : <p className='pt-6 text-red-200 font-bold text-center text-2xl'>You have to add a task!</p>
            }
        </section>
    );
};

export default MyTask;