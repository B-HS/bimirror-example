import { useActive, useCommands } from "@remirror/react";

export const OrderedList = () => {
  const { toggleOrderedList, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleOrderedList();
        focus();
      }}
      style={{ fontWeight: active.orderedList() ? "bold" : undefined }}
    >
      Ordered
    </button>
  );
};
