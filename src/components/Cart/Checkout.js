import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => {
  // eslint-disable-next-line no-unused-expressions
  value.trim() === "";
};

const isFiveChars = (value) => {
  // eslint-disable-next-line no-unused-expressions
  value.trim().length === 5;
};

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = nameInputRef.current.value;
    const enteredPostalCode = nameInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreet);
    const enteredPostalCodeValid = !isEmpty(enteredPostalCode);
    const enteredCityValid = isFiveChars(enteredCity);

    setFormInputValidity({
      name: enteredNameValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postalCode: enteredPostalCodeValid,
    });

    if (!formInputValidity) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
