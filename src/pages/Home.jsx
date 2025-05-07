// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { fetchProducts } from "../api/productsAPI";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-2">DISCOVER OUR PRODUCTS</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>
      <div className="flex flex-col md:flex-row">
        <FilterSidebar />
        <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}
