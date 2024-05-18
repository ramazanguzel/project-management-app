import { useState } from "react";
import AddProject from "./components/AddProject";
import Button from "./components/Button";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);

  function addProject() {
    setIsAddProject(true);
    console.log(isAddProject);
  }

  return (
    <section className="flex pt-20 overflow-hidden min-h-[100vh] bg-base-100">
      <div className="bg-accent-content px-12 pt-20 w-1/4 p-6 rounded-tr-3xl flex flex-col gap-4">
        <h1 className="text-3xl text-accent mb-8 font-bold ">YOUR PROJECTS</h1>
        <Button addProject={addProject}>+ Add Project</Button>
      </div>
      <div className="flex justify-center items-center w-3/4">
        <div className="size-3/5 ">
          {isAddProject ? (
            <AddProject />
          ) : (
            <div className="flex flex-col justify-start items-center gap-4">
              <img src="logo.png" alt="logo" className="size-[100px]" />
              <h2 className="text-4xl text-neutral m-2 font-bold">
                No Project Selected
              </h2>
              <p className="font-semibold text-lg">
                Select a project or get started with a new one
              </p>
              <Button addProject={addProject}>Create New Project</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
