import React from "react";

const TableHead = ({ subtitle, headFields }) => {
  return (
    <>
      <h4 className="subtitle">
        <strong>{subtitle}</strong>
      </h4>
      <div className="head">
        {headFields &&
          headFields.map((field) => {
            return <h3>{field}</h3>;
          })}
      </div>
    </>
  );
};

export default TableHead;
