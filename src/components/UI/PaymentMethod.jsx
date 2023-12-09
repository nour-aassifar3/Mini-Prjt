import React from "react";
import "../../styles/payment-method.css";
const PaymentMethod = () => {
  const styllink = {
    color: "white",
    TextDecoder: "none",
  };
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="n1" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="n1" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="n1" /> Master Card
        </label>

      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="n1" /> Paypal
        </label>
      </div>
      <div className="payment text-end mt-5">
        <button>
        <span style={styllink}>Reserve Now</span>
        </button>
      </div>
    </>
  );
};
export default PaymentMethod;
