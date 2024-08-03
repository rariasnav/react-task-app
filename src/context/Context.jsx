import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <Context.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
