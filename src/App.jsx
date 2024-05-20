import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddProject from "./components/AddProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [isProjectDetails, setIsProjectDetails] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  function isVisibleAddForm() {
    setIsAddForm(true);
    setIsProjectDetails(false);
  }

  function addProject(title, description, date) {
    const newProject = {
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      tasks: [],
    };
    setProjects([...projects, newProject]);
  }

  function deleteProject(id) {
    const targetId = id; // Replace with the actual ID you're searching for
    // const foundObject = projects.find(obj => obj.id === targetId);      find the object

    const updatedProjects = projects.filter((obj) => obj.id !== targetId);
    setProjects(updatedProjects);

    setIsProjectDetails(false);
  }

  function addTask(projectId, task) {
    const newTask = {
      id: uuidv4(),
      task: task,
    };

    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: [...project.tasks, newTask], // Add task
          }
        : project
    );
    setProjects(updatedProjects);

    // Update currentProject if it matches the projectId
    if (currentProject.id === projectId) {
      setCurrentProject({
        ...currentProject,
        tasks: [...currentProject.tasks, newTask],
      });
    }
  }

  function removeTask(projectId, taskId) {
    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId), // Remove task correctly
          }
        : project
    );

    setProjects(updatedProjects);

    // Update currentProject if it matches the projectId
    if (currentProject && currentProject.id === projectId) {
      setCurrentProject({
        ...currentProject,
        tasks: currentProject.tasks.filter((task) => task.id !== taskId), // Remove task from currentProject
      });
    }
  }

  function onClickProjectTitle(project) {
    setIsProjectDetails(true);
    setIsAddForm(false);

    setCurrentProject(project);
  }

  return (
    <section className="flex pt-20 overflow-hidden min-h-[100vh] bg-base-100">
      <div className="bg-accent-content px-12 pt-20 w-1/4 p-6 rounded-tr-3xl flex flex-col">
        <h1 className="text-3xl text-accent mb-8 font-bold ">YOUR PROJECTS</h1>
        <button
          onClick={isVisibleAddForm}
          className="discord-button text-base-100 bg-accent mb-8"
        >
          + Add Project
        </button>
        {projects.length > 0
          ? projects.map((project) => {
              return (
                <h2
                  key={project.id}
                  className="text-xl text-accent font-semibold hover:bg-accent/10 p-2 rounded-lg"
                  onClick={() => onClickProjectTitle(project)}
                >
                  {project.title}
                </h2>
              );
            })
          : null}
      </div>
      {isAddForm ? (
        <div className="w-3/4 flex justify-start items-center">
          <div className="size-3/5 px-[4%]">
            <AddProject setIsAddForm={setIsAddForm} addProject={addProject} />
          </div>
        </div>
      ) : null}

      {isProjectDetails ? (
        <div className="w-3/4 flex justify-start items-center">
          <div className="size-3/5 px-[4%]">
            <ProjectDetails
              project={currentProject}
              deleteProject={deleteProject}
              addTask={addTask}
              removeTask={removeTask}
            />
          </div>{" "}
        </div>
      ) : null}

      {!isProjectDetails && !isAddForm ? (
        <div className="flex flex-col justify-start items-center gap-4 size-3/5 pt-36 ">
          <img src="logo.png" alt="logo" className="size-[100px]" />
          <h2 className="text-4xl text-neutral m-2 font-bold">
            No Project Selected
          </h2>
          <p className="font-semibold text-lg">
            Select a project or get started with a new one
          </p>
          <button
            onClick={isVisibleAddForm}
            className="discord-button text-base-100 bg-accent"
          >
            Create New Project
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default App;
