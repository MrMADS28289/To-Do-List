import React from 'react';

const Add = () => {
    return (
        <section>
            <h2 className="text-3xl text-center text-gray-300 font-bold pt-6">Add A Task</h2>
            <form className='flex justify-center items-center flex-col gap-4 mt-8 w-[100%] md:w-[80%] lg:w-[50%] mx-auto'>
                <input type="text" placeholder="Title" class="input input-bordered input-secondary w-full" />
                <textarea class="textarea textarea-secondary w-full" placeholder="Description"></textarea>
                <input type="submit" value='Add' class="btn btn-outline btn-success font-bold text-lg" />
            </form>

        </section>
    );
};

export default Add;