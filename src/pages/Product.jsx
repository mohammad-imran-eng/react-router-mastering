import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;
  const [totalPages,setTotalPages] = useState(); 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setTotalPages(Math.ceil(data.total/itemsPerPage))
      }
        
    );

      
  }, []);

  
  return (
    <>
    <h2 className="text-3xl text-center bg-gray-600 p-3 font-bold text-white border border-gray-100">All Products</h2>
    <div className="grid grid-cols-3 gap-5">
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <article key={product.id}>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {product.title}
                    <div className="text-gray-700 px-2 rounded">Price: {product.price}$</div>
                  </h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{product.category}</div>
                  </div>
                  <Link to={`/product/${product.id}`} state={product} className="btn btn-secondary mt-4 font-bold">Show Details</Link>
                </div>
              </div>
            </article>
          );
        })}
    </div>
    </>
    
    
  );
};

export default Product;
