import { useActive, useCommands } from "@remirror/react";

export const AlignJustify = () => {
  const { justifyAlign, focus } = useCommands();

  return (
    <button
      onClick={() => {
        justifyAlign();
        focus();
      }}
    >
      justify
    </button>
  );
};
