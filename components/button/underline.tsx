import { useActive, useCommands } from "@remirror/react";

export const Underline = () => {
  const { toggleUnderline, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleUnderline();
        focus();
      }}
      style={{ fontWeight: active.underline() ? "bold" : undefined }}
    >
      U
    </button>
  );
};
