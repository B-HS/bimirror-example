import { useActive, useCommands } from "@remirror/react";

export const Strikethrough = () => {
  const { toggleStrike, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleStrike();
        focus();
      }}
      style={{ fontWeight: active.strike() ? "bold" : undefined }}
    >
      S
    </button>
  );
};
