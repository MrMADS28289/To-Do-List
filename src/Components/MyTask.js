import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const MyTask = () => {
    return (
        <section className='my-16'>
            <h2 className="text-3xl text-center text-gray-300 font-bold py-4">Your To-Do List</h2>
            <div class="overflow-x-auto w-[90%] mx-auto mt-10">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant lfljsdfjlsdjfsajfljsdlfkjsdlkfjlksjfkljkjoiewjrkljfiuifjlksduif</td>
                            <td>
                                <button className='text-green-500 text-3xl bg-gray-100 hover:bg-gray-300 mr-5 font-bold px-3 py-1 rounded-lg'><AiOutlineCheck /></button>
                                <button className='text-red-500 text-3xl bg-gray-100 hover:bg-gray-300 mr-5 font-bold px-3 py-1 rounded-lg'><FaTrash /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyTask;