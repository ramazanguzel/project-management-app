import Button2 from "./Button2";

export default function AddProject() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-end gap-2">
        <Button2>Cancel</Button2>{" "}
        <Button2 className="bg-neutral text-base-100 px-4">Save</Button2>
      </div>
      <div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">TITLE</span>
          </div>
          <input type="text" className="input input-bordered w-full text-lg " />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold text-md">
              DESCRIPTION
            </span>
          </div>
          <textarea className="textarea textarea-bordered h-24 resize-none text-lg"></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">DUE DATE</span>
          </div>
          <input type="date" className="input input-bordered w-full " />
        </label>
      </div>
    </div>
  );
}
