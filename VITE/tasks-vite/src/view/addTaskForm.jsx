import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000), // Simulando un ID único
      title,
      description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "inline-flex", flexDirection: "column"}}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
