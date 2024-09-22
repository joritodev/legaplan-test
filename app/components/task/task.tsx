"use client";
import { useState } from "react";
import "./task.scss";
import Image from "next/image";
import { useTasks } from "@/providers/tasks-providers";

interface TaskProps {
  id: string,
  title: string,
  checked: boolean,
  onDelete: (id: string) => void;

}

export function Task({id, checked, title, onDelete}: TaskProps) {
  const [deleteModal, setDeleteModal] = useState(false);

  function deleteTask() {
    onDelete(id);
  }

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  
  const {handleTaksChecked} = useTasks();

  function handleMark () {
    handleTaksChecked(id)
  }
  return (
    <section>
      <input type="checkbox" id="check-task" onChange={handleMark} checked={checked}/>
      <label htmlFor="check-task" id="title" className={`${checked ? "checked" : ""}`}>{title}</label>
      <button onClick={toggleDeleteModal}>
        <Image src="trash.svg" alt="Trash" width={24} height={24} priority />
      </button>
      {deleteModal && (
        <>
          <div id="blur"></div>
          <div className="modal" id="modal-delete">
            <h1 style={{color: "#000000", font: "Inter Tight"}}>Deletar tarefa</h1>
            <div className="body-delete">
              <p className="p-delete">
                Tem certeza que você deseja deletar essa tarefa?
              </p>
              <div className="buttons">
                <button className="delete" onClick={deleteTask}>
                  Deletar
                </button>
                <button
                  id="close-modal"
                  className="cancel"
                  onClick={toggleDeleteModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </> 
      )}
    </section>
  );
}

