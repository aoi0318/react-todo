import PropTypes from 'prop-types';
import { useState } from 'react';

const Todo = ({ id, name, complete, onToggleComplete }) => {
  const [isComplete, setComplete] = useState(complete);

  const toggleComplete = () => {
    const newComplete = !isComplete; // 現在の状態の反転を行う
    setComplete(newComplete);
    onToggleComplete(id, newComplete); // コールバック関数を呼び出して情報を渡す
  };
  
  return (
    <div
    className='text-2xl font-semibold flex justify-center '
    onClick={toggleComplete}
    >
      <label>
        <input 
          type="checkbox" 
          checked={isComplete} 
          onChange={toggleComplete}
          readOnly
          className='size-4 mx-1 mt-3'
        />
      </label>
      <div className='bg-zinc-200 hover:bg-blue-700 text-black rounded-lg border-solid mt-1 px-2'
      >
      {name}
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
}

export default Todo;
