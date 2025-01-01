import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchP = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setFilteredProducts(result.products); // Initialize filteredProducts
      } catch (err) {
        console.error(err);
      }
    };
    fetchP();
  }, []);

  const handleSearchClick = () => {
    const searchData = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searchData); // Update filteredProducts, not products
  };

  return (
    <>
      <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto m-5 h-12 px-5 lg:w-[500px]">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search products..."
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
          onClick={handleSearchClick}
        >
          <FaMagnifyingGlass className="w-5 h-5" />
          <span className="hidden md:block">Search</span>
        </button>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
