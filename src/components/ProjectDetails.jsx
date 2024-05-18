import { useState } from "react";

export default function ProjectDetails({ project, deleteProject }) {
  const [task, setTask] = useState([]);

  return (
    <section className="pl-8 pr-16 flex flex-col gap-6 ">
      <div className="flex items-center justify-between max-h-fit">
        <h1 className="text-3xl text-neutral font-bold">{project.title}</h1>
        <button
          onClick={() => deleteProject(project.id)}
          className="bg-rose-700 text-base-100 px-2 discord-button"
        >
          Delete
        </button>
      </div>
      <p className="text-lg font-medium text-neutral-content">{project.date}</p>
      <p className="text-lg font-medium text-neutral">{project.description}</p>
      <hr />
      <h2 className="text-3xl text-neutral font-bold">Tasks</h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            required
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="bg-neutral text-base-100 ml-4 px-3 discord-button"
          >
            Add Task
          </button>
        </form>
      </div>
      <p className="text-lg font-medium text-neutral">
        This project does not have any tasks yet.
      </p>
    </section>
  );
}
