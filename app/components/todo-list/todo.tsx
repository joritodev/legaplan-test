"use client";
import { useTasks } from "@/providers/tasks-providers";
import { Task } from "../task/task";
import "./todo.scss";
import { useState } from "react";

export function ToDo() {
  const { deletedTasks, onDelete, tasks, handleAddTask } = useTasks();
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [titles, setTitles] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  function handleSubmit() {
    handleAddTask(titles);
    if(titles){
      setModal(false);
    }
  }
  function handleDelete() {
    return onDelete
  }
  return (
    <>
      <main>
        {tasks.length === 0 ? (
          <p>Sem tarefas à fazer no momento</p>
        ) : (
          <>
            <h1>Suas tarefas de hoje</h1>
            {tasks.map((task) => (
              <Task
                title={task.title}
                checked={task.checked}
                onDelete={onDelete}
                key={task.id}
                id={task.id}
              />
            ))}
          </>
        )}

        {deletedTasks.length === 0 ? (
          <p></p>
        ) : (
          <>
            <h1>Tarefas finalizadas</h1>
            {deletedTasks.map((task) => (
              <Task
                title={task.title}
                checked={task.checked}
                onDelete={toggleDeleteModal}
                key={task.id}
                id={task.id}
              />
            ))}
          </>
        )}
      </main>
      <button className="addButton" onClick={toggleModal}>
        Adicionar Tarefa
      </button>

      {modal && (
        <>
          <div id="blur"></div>
          <div className="modal" id="modal">
            <h1>Nova tarefa</h1>
            <div className="body">
              <label>Título</label>
              <input
                type="text"
                placeholder="Digite"
                onChange={(e) => setTitles(e.target.value)}
              />
              <div className="buttons">
                <button className="add" onClick={handleSubmit}>
                  Adicionar
                </button>
                <button
                  id="close-modal"
                  className="cancel"
                  onClick={toggleModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      
    </>
  );
}
