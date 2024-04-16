import PropTypes from 'prop-types';

import TaskItem from '../component/task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
      ))}
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
