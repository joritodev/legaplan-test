"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";

interface Task {
  id: string;
  title: string;
  checked: boolean;
}

interface TaskContextType {
  tasks: Task[];
  handleAddTask: (title: string) => void;
  deletedTasks: Task[];
  onDelete: (id: string) => void;
  handleTaksChecked: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  function handleAddTask(title: string) {
    if (!title) {
      toast.error("Pelo menos 1 letra");
      return;
    }
    const tasksObject: Task = {
      id: uuid(),
      title,
      checked: false,
    };
    setTasks([...tasks, tasksObject]);
  }

  function onDelete(id: string) {
    const tasksRestantes = tasks.filter((task) => task.id !== id);
    const deletedTasksRestantes = deletedTasks.filter((task) => task.id !== id);

    setTasks(tasksRestantes);
    setDeletedTasks(deletedTasksRestantes);
  }

  function handleTaksChecked(id: string) {
    const taskChecked = tasks.find((task) => task.id === id);
    const taskUnchecked = deletedTasks.find((task) => task.id === id);
    if (taskChecked) {
      const updatedTask = { ...taskChecked, checked: true };

      setTasks(tasks.filter((task) => task.id !== id));
      setDeletedTasks([...deletedTasks, updatedTask]);
    } else if (taskUnchecked) {
      const updatedTask = { ...taskUnchecked, checked: false };

      setDeletedTasks(deletedTasks.filter((task) => task.id !== id));
      setTasks([...tasks, updatedTask]);
    }
  }

  

  return (
    <TaskContext.Provider
      value={{
        deletedTasks,
        handleAddTask,
        onDelete,
        tasks,
        handleTaksChecked,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Erro!");
  }

  return context;
}
