import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = props => {
  const [singleWine, setSingleWine] = useState({});

  const API_URL = `http://localhost:1337/wines/${props.match.params.item}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        let singleWine = res.data;
        setSingleWine({ singleWine });
        console.log(singleWine);
      })
      .catch(err => console.log(err));
  }, [API_URL, props.match.params.item]);

  if (singleWine === undefined || Object.keys(singleWine).length === 0) {
    return <h1>Loading ..................</h1>;
  } else {
    return (
      <div>
        <div className="site-section bg-danger py-5  page-title-wrap">
          <div className="container">
            <h1>{singleWine.singleWine.name}</h1>
          </div>
        </div>
        <div className="site-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="owl-carousel hero-slide owl-style">
                  <img
                    src={`http://localhost:1337${singleWine.singleWine.image[0].url}`}
                    alt="wine"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-5 ml-auto">
                <h2 className="text-danger">Wine Details</h2>
                <h3 className="text-danger">$ {singleWine.singleWine.price}</h3>
                <p>{singleWine.singleWine.description}</p>
                <div className="mb-3">
                  <div
                    className="input-group mb-5"
                    style={{ maxWidth: "200px" }}
                  ></div>
                </div>
                <p>
                  <button
                    className="height-auto buy now btn btn-sm btn-danger px-4 py-3 snipcart-add-item"
                    data-item-id={singleWine.singleWine.id}
                    data-item-price={singleWine.singleWine.price}
                    data-item-image={`http://localhost:1337${singleWine.singleWine.image[0].url}`}
                    data-item-name={singleWine.singleWine.name}
                    data-item-description={singleWine.singleWine.description}
                    data-item-url={`http://localhost:1337/wines`}
                  >
                    Add to cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProduct;
