import { useActive, useCommands } from "@remirror/react";

export const Code = () => {
  const { toggleCodeBlock, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleCodeBlock();
        focus();
      }}
      style={{ fontWeight: active.codeBlock() ? "bold" : undefined }}
    >
      Code
    </button>
  );
};
