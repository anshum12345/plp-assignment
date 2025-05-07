// src/components/FilterSidebar.jsx
export default function FilterSidebar() {
  const filters = ['Customize', 'Ideal For', 'Occasion', 'Work', 'Fabric', 'Segment', 'Suitable For', 'Raw Materials', 'Pattern'];

  return (
    <aside className="w-full md:w-64 border-r p-4">
      <h2 className="font-bold mb-4">FILTER</h2>
      {filters.map(filter => (
        <div key={filter} className="mb-4">
          <h3 className="font-semibold text-sm uppercase">{filter}</h3>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" /> All
          </label>
        </div>
      ))}
    </aside>
  )
}
