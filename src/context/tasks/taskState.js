import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Elegit Plataforma", status: true, projectId: 1 },
      { name: "Elegit Color", status: true, projectId: 2 },
      { name: "Elegit Plataforma de Pago", status: true, projectId: 3 },
      { name: "Elegit Hosting", status: true, projectId: 4 },
      { name: "Elegit Plataforma", status: true, projectId: 1 },
      { name: "Elegit Color", status: true, projectId: 4 },
      { name: "Elegit Plataforma de Pago", status: true, projectId: 2 },
      { name: "Elegit Plataforma", status: true, projectId: 2 },
      { name: "Elegit Color", status: true, projectId: 2 },
      { name: "Elegit Plataforma de Pago", status: true, projectId: 1 },
    ],
  };

  // Crear el dispatch y state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;