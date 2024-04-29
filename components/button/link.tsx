import { useActive, useCommands } from "@remirror/react";

export const CodeLink = () => {
  const { updateLink, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        focus();
      }}
      style={{ fontWeight: active.link() ? "bold" : undefined }}
    >
      Link
    </button>
  );
};
