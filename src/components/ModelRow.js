import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const ModelRow = ({ register, id, label, name, functional, defaultValue }) => {
  return (
    <li className="row">
      <label htmlFor={id} className="doubt">
        {label}
      </label>
      <FormSelect functional={functional} name={name} register={register} />
      <FormInput defaultValue={defaultValue} id={id} name={name} register={register} />
    </li>
  );
};

export default ModelRow;
