export const bannerFields = [
  {
    id: 0,
    name: "image",
    label: "Imagem",
    functional: ":large_blue_circle:",
    orientation: "Dimensão sugerida 2280x1010 pixels",
  },
  { id: 1, label: "Título", name: 'title', functional: ":black_circle:", orientation: "Alt da imagem" },
  {
    id: 2,
    name: "subtitle",
    label: "Subtítulo",
    functional: ":large_blue_circle:",
    orientation: "Colocar posição do texto, opções disponíveis abaixo",
  },
  {
    id: 3,
    name: "description",
    label: "Descrição",
    functional: ":large_blue_circle:",
    orientation: "Colocar descrição do banner",
  },
  {
    id: 4,
    name: "external",
    label: "Externo?",
    functional: ":large_blue_circle:",
    orientation: "Selecionar se o link do banner deve abrir em outra aba",
  },
  {
    id: 5,
    name: "url",
    label: "URL",
    functional: ":no_entry:",
    orientation: "Link de direcionamento",
  },
  {
    id: 6,
    name: "position",
    label: "Posição?",
    functional: ":black_circle:",
    orientation: "fullbannerr",
  },
  {
    id: 7,
    name: "color",
    label: "Cor",
    functional: ":no_entry:",
    orientation: "Selecionar a cor do texto e do botão",
  },
];

export const subtitles = [
  { icon: "🔵", title: "Campo funcional", emote: ':large_blue_circle:' },
  { icon: "⛔", title: "Controle interno", emote: ':no_entry:' },
  { icon: "⚫", title: "Campo obrigatório no admin", emote: ':black_circle:' },
];
