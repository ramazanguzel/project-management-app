import { useState } from "react";

export default function AddProject({ children, setIsAddForm, addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addProject(title, description, selectedDate);
    setTitle("");
    setDescription("");
    setSelectedDate("");
    setIsAddForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-end gap-6">
          <button
            onClick={() => {
              setIsAddForm(false);
            }}
            className="text-xl font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-neutral text-base-100 px-4 discord-button"
          >
            Save
          </button>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">TITLE</span>
            </div>
            <input
              required
              type="text"
              className="input input-bordered w-full text-lg "
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold text-md">
                DESCRIPTION
              </span>
            </div>
            <textarea
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="textarea textarea-bordered h-24 resize-none text-lg"
            ></textarea>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">DUE DATE</span>
            </div>
            <input
              required
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
              }}
              type="date"
              className="input input-bordered w-full "
            />
          </label>
        </div>
      </div>
    </form>
  );
}
