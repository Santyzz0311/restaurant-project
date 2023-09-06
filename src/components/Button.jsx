export default function Button({ children, onClick }) {
  return (
    <button
      className="border font-bold border-black transition-all duration-200 hover:bg-red-700 py-3 px-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
