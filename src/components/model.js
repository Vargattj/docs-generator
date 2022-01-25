import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import ModelTable from "../styles/ModelTable";
import { bannerFields, subtitles } from "../models/bannerFields";
import markdownContext from "../markdownContext";

function Model(props) {
  const { register, handleSubmit } = useForm();
  const { setMarkdownText } = useContext(markdownContext);
  const [clearFields, setClearFields] = useState(false);

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
  };
  function handleClearFields() {
    setClearFields(true);
  }

  return (
    <ModelContainer>
      <form action="" onChange={handleSubmit(onSubmit)}>
        <h2 className="title">{props.title}</h2>
        <ModelTable className="info-table">
          <h4 className="subtitle">
            <strong>Informações:</strong>
          </h4>
          <div className="head">
            <h3>Dúvida</h3>
            <h3>INSTRUÇÃO</h3>
          </div>
          <div className="body">
            <ul className="column">
              <li className="row">
                <label htmlFor="onde-cadastrar" className="doubt">
                  Onde cadastrar
                </label>
                <textarea
                  {...register("onde_cadastrar")}
                  wrap="soft"
                  type="text"
                  name={"onde_cadastrar"}
                  defaultValue="Banners"
                  rows={2}
                />
              </li>
              <li className="row">
                <label htmlFor="onde_sera_exibido" className="doubt">
                  Onde será exibido
                </label>
                <textarea
                  {...register("onde_sera_exibido")}
                  wrap="soft"
                  type="text"
                  rows={2}
                  defaultValue="Banner principal abaixo do header, ocupa 100% da largura da tela"
                  name="onde_sera_exibido"
                />
              </li>
              <li className="row">
                <label htmlFor="cadastro_exemplo" className="doubt">
                  Cadastro exemplo em staging
                </label>
                <textarea
                  {...register("cadastro_admin")}
                  // wrap="soft"
                  type="text"
                  rows={1}
                  name="cadastro_admin"
                  placeholder="link admin"
                />
                <textarea
                  {...register("cadastro_pagina")}
                  wrap="nowrap"
                  // wrap="none"
                  type="text"
                  rows={1}
                  white-space="nowrap"
                  name="cadastro_pagina"
                  placeholder="link página"
                />
              </li>
            </ul>
          </div>
        </ModelTable>
        <ModelTable className="model-table">
          <h4 className="subtitle">
            <strong>Orientações sobre os campos:</strong>
          </h4>
          <div className="head">
            <h3>Campo</h3>
            <h3>Funcional?</h3>
            <h3>Orientação</h3>
          </div>
          <div className="body">
            <ul className="column">
              {bannerFields.map((el, i) => {
                const functionalName = "functional_" + el.name;
                if (clearFields === true) {
                  el.orientation = "";
                }
                return (
                  <li className="row" key={el.id}>
                    <label htmlFor={el.id} className="doubt">
                      {el.label}
                    </label>
                    <select {...register(functionalName)}>
                      {subtitles.map((subtitle, i) => {
                        return (
                          <option
                            selected={
                              el.functional === subtitle.emote && "selected"
                            }
                            value={subtitle.emote}
                            key={i}
                          >
                            {subtitle.icon} {subtitle.title}
                          </option>
                        );
                      })}
                    </select>
                    <textarea
                      {...register(`${el.name}`)}
                      rows={
                        el.name === "description" || el.name === "external"
                          ? 4
                          : 2
                      }
                      wrap="soft"
                      type="text"
                      id={el.id}
                      name={el.name}
                      defaultValue={el.orientation}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="btn" onClick={handleClearFields} type="button">
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
