export default function Button({ children, addProject }) {
  const className =
    " max-w-[150px] min-w-fit p-3 font-semibold text-nowrap no-animation text-neutral text-xl bg-neutral-content hover:bg-neutral hover:text-neutral-content rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer ";

  return (
    <button onClick={() => addProject()} className={className}>
      {children}
    </button>
  );
}
