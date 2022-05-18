import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Add = ({ refatch, setRefatch }) => {

    const [user] = useAuthState(auth);

    const handleAddTask = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.discription.value;
        const type = 'new';
        const email = user.email;

        const task = { title, description, type, email };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        setRefatch(refatch + 1)
        e.target.reset();
        toast.success('Task Added');

    }

    return (
        <section>
            <h2 className="text-3xl text-center text-gray-300 font-bold pt-6">Add A Task</h2>

            <form onSubmit={handleAddTask} className='flex justify-center items-center flex-col gap-4 mt-8 w-[100%] md:w-[80%] lg:w-[50%] mx-auto'>
                <input type="text" name='title' placeholder="Title" className="input input-bordered input-secondary w-full" />
                <textarea name='discription' className="textarea textarea-secondary w-full" placeholder="Description"></textarea>
                <input type="submit" value='Add' className="btn btn-outline btn-success font-bold text-lg" />
            </form>

        </section>
    );
};

export default Add;