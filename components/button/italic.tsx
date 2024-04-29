import { useActive, useCommands } from "@remirror/react";

export const Italic = () => {
  const { toggleItalic, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleItalic();
        focus();
      }}
      style={{ fontWeight: active.italic() ? "bold" : undefined }}
    >
      I
    </button>
  );
};
