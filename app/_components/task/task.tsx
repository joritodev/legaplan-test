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
  function deleteTask() {
    onDelete(id) 
  }
  const {handleTaksChecked} = useTasks()

  function handleMark () {
    handleTaksChecked(id)
  }
  return (
    <section>
      <input type="checkbox" id="check-task" onChange={handleMark} checked={checked}/>
      <label htmlFor="check-task">{title}</label>
      <button onClick={deleteTask}>
        <Image src="trash.svg" alt="Trash" width={24} height={24} priority />
      </button>
    </section>
  );
}

