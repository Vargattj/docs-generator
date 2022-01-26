import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import ModelTable from "../styles/ModelTable";
import { banner, modelInfos } from "../models/models";
import markdownContext from "../markdownContext";
import ModelRow from "./ModelRow";
import ModelInfos from "./Modelnfos";
import TableHead from "./TableHead";

function Model(props) {
  const [isClear, setIsClear] = useState(false);

  const { reset, register, handleSubmit, getValues } = useForm({
    defaultValues: {
      onde_cadastrar: modelInfos[0].orientation_banner,
      onde_sera_exibido: modelInfos[1].orientation_banner,
      image: banner[0].orientation,
      title: banner[1].orientation,
      subtitle: banner[2].orientation,
      description: banner[3].orientation,
      external: banner[4].orientation,
      url: banner[5].orientation,
      position: banner[6].orientation,
      color: banner[7].orientation,
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

  const { setMarkdownText } = useContext(markdownContext);

  const onSubmit = (data) => {
    const markdownBanner = `
| Dúvida                          | Instrução                                                        |
| ------------------------------- | ---------------------------------------------------------------- |
| **Onde cadastrar**              | ${data.onde_cadastrar}                                                         |
| **Onde será exibido**           | ${data.onde_sera_exibido}    |
| **Cadastro exemplo em staging** |  [Admin](${data.cadastro_admin} ) / [Página](${data.cadastro_pagina})                                        |

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | ${data.functional_image} | ${data.image}                    |
| **Título**    |  ${data.functional_title}     | ${data.title}                                        |
| **Subtítulo** |  ${data.functional_subtitle}          | ${data.subtitle}                                                      |
| **Descrição** |  ${data.functional_description} | ${data.description}               |
| **Externo?**  |  ${data.functional_external} | ${data.external}    |
| **URL**       |  ${data.functional_url} | ${data.url}                                   |
| **Posição**   |  ${data.functional_position}     | ${data.position}                                  |
| **Cor**       |  ${data.functional_color} | ${data.color}                       |
  `;
    if (data) {
      setMarkdownText(markdownBanner);
    }
    console.log(data);
  };

  console.log(getValues())
  function clearForm() {
    setIsClear(true);
  }

  return (
    <ModelContainer>
      <form action="" onChange={handleSubmit(onSubmit)}>
        <h2 className="title">{props.title}</h2>
        <ModelInfos register={register} />
        <ModelTable className="model-table">
          <TableHead
            subtitle="Orientações sobre os campos:"
            headFields={['CAMPO', 'FUNCIONAL?', 'ORIENTAÇÃO']}
          />
          <div className="body">
            <ul className="column">
              {banner.map((el, i) => {
                return (
                  <ModelRow
                    hasSelect
                    name={el.name}
                    key={el.id}
                    register={register}
                    id={el.id}
                    label={el.label}
                    functional={el.functional}
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
