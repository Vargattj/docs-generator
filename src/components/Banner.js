const CreateMarkdown = (
  onde_cadastrar,
  onde_sera_exibido,
  cadastro_admin,
  cadastro_pagina,
  functional_image,
  functional_title,
  functional_subtitle,
  functional_description,
  functional_external,
  functional_url,
  functional_position,
  functional_color,
  functional_tooltip,
  image,
  title,
  subtitle,
  description,
  external,
  url,
  position,
  color,
  type,
  tooltip
) => {
  console.log('aaa', type)
  if (type === "banner") {
    return `
  | Dúvida                          | Instrução                                                        |
  | ------------------------------- | ---------------------------------------------------------------- |
  | **Onde cadastrar**              | ${onde_cadastrar}                                                         |
  | **Onde será exibido**           | ${onde_sera_exibido}    |
  | **Cadastro exemplo em staging** |  [Admin](${cadastro_admin} ) / [Página](${cadastro_pagina})                                        |
  
  | Campo         | Funcional?          | Orientação                                             |
  | ------------- | ------------------- | ------------------------------------------------------ |
  | **Imagem**    | ${functional_image} | ${image}                    |
  | **Título**    |  ${functional_title}     | ${title}                                        |
  | **Subtítulo** |  ${functional_subtitle}          | ${subtitle}                                                      |
  | **Descrição** |  ${functional_description} | ${description}               |
  | **Externo?**  |  ${functional_external} | ${external}    |
  | **URL**       |  ${functional_url} | ${url}                                   |
  | **Posição**   |  ${functional_position}     | ${position}                                  |
  | **Cor**       |  ${functional_color} | ${color}                       |
    `;
  } else if ((type === "menu")) {
    return `
| Dúvida                          | Instrução                                                        |
| ------------------------------- | ---------------------------------------------------------------- |
| **Onde cadastrar**              | ${onde_cadastrar}                                                         |
| **Onde será exibido**           | ${onde_sera_exibido}    |
| **Cadastro exemplo em staging** |  [Admin](${cadastro_admin} ) / [Página](${cadastro_pagina})                                        |

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Título**    | ${functional_title}     | ${title}                                      |
| **Tooltip**   | ${functional_tooltip}      | ${tooltip}                                                     |
| **Descrição** | ${functional_description}         | ${description}                                                     |
| **Posição**   | ${functional_tooltip}      | ${position}                                          |
| **Externo?**  | ${functional_external}  | ${external} |
| **URL**       | ${functional_tooltip}      | ${url}                               |
 `;
  }
};

export default CreateMarkdown;
