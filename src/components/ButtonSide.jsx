export default function ButtonSide({ status1, status2, setSelector, setMenu, children }) {
  return (
    <button
      disabled={status}
      onClick={() => {
        setSelector(false);
        setMenu(true);
      }}
      className="border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-full enabled:hover:bg-black enabled:hover:border-white enabled:hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black"
    >
      {children}
    </button>
  )
}
