import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todo, onToggleComplete }) => {
  return (
    <div>
      {todo.map(todoItem => (
        <Todo 
          key={todoItem.id} 
          id={todoItem.id} 
          name={todoItem.name} 
          complete={todoItem.complete} 
          onToggleComplete={onToggleComplete} // onToggleComplete を Todo コンポーネントに渡す
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  })).isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

export default TodoList;
