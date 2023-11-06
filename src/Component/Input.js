import React from "react";

const Input = ({ title, description, onTitleChange, onDescriptionChange }) => {
    return (
    <div className="todo-input-item">
        <label>Title:</label>
        <input
            type="text"
            placeholder="What's the title of your To Do?"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
        />
        <label>Description:</label>
        <input
            type="text"
            placeholder="What's the description of your To Do?"
            value={description}
            onChange={(event) => onDescriptionChange(event.target.value)}
        />
    </div>
    );
}

export default Input;