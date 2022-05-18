import React, { useState } from 'react';
import Add from './Add';
import MyTask from './MyTask';

const ToDoApp = () => {

    const [refatch, setRefatch] = useState(5);

    console.log(refatch);

    return (
        <div>
            <Add setRefatch={setRefatch} refatch={refatch} />
            <MyTask setRefatch={setRefatch} refatch={refatch} />
        </div>
    );
};

export default ToDoApp;