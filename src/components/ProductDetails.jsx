import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const handleGoToProduct = ()=> {
    navigate('/product')
  }
  
  return (
    <div className="h-screen grid justify-center items-center">
      {state ? (
        <article>
          <div className="card bg-base-100 w-96 shadow-xl my-5">
            <figure>
              <img
                className="h-80"
                src={state.images[0]}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {state.title}
                <div className="text-gray-600">
                  Price: {state.price}$
                </div>
              </h2>
              <p>{state.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Category: {state.category}</div>
                <div className="badge badge-outline">Rating: {state.rating}</div>
                <div className="badge badge-outline">Brand: {state.brand}</div>
              </div>
              <button onClick={handleGoToProduct} className="btn btn-secondary font-bold">Back to Product Page</button>
            </div>
          </div>
          
        </article>
      ) : (
        <p>Product data not avilable</p>
      )}
      
    </div>
  );
};

export default ProductDetails;
