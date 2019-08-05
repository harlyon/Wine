import React, { useContext } from "react";
import { Context } from "../Config/context";

const Products = () => {
  const [state] = useContext(Context);
  const { wine } = state;
  if (wine === undefined || wine.length === 0) {
    return <h1>Loading........</h1>;
  }
  console.log(state);
  return (
    <div>
      <div>
        <div className="row mb-5 mt-5">
          <div className="col-12 section-title text-center mb-5">
            <h2 className="d-block">Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              perspiciatis!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {wine.map(item => (
              <div className="col-md-4 " key={item.id}>
                <div className="wine_v_1 text-center pb-4">
                  <a href="/" className="thumbnail d-block mb-4">
                    <img
                      src={`http://localhost:1337${item.image[0].url}`}
                      alt="wine"
                      className="img-fluid"
                      style={{ height: "380px", width: "500px" }}
                    />
                  </a>
                  <div>
                    <h3 className="heading mb-1">
                      <a href="/">{item.name}</a>
                    </h3>
                    <span className="price">R {item.price}.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
