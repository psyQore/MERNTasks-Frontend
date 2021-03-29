import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Obtener el state del form
  const projectsContext = useContext(projectContext);
  const { form, showForm } = projectsContext;

  // State para proyecto
  const [project, saveProject] = useState({
    name: "",
  });

  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitProject = (e) => {
    e.preventDefault();

    // Validar el proyecto

    // Agregar al state

    // Reiniciar el form
  };

  // Destructuring para sacar name
  const { name } = project;

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>

      {/* Si form esta true, muestra el formulario */}

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
