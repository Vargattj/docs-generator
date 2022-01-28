import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import ModelTable from "../styles/ModelTable";
// import { banner, modelInfos } from "../models/models";
// import markdownContext from "../markdownContext";
import ModelRow from "./ModelRow";
import ModelInfos from "./Modelnfos";
import TableHead from "./TableHead";
import Preview from "./Preview";

import CreateMarkdown from "./Banner";

function Model({ model, title, type }) {
  const [isClear, setIsClear] = useState(false);
  const [markdown, setMarkdown] = useState("");
  console.log('bbb', type)
  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      // onde_cadastrar: modelInfos[0].orientation_banner,
      // onde_sera_exibido: modelInfos[1].orientation_banner,
      // image: model[0].orientation,
      // title: model[1].orientation,
      // subtitle: model[2].orientation,
      // description: model[3].orientation,
      // external: model[4].orientation,
      // url: model[5].orientation,
      // position: model[6].orientation,
      // color: model[7].orientation,
    },
  });

  useEffect(() => {
    if (isClear === true) {
      reset({
        onde_cadastrar: "",
        onde_sera_exibido: "",
        cadastro_admin: "",
        cadastro_pagina: "",
        image: "",
        title: "",
        subtitle: "",
        description: "",
        external: "",
        url: "",
        position: "",
        color: "",
      });
    }
  }, [isClear, reset]);

  const type2 = type;
  console.log('aa', type2);
  const onSubmit = (data) => {
    const markdownBanner = CreateMarkdown(
      data.onde_cadastrar,
      data.onde_sera_exibido,
      data.cadastro_admin,
      data.cadastro_pagina,
      data.functional_image,
      data.functional_title,
      data.functional_subtitle,
      data.functional_description,
      data.functional_external,
      data.functional_url,
      data.functional_position,
      data.functional_color,
      data.functional_tooltip,
      data.image,
      data.title,
      data.subtitle,
      data.description,
      data.external,
      data.url,
      data.position,
      data.color,
      type,
      data.tooltip
    );

    if (data) {
      setMarkdown(markdownBanner);
    }
    console.log(data);
  };

  function clearForm() {
    setIsClear(true);
  }

  return (
    <>
      <ModelContainer>
        <form action="" onChange={handleSubmit(onSubmit)}>
          <h2 className="title">{title}</h2>
          <ModelInfos register={register} />
          <ModelTable className="model-table">
            <TableHead
              subtitle="Orientações sobre os campos:"
              headFields={["CAMPO", "FUNCIONAL?", "ORIENTAÇÃO"]}
            />
            <div className="body">
              <ul className="column">
                {model.map((el, i) => {
                  return (
                    <ModelRow
                      name={el.name}
                      key={el.id}
                      register={register}
                      id={el.id}
                      label={el.label}
                      functional={el.functional}
                      defaultValue={el.orientation}
                    />
                  );
                })}
              </ul>
            </div>
            <button className="btn" onClick={clearForm} type="button">
              Limpar Campos
            </button>
          </ModelTable>
        </form>
      </ModelContainer>
      <Preview markdownText={markdown} model={model} />
    </>
  );
}

const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  .info-table {
    margin-bottom: 30px;
  }
`;

export default Model;
