import React from "react";
import { modelInfos } from "../models/models";
import ModelTable from "../styles/ModelTable";
import FormInput from "./FormInput";

const ModelInfos = ({ register }) => {
  return (
    <ModelTable className="info-table">
      <h4 className="subtitle">
        <strong>Informações sobre os campos:</strong>
      </h4>
      <div className="head">
        <h3>Dúvida</h3>
        <h3>INSTRUÇÃO</h3>
      </div>
      <div className="body">
        <ul className="column">
          {modelInfos.map((el, i) => {
            return (
              <>
                {el.name !== "cadastro_exemplo" ? (
                  <li className="row" key={el.id}>
                    <label htmlFor={el.id} className="doubt">
                      {el.label}
                    </label>
                    <FormInput id={el.id} name={el.name} register={register} />
                  </li>
                ) : (
                  <li className="row" key={el.id}>
                    <label htmlFor={el.id} className="doubt">
                      {el.label}
                    </label>
                    <FormInput
                      id={el.id}
                      name={"cadastro_admin"}
                      register={register}
                      rows={1}
                    />
                    <FormInput
                      id={el.id}
                      name={"cadastro_pagina"}
                      register={register}
                      rows={1}
                    />
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </ModelTable>
  );
};

export default ModelInfos;
