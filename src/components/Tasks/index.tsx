import { useState } from 'react';
import Button from '../Button';
import axios from 'axios';

type TasksProps = {
  id: number;
  title: string;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const handleClick = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );

    setTasks(data);
  };


  return (
    <>
      <h1>Tasks from API</h1>
      <Button onClick={handleClick}>Get Tasks API</Button>

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </>
  );
};

export default Tasks;
