// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="border p-2 flex flex-col text-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2 mx-auto" />
      <h3 className="font-semibold text-sm line-clamp-2 mb-1">{product.title}</h3>
      <p className="text-sm font-medium text-gray-600">${product.price}</p>
    </div>
  )
}
