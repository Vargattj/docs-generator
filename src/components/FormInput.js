import React from "react";

const FormInput = ({ register, id, name, rows, defaultValue }, ...inputsProps) => {
  return (
    <textarea
      {...register(`${name}`)}
      // rows={name === "description" || name === "external" ? 4 : 2}
      wrap="soft"
      type="text"
      id={id}
      name={name}
      defaultValue={defaultValue}
      rows={rows}
      {...inputsProps}
    />
  );
};

export default FormInput;
