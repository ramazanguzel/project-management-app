export default function Button({ children, className }) {
  const bClassName =
    " max-w-[150px] min-w-fit p-3 font-semibold text-nowrap no-animation  text-xl   rounded-xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer ";

  return <button className={bClassName + className}>{children}</button>;
}
