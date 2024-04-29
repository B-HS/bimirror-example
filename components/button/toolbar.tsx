"use client";
import { AlignCenter } from "./align-center";
import { AlignJustify } from "./align-justify";
import { AlignLeft } from "./align-left";
import { AlignRight } from "./align-right";
import { Bold } from "./bold";
import { BulletList } from "./bullet";
import { Code } from "./code";
import { EditorImage } from "./image-button";
import { Italic } from "./italic";
import { CodeLink } from "./link";
import { OrderedList } from "./order";
import { Strikethrough } from "./strike";
import { Underline } from "./underline";
const ToolbarButtons = () => {
  return (
    <section className="flex gap-2">
      <Bold />
      <Italic />
      <Strikethrough />
      <Underline />
      <AlignLeft />
      <AlignCenter />
      <AlignRight />
      <AlignJustify />
      <BulletList />
      <OrderedList />
      <Code />
      <CodeLink />
      <EditorImage />
    </section>
  );
};

export default ToolbarButtons;
