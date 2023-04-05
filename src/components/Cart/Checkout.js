import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.contorl}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Name plz" />
      </div>
      <div className={classes.contorl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder="Street! plz" />
      </div>
      <div className={classes.contorl}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" placeholder="Postal! plz" />
      </div>
      <div className={classes.contorl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="City! plz" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
