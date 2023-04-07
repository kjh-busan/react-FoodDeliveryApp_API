import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

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
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreet);
    const enteredPostalCodeValid = isFiveChars(enteredPostalCode);
    const enteredCityValid = !isEmpty(enteredCity);

    console.log(
      enteredNameValid,
      ":",
      enteredStreetValid,
      ":",
      enteredPostalCodeValid,
      ":",
      enteredCityValid
    );

    setFormInputValidity({
      name: enteredNameValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postalCode: enteredPostalCodeValid,
    });

    if (!formInputValidity) {
      return;
    }

    // submit
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlCalsses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlCalsses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlCalsses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlCalsses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlCalsses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>name error!!!</p>}
      </div>
      <div className={streetControlCalsses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>street error!!!</p>}
      </div>
      <div className={postalCodeControlCalsses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>postal error!!!</p>}
      </div>
      <div className={cityControlCalsses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>city error!!!</p>}
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
