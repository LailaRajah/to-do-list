import React from 'react'
import '../App.css';
const Lists=({task}) => {
    return (
        <div>
        <h1>{task.name}</h1>
        <p>{task.description}</p>
        <h3>{task.done?"done" : "not yet"}</h3>
        </div>
    )
};
export default Lists
