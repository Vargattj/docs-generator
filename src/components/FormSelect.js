import React from 'react';

export const subtitles = [
  { icon: "🔵", title: "Campo funcional", emote: ':large_blue_circle:' },
  { icon: "⛔", title: "Controle interno", emote: ':no_entry:' },
  { icon: "⚫", title: "Campo obrigatório no admin", emote: ':black_circle:' },
];

const FormSelect = ({ register, name, functional}) => {
  const functionalName = "functional_" + name;

  return (
    <select {...register(functionalName)}>
    {subtitles.map((subtitle, i) => {
      return (
        <option
          selected={
            functional === subtitle.emote && "selected"
          }
          value={subtitle.emote}
          key={i}
        >
          {subtitle.icon} {subtitle.title}
        </option>
      );
    })}
  </select>
  );
}

export default FormSelect;
