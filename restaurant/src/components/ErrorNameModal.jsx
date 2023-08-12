export default function ErrorNameModal({ textError }) {
  return (
    <div className="p-2 text-left text-red-500 rounded-lg bg-black" role="alert">
      <span className="font-medium">{textError}</span>
    </div>
  )
}
