import { useActive, useCommands } from "@remirror/react";

export const AlignCenter = () => {
  const { centerAlign, justifyAlign, focus } = useCommands();
  const activate = useActive();
  return (
    <button
      className={centerAlign!.active!() ? "font-extrabold" : "font-normal"}
      onClick={() => {
        centerAlign!.active!() ? justifyAlign() : centerAlign();

        focus();
      }}
    >
      Center
    </button>
  );
};
