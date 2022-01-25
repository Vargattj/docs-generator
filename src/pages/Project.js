import { useState } from "react";
import Banner from "../components/banner";
import Model from "../components/model";
import MarkdownContext from "../markdownContext";
import { bannerFields } from "../models/bannerFields";

const markdownText = bannerFields.map((field, i)=> {
  if(field.functional === ":no_entry:"){
    field.orientation = "Não utilizado"
  }
  return (
  `| **${field.label}**    | ${field.functional}  |  ${field.orientation}|`)
}).join('\r\n');

const markdownBanner = `
| Dúvida                          | Instrução                                                        |
| ------------------------------- | ---------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                          |
| **Onde será exibido**           | Banner principal abaixo do header, ocupa 100% da largura da tela |
| **Cadastro exemplo em staging** | [Admin](#) / [Página](#)   

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
${markdownText}
`

function Project() {
  const [markdownText, setMarkdownText] = useState(markdownBanner);

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <>
      <MarkdownContext.Provider value={contextValue}>
        <main className="project-page">
          <Model type="banner" title="Modelo do Banner" />
          <Banner markdownText={markdownText}/>
        </main>
      </MarkdownContext.Provider>
    </>
  );
}

export default Project;
