import React, { useState } from "react";
import "./FormComponent.css"; // Import CSS file
import { validateForm } from "./FormValidation";
import { FormDataObject } from "./MockData/FormDataObject";
import Button from "@mui/material/Button";
import Input from "./Input";
import classes from "./Form.module.css";
import DropdownField from "./DropdownField";
// import { App } from "./NewSample/Sample";
// import Sample from "./Sample";

const FormComponent = () => {
  const { Fields, fieldsPerRow } = FormDataObject;
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when input changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, Fields, setErrors)) {
      // Form submission logic goes here
      console.log("Form submitted:", formData);
    }
  };

  const renderFields = () => {
    const rows = [];
    let currentRow = [];

    Fields.forEach((field, index) => {
      const fieldElement =
        field.type === "select" ? (
          // Render dropdown/select field
          <div key={`${field.name}-${index}`} className="form-field">
            {/* <label>{field.title}</label> */}
            <DropdownField
              key={`${field.name}-${index}`}
              field={field}
              label={field.title}
              name={field.name}
              options={field.options}
              formData={formData}
              value={formData[field.name] || ""}
              onChange={handleChange}
              errors={errors}
            />
            <div key={`${field.name}-${index}-error`} className="error-message">
              {errors[field.name]}
            </div>
          </div>
        ) : (
          // Render input field
          <div key={`${field.name}-${index}`} className="form-field">
            {/* <label>{field.title}</label> */}
            <Input
              type={field.type}
              variant="standard"
              name={field.name}
              label={field.title}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
            <div key={`${field.name}-${index}-error`} className="error-message">
              {errors[field.name]}
            </div>
          </div>
        );

      currentRow.push(fieldElement);

      if (currentRow.length === fieldsPerRow || index === Fields.length - 1) {
        rows.push(
          <div key={rows.length} className="form-row">
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    });

    return rows;
  };

  return (
    <div>
      <div className={classes.form_container}>
        {/* <h2>{FormDataObject.title}</h2> */}
        <form onSubmit={handleSubmit}>
          {renderFields()}
          <Button type={"submit"} variant="outlined">
            Submit
          </Button>
          {/* <Sample/> */}
          {/* <App/> */}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
