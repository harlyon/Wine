import React, { useContext } from "react";
import { Context } from "../Config/context";

const CardButton = () => {
  const [state] = useContext(Context);
  const { wine } = state;
  if (wine === undefined || Object.keys(wine).length === 0) {
    return <h1>Loading........</h1>;
  }
  const url = "http://localhost:1337/wines/snipcartParser";
  console.log("orni", wine);

  // const initialState = {
  //   id: wine.id,
  //   name: wine.name,
  //   price: wine.price,
  //   description: wine.description,
  //   url: "http://localhost:1337/wines/snipcartParser"
  // };
  //  const [state, setState] = useState(initialState);

  return (
    <div>
      <button
        className="snipcart-add-item BuyButton"
        data-item-id={wine.id}
        data-item-name={wine.name}
        data-item-price={wine.price}
        data-item-url={url}
        data-item-description={wine.description}
      >
        ADD TO CART (R{wine.price})
      </button>
    </div>
  );
};

export default CardButton;
