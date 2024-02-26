import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const TodoAdd = () => {
  const [inputValue, setInputValue] = useState([]);

  const inputRef = useRef();

  // 新しいタスクを追加する関数
  const handleButtonClick = () => {
    const value = inputRef.current.value;
    const newTodo = { id: uuidv4(), name: value, complete: false };
    setInputValue([...inputValue, newTodo]);
    inputRef.current.value = '';
  };

  // 未完了のタスクの数を計算する関数
  const countIncompleteTasks = () => {
    return inputValue.filter(todo => !todo.complete).length;
  };

  // 完了したタスクを削除する関数
  const handleClear = () => {
    const remainingTasks = inputValue.filter(todo => !todo.complete);
    setInputValue(remainingTasks);
  };

  // Todo コンポーネントからの完了情報の更新を処理する関数
  const handleToggleComplete = (id, complete) => {
    const updatedTodos = inputValue.map(todo =>
      todo.id === id ? { ...todo, complete } : todo
    );
    setInputValue(updatedTodos);
  };

  return (
    <div className=''>
      <div className='flex justify-center items-center gap-2 mb-4'>
      <input 
        type="text" 
        placeholder="タスクを入力"
        ref={inputRef}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 h-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <button
        onClick={handleButtonClick}
        className='transition ease-in-out delay-80 bg-blue-500 hover:-translate-y-1 font-bold rounded-lg px-2 py-1 text-white  hover:scale-110 hover:bg-indigo-500 duration-300 '
      >追加</button>
      </div>
      <TodoList todo={inputValue} onToggleComplete={handleToggleComplete}/>
      <div className='flex items-center justify-center mt-4'>
      <button 
      onClick={handleClear}
      className='bg-green-500 hover:bg-green-900 text-white font-bold py-1 px-4 rounded-lg'
      >完了したタスクの削除</button>
      </div>
      <div
      className='flex items-center justify-center mt-4 bg-slate-400 text-white font-bold py-1 px-4'
      >未完了のタスク数: {countIncompleteTasks()}</div>
    </div>
  );
};

export default TodoAdd;
