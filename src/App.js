import { useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Model from "./components/model";
import MarkdownContext from "./markdownContext";
import { bannerFields } from "./models/bannerFields";
import GlobalStyle from "./styles/GlobalStyle";

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

function App() {
  const [markdownText, setMarkdownText] = useState(markdownBanner);

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <>
      <GlobalStyle />
      <MarkdownContext.Provider value={contextValue}>
        <main className="main-page">
          <Model type="banner" title="Modelo do Banner" />
          <Banner markdownText={markdownText}/>
        </main>
      </MarkdownContext.Provider>
    </>
  );
}

export default App;
