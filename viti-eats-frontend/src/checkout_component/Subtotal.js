import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button className="rounded w-100 h-25 border-0 mt-1 bg-success text-white p-1">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
