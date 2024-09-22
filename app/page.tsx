import { Header } from "./components/header/header";
import "./global.scss";
import { ToDo } from "./components/todo-list/todo";
import { TasksProvider } from "@/providers/tasks-providers";
import { Toaster } from "sonner";
export default function Home() {
  return (
    <>
      <TasksProvider>
        <Header />
        <ToDo />        
        <Toaster />
      </TasksProvider>
    </>
  );
}
