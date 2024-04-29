import { useActive, useCommands } from "@remirror/react";

export const AlignRight = () => {
  const { rightAlign, focus } = useCommands();

  return (
    <button
      onClick={() => {
        rightAlign();
        focus();
      }}
    >
      RIGHT
    </button>
  );
};
