// import { useState } from "react";
// import Preview from "../components/Preview";
import Model from "../components/model";
import MarkdownContext from "../markdownContext";
import { banner, menu } from "../models/models";


function Project() {

  return (
    <>
      <MarkdownContext.Provider value={""}>
        <main className="project-page">
          <Model type="banner"  model={banner}  title="Modelo do Banner" />
        </main>
        <div className="project-page">
          <Model type="menu" model={menu} title="Modelo Menu" />
        </div>
      </MarkdownContext.Provider>
    </>
  );
}

export default Project;
