import { useActive, useCommands } from "@remirror/react";

export const AlignLeft = () => {
  const { leftAlign, focus } = useCommands();
  const active = useActive();
  return (
    <button
      onClick={() => {
        leftAlign();
        focus();
      }}
    >
      LEFT
    </button>
  );
};
