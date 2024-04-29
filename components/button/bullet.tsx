import { useActive, useCommands } from "@remirror/react";

export const BulletList = () => {
  const { toggleBulletList, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleBulletList();
        focus();
      }}
      style={{ fontWeight: active.bulletList() ? "bold" : undefined }}
    >
      Bullet
    </button>
  );
};
