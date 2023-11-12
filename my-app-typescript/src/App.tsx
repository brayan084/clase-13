import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


interface ITask {
  _id: number,
  title: String
}


function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [description, setDescription] = useState<string>();


  useEffect(() => {
    const getTasks = async () => {
      try{
        const response = await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
      }catch(error){
        console.log(error);
      }
    }
    getTasks();
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      const response = await axios.post<ITask>('http://localhost:3000/tasks', {
        title: description
      })
      setTasks([...tasks, response.data]);
      setDescription('');
    }catch(error){
      console.log(error);
    }

  }

  const handleDelete = async (t: ITask) => {
    try{
      await axios.delete(`http://localhost:3000/tasks/${t._id}`);
      setTasks(tasks.filter((task) => task._id !== t._id));
    }catch(error){
      console.log(error);
    }
  }


  return (

    <div className='container'>
      <h1>Lista de tareas</h1>

      <form onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <input type='text' 
            className='form-control' 
            placeholder='Escribe una tarea' 
            value={description}
            onChange={handleInputChange}>
          </input>

          <div className="input-group-append">
            <button className='btn btn-primary' type='submit'>Agregar</button>
          </div>

        </div>

      </form>

      <ul className='list-group'>
        {tasks.map((t: ITask) => (
          <li className='list-group-item' key={t._id}>
            {t.title}
            {/* <button className='btn btn-primary' onClick={() => { handleUpdate(t) }}>
              Actualizar
            </button> */}
            <button className='btn btn-danger' onClick={() => { handleDelete(t) }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>



    </div>

  );
}

export default App;
