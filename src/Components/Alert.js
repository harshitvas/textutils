import React from "react";

const Alert = (props) => {

    const capitalized = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1); 
    }

  return (
    props.alert && <div class={`alert alert-${'success'} alert-dismissible fade show`} role="alert">
      <strong>{capitalized(props.alert.type)}</strong>: {props.alert.message}
    </div>
  );
};

export default Alert;
