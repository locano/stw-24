import PropTypes from 'prop-types';

import TaskItem from '../component/task';

import copyHook from '../hooks/copyHook';

const TaskList = ({ tasks, onDeleteTask }) => {

  const copiar = copyHook([], "TaskList")

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
      ))}
      <button onClick={copiar}>test custom hook</button>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
