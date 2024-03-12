import React from "react";
import TextField from '@mui/material/TextField';

const Input = React.memo((props) => {
  return (
    <TextField
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
      readOnly={props.readOnly}
      required={props.required}
      style={props.style}
      label={props.label}
      id={props.id}
      variant={props.variant}
    />
  );
});

export default Input;
